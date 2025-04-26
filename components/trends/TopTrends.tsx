"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card } from "../ui/card";

interface CaseStudy {
  id: number;
  company: string;
  title: string;
  stats: {
    value: string;
    description: string;
  }[];
  image: string;
}

export function TopTrends() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const caseStudies: CaseStudy[] = [
    {
      id: 0,
      company: "Booz | Allen | Hamilton",
      title: "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
      stats: [
        { value: "93%", description: "retention rate among participating employees" },
        { value: "65%", description: "of learners noted a positive impact on their productivity" },
      ],
      image: "https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals",
    },
    {
      id: 1,
      company: "Capital One",
      title: "Capital One Accelerates Transformational Learning through Udemy Business",
      stats: [
        { value: "93%", description: "retention rate among participating employees" },
        { value: "65%", description: "of learners noted a positive impact on their productivity" },
      ],
      image: "https://cms-images.udemycdn.com/96883mtakkm8/3tdKdJqRtZAyDDmdZR3qGV/eaf1d940743664c58edc9260842498d7/capitalone-2x.png",
    },
    {
      id: 2,
      company: "Volkswagen",
      title: "Volkswagen Builds Technical Excellence with Customized Learning Paths",
      stats: [
        { value: "80%", description: "of engineers improved technical skills" },
        { value: "45%", description: "faster onboarding for new technical hires" },
      ],
      image: "https://cms-images.udemycdn.com/96883mtakkm8/2OmbIN8MOcdVxDzlqQz4Dc/3471754f5a5f41a7f1c49f05ecfaa4b8/eventbrite-2x.png",
    },
    {
      id: 3,
      company: "Box",
      title: "Box Empowers Employees with On-Demand Learning Solutions",
      stats: [
        { value: "75%", description: "of employees actively engaged in learning" },
        { value: "3.5x", description: "ROI on learning and development investment" },
      ],
      image: "https://cms-images.udemycdn.com/96883mtakkm8/2BWi1GI2khQbIOymlyEhzB/673c2d81fe7c9314d0673e42e666f2b9/toyota-2x.png",
    },
  ];

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const activeCase = caseStudies[activeSlide];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-12">Top trends for the future of work</h2>
          <Card className="grid grid-cols-1 lg:grid-cols-2 rounded-4xl p-0">
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-600 mb-2">{activeCase.company}</h3>
                <h4 className="text-2xl font-bold mb-8">{activeCase.title}</h4>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {activeCase.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-[#a435f0] mb-2">{stat.value}</div>
                      <p className="text-gray-600">{stat.description}</p>
                    </div>
                  ))}
                </div>
                
                <Button size={'lg'} className="bg-primary cursor-pointer px-10 py-3">
                  Read full story <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              {/* Pagination */}
              <div className="flex items-center mt-12">
                <button 
                  onClick={handlePrevious}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 mr-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div className="flex space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeSlide 
                          ? "w-8 bg-[#a435f0]" 
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 ml-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative bg-[#a435f0]/10 rounded-4xl">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                fill
                className="object-cover rounded-4xl"
              />
            </div>
          </Card>
        
        {/* Companies banner */}
        <div className="mt-8 py-4 border-t border-gray-200">
          <div className="flex flex-col justify-between items-center">
            <p className="text-gray-700 font-medium text-lg mb-4">Top companies choose Udemy Business to build in-demand career skills.</p>
            <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center space-x-6">
              <Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" width={90} height={30} />
              <Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen" width={30} height={30} />
              <Image src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp" width={90} height={30} />
              <Image src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" width={90} height={30} />
            </div>
          </div>
        </div>
    </section>
  );
}

export default TopTrends;
