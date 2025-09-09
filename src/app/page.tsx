import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import WhoItsFor from '@/components/WhoItsFor';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <WhoItsFor />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}
