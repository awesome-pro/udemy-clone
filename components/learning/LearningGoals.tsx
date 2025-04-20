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
      icon: <Code className="h-5 w-5" />,
      description: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      content: (
          <Image 
            src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
            alt="Hands-on training"
            width={624}
            height={402}
          />
      )
    },
    {
      id: "certification",
      title: "Certification prep",
      icon: <Award className="h-5 w-5" />,
      description: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      content: (
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
          <div className="flex space-x-1 p-2 bg-gray-50 border-b border-gray-100">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">AWS Certification Path</h3>
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">AWS Cloud Practitioner</div>
                <div className="text-sm text-gray-500">Fundamentals level • 4 practice exams</div>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">AWS Developer Associate</div>
                <div className="text-sm text-gray-500">Associate level • 5 practice exams</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">AWS Solutions Architect</div>
                <div className="text-sm text-gray-500">Associate level • 6 practice exams</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "insights",
      title: "Insights and analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      badge: "Enterprise Plan",
      content: (
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
          <div className="flex space-x-1 p-2 bg-gray-50 border-b border-gray-100">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Benchmarking: compare popular skills</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Top business skills in your organization</h4>
                <div className="space-y-2">
                  {[
                    { name: "Meetings", value: 85, color: "bg-emerald-500" },
                    { name: "Note-taking", value: 65, color: "bg-emerald-500" },
                    { name: "Management skills", value: 72, color: "bg-emerald-500" }
                  ].map((skill, i) => (
                    <div key={i} className="relative">
                      <div className="text-xs mb-1 flex justify-between">
                        <span>{i+1}. {skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full`}
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Top tech skills in your organization</h4>
                <div className="space-y-2">
                  {[
                    { name: "AWS Certification", value: 78, color: "bg-purple-500" },
                    { name: "Python", value: 72, color: "bg-purple-500" },
                    { name: "Amazon Cloud", value: 65, color: "bg-purple-500" }
                  ].map((skill, i) => (
                    <div key={i} className="relative">
                      <div className="text-xs mb-1 flex justify-between">
                        <span>{i+1}. {skill.name}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} rounded-full`}
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "customizable",
      title: "Customizable content",
      icon: <Settings className="h-5 w-5" />,
      description: "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      badge: "Enterprise Plan",
      content: (
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
          <div className="flex space-x-1 p-2 bg-gray-50 border-b border-gray-100">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Custom Learning Path Builder</h3>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
              <div className="font-medium">Frontend Development Path</div>
              <div className="text-sm text-gray-500 mb-3">32 hours • 8 courses • 4 projects</div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">HTML/CSS</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">JavaScript</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">React</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">UI/UX</Badge>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <div className="font-medium">Data Science Foundations</div>
              <div className="text-sm text-gray-500 mb-3">40 hours • 10 courses • 5 projects</div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Python</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">SQL</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Pandas</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Data Visualization</Badge>
              </div>
            </div>
          </div>
        </div>
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Learning focused on your goals
        </h2>

        <div className="md:flex md:gap-8 lg:gap-12">
          {/* Desktop Tabs - Left Side */}
          <div className="hidden md:block md:w-2/5 lg:w-1/3 space-y-2">
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
          <div className="w-full md:w-3/5 lg:w-2/3 relative">
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