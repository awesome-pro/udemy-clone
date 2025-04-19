"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LearningFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  enterprisePlan?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function LearningGoals() {
  const learningFeatures: LearningFeature[] = [
    {
      id: "hands-on",
      title: "Hands-on training",
      description: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
      icon: "/icons/hands-on.svg",
      ctaText: "Explore courses",
      ctaLink: "#",
    },
    {
      id: "certification",
      title: "Certification prep",
      description: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
      icon: "/icons/certification.svg",
      ctaText: "Explore courses",
      ctaLink: "#",
    },
    {
      id: "insights",
      title: "Insights and analytics",
      description: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
      icon: "/icons/analytics.svg",
      enterprisePlan: true,
      ctaText: "Find out more",
      ctaLink: "#",
    },
    {
      id: "customizable",
      title: "Customizable content",
      description: "Create tailored learning paths for team and organization goals and even host your own content and resources.",
      icon: "/icons/customizable.svg",
      enterprisePlan: true,
      ctaText: "Find out more",
      ctaLink: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Learning focused on your goals</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {learningFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Image 
                        src={feature.icon} 
                        alt={feature.title} 
                        width={48} 
                        height={48} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      {feature.enterprisePlan && (
                        <span className="ml-2 text-xs bg-[#a435f0]/10 text-[#a435f0] px-2 py-1 rounded-md font-medium">
                          Enterprise Plan
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    {feature.ctaText && (
                      <Link 
                        href={feature.ctaLink || "#"} 
                        className="text-[#a435f0] hover:text-[#8710d8] font-medium flex items-center"
                      >
                        {feature.ctaText} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <div className="p-4 bg-white border-b border-gray-200 flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-4">Containerization</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">
                  ?
                </div>
                <span className="text-sm text-gray-600">30 questions</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">Your score: 159</h4>
                  <Link href="#" className="text-xs text-[#a435f0] underline">
                    What do these numbers mean?
                  </Link>
                </div>
                
                <div className="relative h-40 mb-4">
                  <div className="absolute inset-0 bg-gray-100 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-200 rounded-b-lg"></div>
                  <div className="absolute top-4 left-4 right-4 bottom-4">
                    <div className="h-full relative">
                      {/* Graph visualization */}
                      <div className="absolute bottom-0 w-full h-px bg-gray-300"></div>
                      <div className="absolute left-0 h-full w-px bg-gray-300"></div>
                      
                      {/* Score line */}
                      <div className="absolute bottom-1/3 left-0 right-0 border-t border-gray-400 border-dashed"></div>
                      
                      {/* Score dot */}
                      <div className="absolute right-1/4 bottom-2/3 w-4 h-4 rounded-full bg-[#a435f0] transform -translate-x-1/2 -translate-y-1/2"></div>
                      
                      {/* Curve */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 rounded-bl-full border-b border-l border-gray-400"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="text-[#a435f0] font-bold">85th Percentile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Your performance was better than 85% of Udemy learners who have completed this assessment.</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold mb-2">Your answers</h4>
                <p className="text-sm text-gray-600 mb-4">Review your answers. Learn from these explanations of correct and incorrect response options.</p>
                
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" className="text-xs">All questions</Button>
                  <Button variant="outline" size="sm" className="text-xs">All answers</Button>
                  <Button variant="outline" size="sm" className="text-xs bg-gray-100">23 correct</Button>
                  <Button variant="outline" size="sm" className="text-xs">7 incorrect</Button>
                  <Button variant="outline" size="sm" className="text-xs">0 skipped</Button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 mb-2">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-bold text-sm">Question 1:</span>
                        <span className="ml-1 text-green-600 text-sm">Correct</span>
                      </div>
                      <p className="text-sm text-gray-700">Which of the following concepts would build from a managed container service, such as...</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-bold text-sm">Question 2:</span>
                        <span className="ml-1 text-green-600 text-sm">Correct</span>
                      </div>
                      <p className="text-sm text-gray-700">You containerized a web application, and one of the containers is running the database...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningGoals;
