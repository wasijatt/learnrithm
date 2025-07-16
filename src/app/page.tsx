'use client';

import dynamic from 'next/dynamic';

import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import KeyFeatures from './Components/KeyFeatures';
import VideoSection from './Components/VideoSection';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';
import TrustedPartners from './Components/TrustedPartners';
// import Testimonials from './Components/Testimonials';
const TeamSection = dynamic(() => import('./Components/TeamSection'), { ssr: false });
const ComparisonTable = dynamic(() => import('./Components/ComparisonTable'), { ssr: false });
const ResultCounter = dynamic(() => import('./Components/Results'), { ssr: false });
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <TrustedPartners />

      <VideoSection />
      <FAQSection />
      {/* <Testimonials /> */}
      <TeamSection />
      <ComparisonTable />
      <ResultCounter />
      <Footer />
    </main>
  );
}
