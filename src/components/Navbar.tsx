
import React, { useState } from 'react';
import { Menu, X, Sun, Calculator, MapPin, DollarSign, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetQuote = () => {
    window.open('https://www.solarchoice.net.au/', '_blank');
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: Sun },
    { name: 'Rebates', href: '#rebates', icon: DollarSign },
    { name: 'By State', href: '#states', icon: MapPin },
    { name: 'Calculator', href: '#calculator', icon: Calculator },
    { name: 'FAQ', href: '#faq', icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold solar-text-gradient">Solar Savings Australia</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="solar-gradient text-white hover:opacity-90" onClick={handleGetQuote}>
              Get Quote
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="w-full mt-4 solar-gradient text-white" onClick={handleGetQuote}>
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
