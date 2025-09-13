import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Quincy AI',
  description: 'Privacy Policy for Quincy AI - How we collect, use, and protect your personal information in compliance with BC PIPA and Canada PIPEDA.',
  robots: 'noindex, nofollow', // Privacy pages typically not indexed
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}