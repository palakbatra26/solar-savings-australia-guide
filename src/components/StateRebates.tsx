import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, DollarSign, Battery, Zap, Home, Building, ExternalLink } from 'lucide-react';

const StateRebates = () => {
  const [selectedState, setSelectedState] = useState('NSW');

  const handleLearnMore = (programName: string, state: string) => {
    // You can customize this to link to specific state government pages
    const stateUrls = {
      'NSW': 'https://www.energy.nsw.gov.au/renewables',
      'VIC': 'https://www.solar.vic.gov.au/',
      'QLD': 'https://www.epw.qld.gov.au/about/initiatives/solar',
      'SA': 'https://www.sa.gov.au/topics/energy-and-environment/energy-supply/solar-energy',
      'ACT': 'https://www.environment.act.gov.au/energy/renewable-energy',
      'WA': 'https://www.wa.gov.au/organisation/energy-policy-wa',
      'NT': 'https://denr.nt.gov.au/energy'
    };
    
    const url = stateUrls[state as keyof typeof stateUrls];
    if (url) {
      window.open(url, '_blank');
    }
  };

  const handleGetQuotes = () => {
    window.open('https://www.solarchoice.net.au/', '_blank');
  };

  const stateData = {
    NSW: {
      name: "New South Wales",
      color: "bg-blue-600",
      programs: [
        {
          name: "NSW Solar Battery Rebate (PDRS)",
          type: "Battery",
          amount: "$1,600-$2,400",
          status: "Active",
          description: "Peak Demand Reduction Scheme providing rebates for battery installations with additional VPP incentives.",
          eligibility: "Existing solar system, battery installed by Accredited Certificate Providers",
          icon: Battery
        },
        {
          name: "NSW Solar & Energy Efficiency Grant for Apartments",
          type: "Community Solar",
          amount: "Up to 50% of costs",
          status: "Active",
          description: "Grants for apartment solar installations and offsite solar garden subscriptions.",
          eligibility: "Apartment residents & low-income households",
          icon: Building
        },
        {
          name: "Empowering Homes Program",
          type: "Loan",
          amount: "Up to $14,000",
          status: "Active",
          description: "Interest-free loans for solar-battery systems for eligible households.",
          eligibility: "Homeowners with household income < $180,000",
          icon: Home
        }
      ]
    },
    VIC: {
      name: "Victoria",
      color: "bg-purple-600",
      programs: [
        {
          name: "Victoria Solar Homes Program",
          type: "Solar & Battery",
          amount: "Up to $1,400",
          status: "Active",
          description: "Comprehensive rebate program for solar panels with interest-free battery loans.",
          eligibility: "Homeowners and rental properties meeting income and property criteria",
          icon: Zap
        },
        {
          name: "Solar for Rentals Program",
          type: "Solar Panel",
          amount: "$1,400",
          status: "Active",
          description: "Rebate for landlords to install solar systems on rental properties.",
          eligibility: "Landlords with eligible rental properties",
          icon: Home
        },
        {
          name: "Solar for Apartments",
          type: "Shared Solar",
          amount: "Up to $2,800 per apartment",
          status: "Active",
          description: "Rebates for shared solar installations in apartment buildings.",
          eligibility: "Apartment buildings; applications open until December 4th 2024",
          icon: Building
        }
      ]
    },
    QLD: {
      name: "Queensland",
      color: "bg-red-600",
      programs: [
        {
          name: "Queensland Battery Booster",
          type: "Battery",
          amount: "Loans up to $6,000",
          status: "Closed",
          description: "Previously offered interest-free loans and rebates for battery installations.",
          eligibility: "Owner-occupied homes (program now closed)",
          icon: Battery
        }
      ]
    },
    SA: {
      name: "South Australia",
      color: "bg-green-600",
      programs: [
        {
          name: "SA Home Battery Scheme",
          type: "Battery",
          amount: "Up to $2,000",
          status: "Closed",
          description: "Previously offered subsidies for battery storage systems.",
          eligibility: "Owner-occupiers, landlords (program now closed)",
          icon: Battery
        },
        {
          name: "Incentives for Sustainability (City of Adelaide)",
          type: "Cash-back",
          amount: "Varies",
          status: "Active",
          description: "Cash-back incentives for solar and sustainable practices.",
          eligibility: "City of Adelaide residents, businesses, and groups",
          icon: DollarSign
        }
      ]
    },
    ACT: {
      name: "Australian Capital Territory",
      color: "bg-yellow-600",
      programs: [
        {
          name: "Sustainable Household Scheme (SHS)",
          type: "Loan",
          amount: "$2,000-$15,000",
          status: "Active",
          description: "Zero-interest loans for solar, battery storage, and EV chargers.",
          eligibility: "Households or Community Groups meeting eligibility criteria",
          icon: Home
        },
        {
          name: "Next Gen Energy Storage Program",
          type: "Battery",
          amount: "Up to $3,500",
          status: "Closed",
          description: "Previously provided rebates for battery installations.",
          eligibility: "Households, businesses (program now closed)",
          icon: Battery
        }
      ]
    },
    WA: {
      name: "Western Australia",
      color: "bg-orange-600",
      programs: [
        {
          name: "Distributed Energy Buyback Scheme (DEBS)",
          type: "Feed-in Tariff",
          amount: "Up to 10 cents/kWh",
          status: "Active",
          description: "Feed-in tariff for exported energy during peak times.",
          eligibility: "Residential solar system owners in WA",
          icon: Zap
        },
        {
          name: "Switch Your Thinking Program",
          type: "Discounts",
          amount: "Varies",
          status: "Active",
          description: "Discounts on sustainable products for participating council areas.",
          eligibility: "Residents in participating WA council areas",
          icon: DollarSign
        }
      ]
    },
    NT: {
      name: "Northern Territory",
      color: "bg-teal-600",
      programs: [
        {
          name: "Home and Business Battery Scheme",
          type: "Battery",
          amount: "Up to $5,000",
          status: "Active",
          description: "Grants for eligible battery installations.",
          eligibility: "Homeowners, businesses, and non-profits",
          icon: Battery
        },
        {
          name: "Northern Territory Apartment Solar Rebate",
          type: "Shared Solar",
          amount: "Up to 50% of costs",
          status: "Active",
          description: "Grants for shared solar PV systems in apartment complexes.",
          eligibility: "Body corporates and multi-dwelling buildings",
          icon: Building
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <section id="states" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solar Rebates by <span className="solar-text-gradient">State</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each Australian state and territory offers unique solar rebate programs that can be combined with federal incentives
          </p>
        </div>

        <Tabs value={selectedState} onValueChange={setSelectedState} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
            {Object.keys(stateData).map((state) => (
              <TabsTrigger key={state} value={state} className="text-xs md:text-sm">
                {state}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(stateData).map(([stateCode, state]) => (
            <TabsContent key={stateCode} value={stateCode}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${state.color}`}></div>
                  <h3 className="text-2xl font-bold">{state.name}</h3>
                  <Badge variant="outline">{state.programs.length} Programs</Badge>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {state.programs.map((program, index) => (
                    <Card key={index} className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <program.icon className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">{program.name}</CardTitle>
                          </div>
                          <Badge className={getStatusColor(program.status)}>
                            {program.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-medium text-green-600">Amount</span>
                            </div>
                            <p className="text-lg font-semibold">{program.amount}</p>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Type:</span>
                            <p className="text-sm">{program.type}</p>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">{program.description}</p>
                          
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Eligibility:</span>
                            <p className="text-sm">{program.eligibility}</p>
                          </div>
                          
                          {program.status === 'Active' && (
                            <Button 
                              className="w-full solar-gradient text-white"
                              onClick={() => handleLearnMore(program.name, stateCode)}
                            >
                              Learn More
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {state.programs.length === 0 && (
                  <Card>
                    <CardContent className="text-center py-12">
                      <p className="text-muted-foreground">No active programs currently available in {state.name}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" className="solar-gradient text-white" onClick={handleGetQuotes}>
            Compare Quotes from Up to 7 Installers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StateRebates;
