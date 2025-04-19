"use client";

import { Button } from "@/components/ui/button";
import { Check, Info, ChevronRight, Star, Building, Users, User } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("personal");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4 px-3 py-1 text-xs font-medium rounded-full">
            FLEXIBLE PRICING
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-violet-600">
            Accelerate Your Growth Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to reach your goals faster, whether for you or your entire organization.
            All plans come with a risk-free trial.
          </p>
        </div>

        {/* Plan selector tabs */}
        <div className="flex justify-center mb-10 rounded-full">
          <div className="bg-gray-100 p-1 rounded-full flex space-x-1">
            <button
              onClick={() => setSelectedPlan("personal")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedPlan === "personal" 
                  ? "bg-white text-purple-800 shadow-sm" 
                  : "text-gray-600 hover:text-purple-700"
              }`}
            >
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Personal
              </div>
            </button>
            <button
              onClick={() => setSelectedPlan("team")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedPlan === "team" 
                  ? "bg-white text-purple-800 shadow-sm" 
                  : "text-gray-600 hover:text-purple-700"
              }`}
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Team
              </div>
            </button>
            <button
              onClick={() => setSelectedPlan("enterprise")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedPlan === "enterprise" 
                  ? "bg-white text-purple-800 shadow-sm" 
                  : "text-gray-600 hover:text-purple-700"
              }`}
            >
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Enterprise
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Plan */}
          <div 
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              selectedPlan === "personal" 
                ? "border-2 border-purple-600 transform scale-105 shadow-xl" 
                : "border border-gray-200 shadow-lg opacity-90"
            }`}
          >
            {selectedPlan === "personal" && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-500"></div>
            )}
            
            <div className="p-8 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <User className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-600">PERSONAL</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Individual Plan</h3>
                  <p className="text-gray-500">Perfect for individual learners</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">30-DAY FREE TRIAL</Badge>
              </div>
              
              <div className="mt-8 flex items-end">
                <div className="text-3xl font-bold">₹850</div>
                <div className="text-gray-500 ml-2 mb-1">/month</div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <p className="text-sm text-gray-500">After 30-day free trial.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-purple-600 hover:text-purple-800">
                      <Info className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white p-6 rounded-xl shadow-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-purple-800">About Your Free Trial</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-3 text-gray-600">
                      <p>Your 30-day free trial gives you full access to all Personal Plan features. No payment required during the trial period.</p>
                      <p>After your trial ends, you'll be automatically billed at ₹850/month unless you cancel at least 24 hours before the trial ends.</p>
                      <p>You can cancel anytime during your trial through your account settings with no charges.</p>
                      <p>We'll send you a reminder 3 days before your trial ends.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sm text-gray-500 mt-1">Billed monthly or annually. Cancel anytime.</p>
            </div>
            
            <div className="p-8 bg-white border-t border-gray-100">
              <Button className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 shadow-lg shadow-purple-200 mb-8 group">
                <span>Start your free trial</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Access to 12,000+ top courses</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Certification prep</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Goal-focused recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">AI-powered coding exercises</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Plan */}
          <div 
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              selectedPlan === "team" 
                ? "border-2 border-purple-600 transform scale-105 shadow-xl" 
                : "border border-gray-200 shadow-lg opacity-90"
            }`}
          >
            {selectedPlan === "team" && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-500"></div>
            )}
            
            <div className="p-8 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-600">TEAM</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Team Plan</h3>
                  <p className="text-gray-500">Best for small to medium teams</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">30-DAY FREE TRIAL</Badge>
              </div>
              
              <div className="mt-8 flex items-end">
                <div className="text-3xl font-bold">₹1,450</div>
                <div className="text-gray-500 ml-2 mb-1">/user/year</div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <p className="text-sm text-gray-500">After 30-day free trial.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-purple-600 hover:text-purple-800">
                      <Info className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white p-6 rounded-xl shadow-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-purple-800">About Your Team Free Trial</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-3 text-gray-600">
                      <p>Your 30-day free team trial gives you full access to all Team Plan features for up to 20 users. No payment required during the trial period.</p>
                      <p>After your trial ends, you'll be automatically billed at ₹1,450 per user/year unless you cancel at least 24 hours before the trial ends.</p>
                      <p>You can cancel anytime during your trial through your account settings with no charges.</p>
                      <p>We'll send you a reminder 3 days before your trial ends.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sm text-gray-500 mt-1">Billed annually. Minimum 5 users.</p>
            </div>
            
            <div className="p-8 bg-white border-t border-gray-100">
              <Button className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 shadow-lg shadow-purple-200 mb-8 group">
                <span>Start your free trial</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Access to 12,000+ top courses</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Certification prep</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Goal-focused recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">AI-powered coding exercises</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Analytics and adoption reports</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div 
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              selectedPlan === "enterprise" 
                ? "border-2 border-purple-600 transform scale-105 shadow-xl" 
                : "border border-gray-200 shadow-lg opacity-90"
            }`}
          >
            {selectedPlan === "enterprise" && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-500"></div>
            )}
            
            <div className="p-8 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <Building className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-600">ENTERPRISE</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Enterprise Plan</h3>
                  <p className="text-gray-500">For large organizations</p>
                </div>
                <div className="rounded-full bg-purple-100 p-1">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              
              <div className="mt-8">
                <div className="text-2xl font-bold">Custom Pricing</div>
                <p className="text-gray-500 mt-1">Tailored to your organization's needs</p>
              </div>
            </div>
            
            <div className="p-8 bg-white border-t border-gray-100">
              <Button className="w-full py-6 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 shadow-lg shadow-purple-200 mb-8 group">
                <span>Contact our sales team</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Access to 27,000+ top courses</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Certification prep</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Goal-focused recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">AI-powered coding exercises</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Advanced analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Dedicated customer success team</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mt-0.5 mr-3">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">International course collection (15 languages)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

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