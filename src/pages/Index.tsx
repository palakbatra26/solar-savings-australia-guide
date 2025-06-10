
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RebateTable from '@/components/RebateTable';
import StateRebates from '@/components/StateRebates';
import SolarCalculator from '@/components/SolarCalculator';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RebateTable />
      <StateRebates />
      <SolarCalculator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
