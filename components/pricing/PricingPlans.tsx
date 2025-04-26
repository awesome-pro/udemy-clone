"use client";

import { Button } from "@/components/ui/button";
import { Check, Info, ChevronRight, Star, Building, Users, User } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define plan types
type PlanKey = 'personal' | 'team' | 'enterprise';

type PlanDetails = {
  icon: React.ReactNode;
  name: string;
  title: string;
  description: string;
  price: string;
  period: string;
  billingInfo: string;
  features: string[];
};

type PlansData = {
  [key in PlanKey]: PlanDetails;
};

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("personal");

  const plans: PlansData = {
    personal: {
      icon: <User className="w-4 h-4" />,
      name: "PERSONAL",
      title: "Individual Plan",
      description: "Perfect for individual learners",
      price: "₹850",
      period: "/month",
      billingInfo: "Billed monthly or annually. Cancel anytime.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises"
      ]
    },
    team: {
      icon: <Users className="w-4 h-4" />,
      name: "TEAM",
      title: "Team Plan",
      description: "Best for small to medium teams",
      price: "₹1,450",
      period: "/user/year",
      billingInfo: "Billed annually. Minimum 5 users.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports"
      ]
    },
    enterprise: {
      icon: <Building className="w-4 h-4" />,
      name: "ENTERPRISE",
      title: "Enterprise Plan",
      description: "For large organizations",
      price: "Custom Pricing",
      period: "",
      billingInfo: "Tailored to your organization's needs",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection (15 languages)"
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className=" mb-12">
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4 px-3 py-1 text-xs font-medium rounded-full">
            FLEXIBLE PRICING
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-violet-600">
            Accelerate growth — for you or your organization
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to reach your goals faster, whether for you or your entire organization.
          </p>
        </div>

        <Tabs 
          defaultValue="personal" 
          value={selectedPlan} 
          onValueChange={(value) => setSelectedPlan(value as PlanKey)}
          className="w-full"
        >
          <div className="flex justify-center mb-10">
            <TabsList className="h-14 p-1 bg-gray-100/80 backdrop-blur-sm rounded-full">
              <TabsTrigger 
                value="personal" 
                className="h-12 px-6 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Personal</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="h-12 px-6 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Team</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="enterprise" 
                className="h-12 px-6 data-[state=active]:bg-white data-[state=active]:text-purple-800 data-[state=active]:shadow-sm rounded-full transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>Enterprise</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {Object.keys(plans).map((planKey) => (
              <TabsContent key={planKey} value={planKey} className="mt-0">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white border border-purple-100">
                  <div className="h-2 bg-gradient-to-r from-purple-600 to-violet-500"></div>
                  
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="rounded-full bg-purple-100 p-1.5">
                          {plans[planKey as PlanKey].icon}
                        </div>
                        <span className="text-sm font-medium text-purple-600">{plans[planKey as PlanKey].name}</span>
                        {planKey !== "enterprise" && (
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">FREE TRIAL</Badge>
                        )}
                        {planKey === "enterprise" && (
                          <div className="rounded-full bg-purple-100 p-1">
                            <Star className="h-4 w-4 text-purple-600" />
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{plans[planKey as PlanKey].title}</h3>
                      <p className="text-gray-500 mb-6">{plans[planKey as PlanKey].description}</p>
                      
                      <div className="flex items-baseline mb-1">
                        <span className="text-4xl font-bold">{plans[planKey as PlanKey].price}</span>
                        <span className="text-gray-500 ml-2">{plans[planKey as PlanKey].period}</span>
                      </div>
                      
                      {planKey !== "enterprise" && (
                        <div className="flex items-center gap-1 mb-1">
                          <p className="text-sm text-gray-500">After 30-day free trial.</p>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="text-purple-600 hover:text-purple-800">
                                <Info className="h-4 w-4" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="bg-white p-6 rounded-xl max-w-md">
                              <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-purple-800">About Your Free Trial</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-3 py-3 text-gray-600 text-sm">
                                <p>Your 30-day free trial gives you full access to all features. No payment required during the trial period.</p>
                                <p>Cancel anytime during your trial through your account settings with no charges.</p>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                      
                      <p className="text-sm text-gray-500">{plans[planKey as PlanKey].billingInfo}</p>
                      
                      <Button className="w-full mt-8 py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 shadow-lg shadow-purple-200 group">
                        <span>{planKey === "enterprise" ? "Contact our sales team" : "Start your free trial"}</span>
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="font-semibold text-lg mb-6">What's included:</h4>
                      <ul className="space-y-4">
                        {plans[planKey as PlanKey].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3 flex-shrink-0">
                              <Check className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Need help choosing the right plan?</p>
          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
            Schedule a consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;