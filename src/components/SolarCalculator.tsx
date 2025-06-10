import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, TrendingUp, Zap, DollarSign, Calendar, ExternalLink } from 'lucide-react';

const SolarCalculator = () => {
  const [formData, setFormData] = useState({
    systemSize: '',
    location: '',
    electricityBill: '',
    roofType: ''
  });
  
  const [results, setResults] = useState(null);

  const handleGetDetailedQuote = () => {
    window.open('https://www.solarchoice.net.au/', '_blank');
  };

  const calculateSavings = () => {
    const systemSize = parseFloat(formData.systemSize) || 0;
    const monthlyBill = parseFloat(formData.electricityBill) || 0;
    
    // Simplified calculation - in reality this would be much more complex
    const federalRebate = systemSize * 500; // Approximate STC value
    const annualGeneration = systemSize * 1500; // kWh per year (varies by location)
    const annualSavings = annualGeneration * 0.25; // Average electricity rate
    const systemCost = systemSize * 2000; // Approximate cost per kW
    const netCost = systemCost - federalRebate;
    const paybackPeriod = netCost / annualSavings;
    
    setResults({
      federalRebate: Math.round(federalRebate),
      annualSavings: Math.round(annualSavings),
      systemCost: Math.round(systemCost),
      netCost: Math.round(netCost),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      lifetimeSavings: Math.round((annualSavings * 25) - netCost)
    });
  };

  return (
    <section id="calculator" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solar Savings <span className="solar-text-gradient">Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your potential savings with solar panels and available rebates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calculate Your Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="systemSize">Solar System Size (kW)</Label>
                <Input
                  id="systemSize"
                  type="number"
                  placeholder="e.g., 6.6"
                  value={formData.systemSize}
                  onChange={(e) => setFormData({...formData, systemSize: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NSW">New South Wales</SelectItem>
                    <SelectItem value="VIC">Victoria</SelectItem>
                    <SelectItem value="QLD">Queensland</SelectItem>
                    <SelectItem value="SA">South Australia</SelectItem>
                    <SelectItem value="WA">Western Australia</SelectItem>
                    <SelectItem value="ACT">Australian Capital Territory</SelectItem>
                    <SelectItem value="NT">Northern Territory</SelectItem>
                    <SelectItem value="TAS">Tasmania</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="electricityBill">Monthly Electricity Bill ($)</Label>
                <Input
                  id="electricityBill"
                  type="number"
                  placeholder="e.g., 200"
                  value={formData.electricityBill}
                  onChange={(e) => setFormData({...formData, electricityBill: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="roofType">Roof Type</Label>
                <Select value={formData.roofType} onValueChange={(value) => setFormData({...formData, roofType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select roof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tile">Tile Roof</SelectItem>
                    <SelectItem value="metal">Metal Roof</SelectItem>
                    <SelectItem value="flat">Flat Roof</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateSavings} 
                className="w-full solar-gradient text-white"
                disabled={!formData.systemSize || !formData.location}
              >
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          {results && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Solar Savings Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">${results.federalRebate.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Federal Rebate (STC)</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">${results.annualSavings.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>System Cost:</span>
                    <span className="font-semibold">${results.systemCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Less Federal Rebate:</span>
                    <span className="font-semibold text-green-600">-${results.federalRebate.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Net Cost:</span>
                    <span className="font-bold">${results.netCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium">Payback Period</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600">{results.paybackPeriod} years</p>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-medium mb-1">25-Year Lifetime Savings</p>
                  <p className="text-3xl font-bold text-primary">${results.lifetimeSavings.toLocaleString()}</p>
                </div>

                <Button className="w-full solar-gradient text-white" onClick={handleGetDetailedQuote}>
                  Get Detailed Quote
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
