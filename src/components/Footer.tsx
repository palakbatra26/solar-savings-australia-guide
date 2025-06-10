import React from 'react';
import { Sun, Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/solarchoice', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/solar-choice', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/c/SolarChoice', '_blank');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Solar Savings Australia</span>
            </div>
            <p className="text-sm opacity-90">
              Your trusted guide to solar rebates and incentives across Australia. 
              Helping homeowners and businesses save thousands on solar installations.
            </p>
            <div className="flex space-x-4">
              <Facebook 
                className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer" 
                onClick={handleFacebookClick}
              />
              <Linkedin 
                className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer"
                onClick={handleLinkedInClick}
              />
              <Youtube 
                className="h-5 w-5 opacity-75 hover:opacity-100 cursor-pointer" 
                onClick={handleYouTubeClick}
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-75 hover:opacity-100">Home</a></li>
              <li><a href="#rebates" className="opacity-75 hover:opacity-100">Rebate Programs</a></li>
              <li><a href="#states" className="opacity-75 hover:opacity-100">By State</a></li>
              <li><a href="#calculator" className="opacity-75 hover:opacity-100">Calculator</a></li>
              <li><a href="#faq" className="opacity-75 hover:opacity-100">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solar Rebates</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-75 hover:opacity-100">Federal Rebates</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">NSW Rebates</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">VIC Rebates</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">QLD Rebates</a></li>
              <li><a href="#" className="opacity-75 hover:opacity-100">Battery Rebates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800 SOLAR (1800 765 27)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@solarsavingsaustralia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Australia Wide Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © 2025 Solar Savings Australia. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="opacity-75 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="opacity-75 hover:opacity-100">Terms of Service</a>
            <a href="#" className="opacity-75 hover:opacity-100">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
