import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const handleContactExpert = () => {
    window.open('https://www.solarchoice.net.au/contact/', '_blank');
  };

  const faqs = [
    {
      question: "What is the difference between a solar rebate and a solar incentive?",
      answer: "Solar rebates typically refer to direct discounts on installation costs (like the STC scheme), while solar incentives can include feed-in tariffs, loans, or ongoing credits. Both help reduce the overall cost of going solar."
    },
    {
      question: "How much can I save with Australian solar rebates in 2025?",
      answer: "The Small-scale Technology Certificate (STC) scheme can save you approximately $400-$600 per kW of solar capacity. For a typical 6.6kW system, this could mean savings of $2,640-$3,960. Additional state rebates can increase these savings significantly."
    },
    {
      question: "Are solar rebates really rebates or just discounts?",
      answer: "The federal 'rebate' (STC scheme) is technically a discount applied at the point of sale rather than a cash rebate. Your installer handles the STC process and applies the credit directly to reduce your installation cost."
    },
    {
      question: "Do solar rebates expire?",
      answer: "Yes, the federal STC scheme decreases annually and will end in 2030. The value of STCs also decreases each year, so installing solar sooner maximizes your savings. State rebates have varying expiry dates and funding limits."
    },
    {
      question: "Can I combine federal and state solar rebates?",
      answer: "Yes! Federal STCs can be combined with most state rebate programs. For example, you could use federal STCs plus NSW battery rebates or Victoria Solar Homes rebates to maximize your savings."
    },
    {
      question: "What happens if my rebate application is rejected?",
      answer: "Rebate applications are rarely rejected if you meet eligibility criteria and use accredited installers. If rejected, you can usually reapply after addressing any issues. Your installer should guide you through the process."
    },
    {
      question: "How long does it take to receive solar rebates?",
      answer: "STCs are typically processed immediately at installation through your installer. State rebates vary - some are applied upfront, others may take 4-12 weeks to process after installation."
    },
    {
      question: "Can renters access solar rebates?",
      answer: "Some programs like Victoria's Solar for Rentals provide rebates for landlords. As a renter, you'd need your landlord's permission and participation. Some states also offer community solar programs for renters."
    },
    {
      question: "Are solar batteries eligible for rebates?",
      answer: "Yes, many states offer specific battery rebates including NSW (PDRS), Victoria (interest-free loans), and NT (up to $5,000). These are separate from solar panel rebates and can often be claimed later."
    },
    {
      question: "What documentation do I need for solar rebates?",
      answer: "You'll typically need proof of income, property ownership or rental agreement, electrical safety certificates, and installer accreditation. Your installer should help prepare most documentation."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="solar-text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about solar rebates and incentives in Australia
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Solar Rebate FAQ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our solar experts are here to help.
          </p>
          <Button size="lg" className="solar-gradient text-white" onClick={handleContactExpert}>
            Contact Solar Expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
