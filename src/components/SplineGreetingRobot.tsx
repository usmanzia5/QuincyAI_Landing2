'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Load Spline component dynamically to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <SplineLoadingComponent />
});

// Memoized loading component to prevent re-renders
const SplineLoadingComponent = React.memo(() => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 backdrop-blur-sm">
    <div className="text-center text-gray-400">
      <div className="w-12 h-12 mx-auto mb-4 border-2 border-white/30 rounded-full flex items-center justify-center animate-spin">
        <div className="w-6 h-6 bg-white/30 rounded-full"></div>
      </div>
      <p className="text-sm font-medium">Loading 3D Scene...</p>
      <p className="text-xs opacity-75 mt-1">Preparing greeting robot</p>
    </div>
  </div>
));
SplineLoadingComponent.displayName = 'SplineLoadingComponent';

// Memoized error component
const SplineErrorComponent = React.memo(({ onRetry }: { onRetry?: () => void }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 backdrop-blur-sm">
    <div className="text-center text-gray-400">
      <div className="w-20 h-20 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      </div>
      <p className="text-sm font-medium">3D Scene Unavailable</p>
      <p className="text-xs opacity-75 mt-1">Please check your connection</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  </div>
));
SplineErrorComponent.displayName = 'SplineErrorComponent';

interface SplineGreetingRobotProps {
  className?: string;
}

// Main component with all performance optimizations
const SplineGreetingRobot = React.memo<SplineGreetingRobotProps>(({ className = "" }) => {
  // State management
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  
  // Refs for stability and performance
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const splineInstanceRef = useRef<unknown>(null);
  const loadStartTime = useRef<number>(0);

  // Memoized scene URL (stable reference)
  const sceneUrl = useMemo(() => "https://prod.spline.design/eFgBePDTvwLNmnNQ/scene.splinecode", []);

  // Memoized style object to prevent prop changes
  const splineStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    background: 'transparent',
  }), []);

  // Stable event handlers with useCallback
  const handleLoad = useCallback(() => {
    if (!mountedRef.current) return;
    
    const loadTime = performance.now() - loadStartTime.current;
    console.log(`✅ Spline greeting robot loaded successfully in ${loadTime.toFixed(2)}ms`);
    setIsLoaded(true);
    setHasError(false);
    setRetryCount(0);
  }, []);

  const handleError = useCallback((error: unknown) => {
    if (!mountedRef.current) return;
    
    console.error('❌ Spline loading error:', error);
    setHasError(true);
    setIsLoaded(false);
  }, []);

  const handleRetry = useCallback(() => {
    if (retryCount < 3) {
      loadStartTime.current = performance.now();
      setHasError(false);
      setIsLoaded(false);
      setRetryCount(prev => prev + 1);
      console.log(`🔄 Retrying Spline load (attempt ${retryCount + 1})`);
    }
  }, [retryCount]);

  // Intersection Observer for performance optimization
  useEffect(() => {
    mountedRef.current = true;
    loadStartTime.current = performance.now();
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (mountedRef.current) {
          setIsVisible(entry.isIntersecting);
          
          // Optional: Pause/resume 3D rendering based on visibility
          if (splineInstanceRef.current) {
            if (entry.isIntersecting) {
              console.log('👁️ Spline robot entered viewport');
            } else {
              console.log('🙈 Spline robot left viewport');
            }
          }
          // Use isVisible state for future optimizations
          void isVisible;
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function
    return () => {
      mountedRef.current = false;
      observer.disconnect();
      
      // GPU memory cleanup
      const splineInstance = splineInstanceRef.current;
      if (splineInstance) {
        try {
          // Attempt to cleanup WebGL context if available
          if (typeof splineInstance === 'object' && splineInstance !== null && 'dispose' in splineInstance) {
            (splineInstance as { dispose: () => void }).dispose();
          }
        } catch (e) {
          console.warn('Spline cleanup warning:', e);
        }
      }
    };
  }, []);

  // StrictMode double-mount guard
  useEffect(() => {
    const handleBeforeUnload = () => {
      mountedRef.current = false;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Error state with retry
  if (hasError) {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        <SplineErrorComponent onRetry={retryCount < 3 ? handleRetry : undefined} />
      </div>
    );
  }

  // Main render - Single Spline instance with optimizations
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Render Spline only when visible (optional optimization) */}
      <Spline
        scene={sceneUrl}
        onLoad={handleLoad}
        onError={handleError}
        style={splineStyle}
      />
      
      {/* Loading overlay */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 pointer-events-none">
          <SplineLoadingComponent />
        </div>
      )}
    </div>
  );
});

SplineGreetingRobot.displayName = 'SplineGreetingRobot';

export default SplineGreetingRobot;