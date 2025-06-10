
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, DollarSign, Calendar, Users, ExternalLink } from 'lucide-react';

const RebateTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('All');

  const handleGetQuotes = () => {
    window.open('https://www.solarchoice.net.au/', '_blank');
  };

  const handleLearnMore = (programName: string) => {
    // Scroll to state rebates section for more details
    const element = document.getElementById('states');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rebatePrograms = [
    {
      program: "Small-scale Renewable Energy Scheme (SRES)",
      location: "Federal",
      type: "Solar Panel",
      amount: "Approx. $400-$600 per kW",
      eligibility: "Systems <100kW, CEC-accredited installers",
      status: "Active",
      brief: "Federal incentive reducing upfront solar costs"
    },
    {
      program: "Large-scale Renewable Energy Target (LRET)",
      location: "Federal",
      type: "Solar Panel (Commercial)",
      amount: "LGCs approx. $46.25 each",
      eligibility: "Commercial systems over 100kW",
      status: "Active",
      brief: "For large commercial solar installations"
    },
    {
      program: "NSW Solar Battery Rebate (PDRS)",
      location: "NSW",
      type: "Battery",
      amount: "$1,600-$2,400 for battery",
      eligibility: "Existing solar system required",
      status: "Active",
      brief: "Battery storage incentive for NSW residents"
    },
    {
      program: "Victoria Solar Homes Program",
      location: "VIC",
      type: "Solar Panel & Battery",
      amount: "Up to $1,400 for panels",
      eligibility: "Homeowners and rental properties",
      status: "Active",
      brief: "Comprehensive solar and battery program"
    },
    {
      program: "Queensland Battery Booster",
      location: "QLD",
      type: "Battery",
      amount: "Loans up to $6,000",
      eligibility: "Owner-occupied homes",
      status: "Closed",
      brief: "Previously offered battery loans and rebates"
    },
    {
      program: "SA Home Battery Scheme",
      location: "SA",
      type: "Battery",
      amount: "Up to $2,000",
      eligibility: "Owner-occupiers, landlords",
      status: "Closed",
      brief: "Battery storage subsidy program"
    },
    {
      program: "ACT Sustainable Household Scheme",
      location: "ACT",
      type: "Solar & Battery",
      amount: "Zero-interest loans $2,000-$15,000",
      eligibility: "Households and community groups",
      status: "Active",
      brief: "Interest-free loans for sustainable energy"
    },
    {
      program: "WA Distributed Energy Buyback Scheme",
      location: "WA",
      type: "Feed-in Tariff",
      amount: "Up to 10 cents/kWh",
      eligibility: "Residential solar system owners",
      status: "Active",
      brief: "Feed-in tariff for exported energy"
    },
    {
      program: "NT Home and Business Battery Scheme",
      location: "NT",
      type: "Battery",
      amount: "Up to $5,000",
      eligibility: "Homeowners, businesses, non-profits",
      status: "Active",
      brief: "Battery installation grants"
    }
  ];

  const locations = ['All', 'Federal', 'NSW', 'VIC', 'QLD', 'SA', 'ACT', 'WA', 'NT'];

  const filteredPrograms = rebatePrograms.filter(program => {
    const matchesSearch = program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === 'All' || program.location === filterLocation;
    return matchesSearch && matchesLocation;
  });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <section id="rebates" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solar Rebate Programs & <span className="solar-text-gradient">Incentives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive breakdown of available programs across each state, outlining location, type, rebate amount, and eligibility
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Your Rebate Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={filterLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterLocation(location)}
                    className={filterLocation === location ? "solar-gradient text-white" : ""}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {filteredPrograms.map((program, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{program.program}</h3>
                      <Badge className={getStatusColor(program.status)}>
                        {program.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{program.brief}</p>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium">{program.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{program.type}</span>
                      </div>
                    </div>
                    {program.status === 'Active' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleLearnMore(program.program)}
                        className="text-primary border-primary hover:bg-primary hover:text-white"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-600">Rebate Amount</span>
                    </div>
                    <p className="text-lg font-semibold">{program.amount}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-blue-600">Eligibility</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{program.eligibility}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="solar-gradient text-white" onClick={handleGetQuotes}>
            Compare Quotes from 7 Installers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RebateTable;
