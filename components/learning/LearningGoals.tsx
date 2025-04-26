"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Award, Code, FileCheck, BarChart3, Settings } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

// Tab content type definition
type TabContent = {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  badge?: string;
  image?: string;
  content?: JSX.Element;
};

export function LearningGoalsSection() {
  const [activeTab, setActiveTab] = useState("hands-on");
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tab content data
  const tabContents: TabContent[] = [
    {
      id: "hands-on",
      title: "Hands-on training",
      icon: <Image src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png" alt="Hands-on training" width={150} height={150} />,
      description: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      content: (
          <Image 
            src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
            alt="Hands-on training"
            width={550}
            height={402}
          />
      )
    },
    {
      id: "certification",
      title: "Certification prep",
      icon: <Image src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="Certification prep" width={150} height={150} />,
      description: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      content: (
        <Image
          src="https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/473be949e2751dd5826b141dc4c16892/desktop-certification-prep-2x.png"
          alt="Certification prep"
          width={550}
          height={402}
        />
      )
    },
    {
      id: "insights",
      title: "Insights and analytics",
      icon: <Image src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png" alt="Insights and analytics" width={150} height={150} />,
      description: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      badge: "Enterprise Plan",
      content: (
        <Image
          src="https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png"
          alt="Insights and analytics"
          width={550}
          height={402}
        />
      )
    },
    {
      id: "customizable",
      title: "Customizable content",
      icon: <Image src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png" alt="Customizable content" width={150} height={150} />,
      description: "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      badge: "Enterprise Plan",
      content: (
        <Image
          src="https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png"
          alt="Customizable content"
          width={550}
          height={402}
        />
      )
    }
  ];

  // Navigate to next or previous tab (for mobile carousel)
  const navigateTab = (direction: 'next' | 'prev') => {
    const currentIndex = tabContents.findIndex(tab => tab.id === activeTab);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % tabContents.length;
    } else {
      newIndex = (currentIndex - 1 + tabContents.length) % tabContents.length;
    }
    
    setActiveTab(tabContents[newIndex].id);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Learning focused on your goals
        </h2>

        <div className="md:flex md:gap-8 lg:gap-12">
          {/* Desktop Tabs - Left Side */}
          <div className="hidden lg:block lg:w-full space-y-2">
            {tabContents.map((tab) => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-start p-4 rounded-lg cursor-pointer transition-all ${
                  activeTab === tab.id 
                    ? "bg-white shadow-sm border-l-4 border-purple-600" 
                    : "hover:bg-gray-100 border-l-4 border-transparent"
                }`}
              >
                <div className={`mr-3 mt-1 ${activeTab === tab.id ? "text-purple-600" : "text-gray-400"}`}>
                  {tab.icon}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className={`font-medium ${activeTab === tab.id ? "text-purple-800" : "text-gray-800"}`}>
                      {tab.title}
                    </h3>
                    {tab.badge && (
                      <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs">
                        {tab.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{tab.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and Desktop Content - Right Side */}
          <div className="w-full md:w-full  relative">
            {/* Mobile Navigation Controls */}
            {isMobile && (
              <>
                <div className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 -translate-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-white shadow-md h-10 w-10 border-gray-200"
                    onClick={() => navigateTab('prev')}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 translate-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-white shadow-md h-10 w-10 border-gray-200"
                    onClick={() => navigateTab('next')}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </>
            )}

            {/* Mobile Tab Title & Description */}
            {isMobile && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  {tabContents.find(tab => tab.id === activeTab)?.title}
                </h3>
                <p className="text-gray-600">
                  {tabContents.find(tab => tab.id === activeTab)?.description}
                </p>
              </div>
            )}

            {/* Content Display Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabContents.find(tab => tab.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation Dots */}
            {isMobile && (
              <div className="flex justify-center space-x-2 mt-6">
                {tabContents.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`h-2 rounded-full transition-all ${
                      activeTab === tab.id 
                        ? "w-8 bg-purple-600" 
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to ${tab.title}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile-only Tabs Information List */}
        <div className="md:hidden mt-16 space-y-4">
          {tabContents.map((tab) => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-lg border ${
                activeTab === tab.id 
                  ? "border-purple-200 bg-purple-50" 
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`mr-3 ${activeTab === tab.id ? "text-purple-600" : "text-gray-400"}`}>
                    {tab.icon}
                  </div>
                  <h3 className="font-medium">{tab.title}</h3>
                  {tab.badge && (
                    <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs">
                      {tab.badge}
                    </Badge>
                  )}
                </div>
                <ChevronRight className={`h-5 w-5 ${
                  activeTab === tab.id ? "text-purple-600" : "text-gray-400"
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningGoalsSection;