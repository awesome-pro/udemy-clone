"use client";

import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Testimonial {
  id: string;
  initials: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  course: {
    name: string;
    url: string;
  };
  color: string;
  imageUrl?: string;
}

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<string>("ds");

  const testimonials: Testimonial[] = [
    {
      id: "ds",
      initials: "DS",
      name: "Diksha S",
      role: "Business Intelligence Analyst",
      company: "TechCorp",
      quote: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content that helped me advance my career path.",
      rating: 5,
      course: {
        name: "Business Intelligence (BI)",
        url: "#",
      },
      color: "bg-purple-200",
      imageUrl: "https://github.com/shadcn.png"
    },
    {
      id: "cb",
      initials: "CB",
      name: "Chethan B",
      role: "Senior Frontend Engineer",
      company: "InnovateTech",
      quote: "This has helped me so much in my career journey. I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.",
      rating: 5,
      course: {
        name: "Go (golang) course",
        url: "#",
      },
      color: "bg-green-200",
      imageUrl: "https://github.com/shadcn.png"
    },
    {
      id: "bk",
      initials: "BK",
      name: "Batchu K",
      role: "Software Developer",
      company: "GlobalSoft",
      quote: "Today I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course. It's been transformative.",
      rating: 4,
      course: {
        name: "Java course",
        url: "#",
      },
      color: "bg-blue-200",
      imageUrl: "https://github.com/shadcn.png"
    },
    {
      id: "ak",
      initials: "AK",
      name: "Ankit K",
      role: "Full Stack Web Developer",
      company: "WebFusion",
      quote: "I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance their skills in this field.",
      rating: 5,
      course: {
        name: "Web Development course",
        url: "#",
      },
      color: "bg-orange-200",
      imageUrl: "https://github.com/shadcn.png"
    },
  ];

  const getTestimonial = (id: string) => testimonials.find(t => t.id === id) || testimonials[0];
  const currentTestimonial = getTestimonial(activeTestimonial);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-violet-600">
            Transforming Careers Through Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our courses have helped professionals achieve their career goals and reach new heights in their industries.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                      {currentTestimonial.quote}
                    </blockquote>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    {currentTestimonial.imageUrl ? (
                      <img 
                        src={currentTestimonial.imageUrl} 
                        alt={currentTestimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200"
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-full ${currentTestimonial.color} flex items-center justify-center text-lg font-bold text-gray-800 mr-4 border-2 border-white shadow-md`}>
                        {currentTestimonial.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{currentTestimonial.name}</h3>
                      <p className="text-gray-600">{currentTestimonial.role}</p>
                      {currentTestimonial.company && (
                        <p className="text-sm text-gray-500">{currentTestimonial.company}</p>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    href={currentTestimonial.course.url}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer"
                  >
                    <span>Explore {currentTestimonial.course.name}</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              {/* Right side - Testimonial Selector */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 lg:p-12">
                <h4 className="font-medium text-purple-800 mb-6">More Success Stories</h4>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <button
                      key={testimonial.id}
                      onClick={() => setActiveTestimonial(testimonial.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTestimonial === testimonial.id 
                          ? "bg-white shadow-md border border-purple-100" 
                          : "hover:bg-white/50"
                      }`}
                    >
                      <div className="flex items-center">
                        {testimonial.imageUrl ? (
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                        ) : (
                          <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-sm font-bold text-gray-800 mr-3`}>
                            {testimonial.initials}
                          </div>
                        )}
                        <div>
                          <h5 className="font-medium">{testimonial.name}</h5>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-12 text-center">
          <Link 
            href="#"
            className="inline-flex items-center px-8 py-3 border border-purple-300 rounded-lg text-purple-700 font-medium hover:bg-purple-50 transition-colors"
          >
            View all success stories
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;