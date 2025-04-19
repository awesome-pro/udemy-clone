"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselItems = [
    {
      id: 1,
      title: "Learning that gets you",
      description: "Skills for your present (and your future). Get started with us.",
      image: "/bg.png",
      ctaText: "Explore courses",
      overlayColor: "rgba(0, 0, 0, 0.5)"
    },
    {
      id: 2,
      title: "Expand your potential",
      description: "Take the next step in your career with a course from industry experts.",
      image: "/bg.png",
      ctaText: "Find your path",
      overlayColor: "rgba(0, 0, 0, 0.55)"
    },
    {
      id: 3,
      title: "Courses from $13.99",
      description: "Learn the skills you need at prices you'll love. Courses from $13.99 through April 27.",
      image: "/bg.png",
      ctaText: "Browse deals",
      overlayColor: "rgba(0, 0, 0, 0.6)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <section className="relative pt-16 overflow-hidden h-[calc(100vh-80px)] min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Full-screen background image */}
          <div className="absolute inset-0 w-full h-full">
            <div 
              className="absolute inset-0 z-10" 
              style={{ backgroundColor: carouselItems[currentSlide].overlayColor }}
            />
            <Image
              src={carouselItems[currentSlide].image}
              alt="Hero background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          
          {/* Content overlay */}
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-2xl max-w-2xl rounded-xl border border-white/20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a435f0] to-[#8710d8] bg-clip-text text-transparent">
                {carouselItems[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                {carouselItems[currentSlide].description}
              </p>
              
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full pl-12 pr-28 py-7 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a435f0] focus:border-transparent shadow-sm text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#a435f0] hover:bg-[#8710d8] text-white font-medium px-5 py-2 rounded-lg transition-all duration-300">
                  Search
                </Button>
              </div>
              
              <Button variant="outline" className="group flex items-center gap-2 border-[#a435f0] text-[#a435f0] hover:bg-[#a435f0]/10 transition-all duration-300">
                {carouselItems[currentSlide].ctaText}
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-10 bg-[#a435f0]" : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;