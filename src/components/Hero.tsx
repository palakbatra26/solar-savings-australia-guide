
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingDown, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-50 to-orange-50"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Save Thousands on
              <span className="block solar-text-gradient">Solar Installation</span>
              in 2025
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover Australian solar rebates and incentives that can reduce your upfront costs by thousands. 
              Get expert guidance on federal and state programs designed to make solar affordable for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="solar-gradient text-white hover:opacity-90">
                Compare Quotes Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Calculate Savings
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <TrendingDown className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">Up to 70%</p>
                <p className="text-sm text-muted-foreground">Cost Reduction</p>
              </div>
              <div className="p-4">
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">$400-$600</p>
                <p className="text-sm text-muted-foreground">Per kW Rebate</p>
              </div>
              <div className="p-4">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">25 Years</p>
                <p className="text-sm text-muted-foreground">Warranty</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Solar panels on Australian home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Start Your Solar Journey Today</h3>
                <p className="text-sm opacity-90">Join thousands of Australians saving money with solar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
