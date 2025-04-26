"use client";

import { Button } from "@/components/ui/button";
import { Check, Info, ChevronRight, Star, Building, Users, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define plan types
type PlanKey = 'personal' | 'team' | 'enterprise';

type PlanDetails = {
  icon: React.ReactNode;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  period: string;
  billingInfo: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
};

type PlansData = {
  [key in PlanKey]: PlanDetails;
};

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("personal");
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const plans: PlansData = {
    personal: {
      icon: <User className="w-5 h-5" />,
      name: "PERSONAL",
      title: "Personal Plan",
      subtitle: "For you",
      description: "Individual",
      price: "₹850",
      period: "per month",
      billingInfo: "Billed monthly or annually. Cancel anytime.",
      ctaText: "Start subscription",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises"
      ]
    },
    team: {
      icon: <Users className="w-5 h-5" />,
      name: "TEAM",
      title: "Team Plan",
      subtitle: "For your team",
      description: "2 to 20 people",
      price: "₹2,000",
      period: "a month per user",
      billingInfo: "Billed annually. Cancel anytime.",
      popular: true,
      ctaText: "Start subscription",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports"
      ]
    },
    enterprise: {
      icon: <Building className="w-5 h-5" />,
      name: "ENTERPRISE",
      title: "Enterprise Plan",
      subtitle: "For your whole organization",
      description: "More than 20 people",
      price: "Custom",
      period: "pricing",
      billingInfo: "Contact sales for pricing",
      ctaText: "Request a demo",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
        "Hands-on tech training with add-on",
        "Strategic implementation services with add-on"
      ]
    }
  };

  // Card component for each plan
  const PlanCard = ({ planKey }: { planKey: PlanKey }) => {
    const plan = plans[planKey];
    
    return (
      <div className={`bg-white rounded-xl shadow-lg border transition-all duration-300 h-full flex flex-col overflow-hidden ${plan.popular ? 'border-purple-400 scale-[1.02] shadow-xl' : 'border-gray-200 hover:border-purple-300 hover:shadow-xl'}`}>
        {plan.popular && (
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 text-center">
            Most Popular
          </div>
        )}
        <div className={`${plan.popular ? 'bg-purple-50' : 'bg-white'} p-6 md:p-8`}>
          <div className="flex items-center space-x-2 mb-3">
            <div className={`rounded-full ${plan.popular ? 'bg-purple-200' : 'bg-purple-100'} p-2`}>
              {plan.icon}
            </div>
            <span className="text-sm font-medium text-purple-700">{plan.subtitle}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
          
          <div className="flex items-baseline mb-2">
            <span className="text-3xl font-bold">{plan.price}</span>
            <span className="text-gray-600 ml-2 text-sm">{plan.period}</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">{plan.billingInfo}</p>
          
          <Button 
            className={`w-full py-6 text-sm font-semibold rounded-lg shadow-md transition-all group ${
              planKey === 'enterprise' 
                ? 'bg-white border-2 border-purple-600 text-purple-700 hover:bg-purple-50'
                : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-purple-100'
            }`}
          >
            <span>{plan.ctaText}</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="p-6 md:p-8 bg-gray-50 flex-grow">
          <h4 className="font-medium text-sm text-gray-800 mb-4 uppercase tracking-wide">What's included:</h4>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5 mr-3 flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4 px-3 py-1 text-xs font-medium rounded-full">
            PRICING PLANS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-violet-600">
            Accelerate growth — for you or your organization
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        {/* Desktop & Tablet View - Show all cards in grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
          {Object.keys(plans).map((planKey) => (
            <PlanCard key={planKey} planKey={planKey as PlanKey} />
          ))}
        </div>

        {/* Mobile View - Show as tabs */}
        <div className="md:hidden">
          <Tabs 
            defaultValue="personal" 
            value={selectedPlan} 
            onValueChange={(value) => setSelectedPlan(value as PlanKey)}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="h-14 p-1 bg-gray-100/80 backdrop-blur-sm rounded-full">
                <TabsTrigger 
                  value="personal" 
                  className="h-12 px-4 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Personal</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className="h-12 px-4 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Team</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="enterprise" 
                  className="h-12 px-4 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Enterprise</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.keys(plans).map((planKey) => (
              <TabsContent key={planKey} value={planKey} className="mt-0">
                <PlanCard planKey={planKey as PlanKey} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-6">
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;