"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Hero slide data
const heroSlides = [
  {
    id: 1,
    title: "In-demand skills.",
    subtitle: "Available on demand.",
    description: "Get the top skills that others are using to advance their careers.",
    ctaButtons: [
      { text: "Learn Python", color: "primary", href: "/python" },
      { text: "Learn Excel", color: "outline", href: "/excel" }
    ],
    imageSrc: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
    imageAlt: "Woman learning online",
    bgColor: "bg-gray-100"
  },
  {
    id: 2,
    title: "Master new skills.",
    subtitle: "Learn at your pace.",
    description: "Take courses taught by industry experts and advance in your field.",
    ctaButtons: [
      { text: "Learn Web Development", color: "primary", href: "/web-development" },
      { text: "Learn Data Science", color: "outline", href: "/data-science" }
    ],
    imageSrc: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
    imageAlt: "Man studying on laptop",
    bgColor: "bg-blue-50"
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[600px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 w-full h-full ${heroSlides[currentSlide].bgColor}`}
          >
            <div className="container mx-auto h-full px-4 md:px-6">
              <div className="flex flex-col-reverse md:flex-row h-full items-center">
                <div className="md:w-1/2 pt-12 md:pt-0 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-lg max-w-md"
                  >
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                      {heroSlides[currentSlide].subtitle}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {heroSlides[currentSlide].description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      {heroSlides[currentSlide].ctaButtons.map((button, index) => (
                        <Button
                          key={index}
                          variant={button.color === "primary" ? "default" : "outline"}
                          className={`
                            ${button.color === "primary" 
                              ? "bg-purple-600 hover:bg-purple-700" 
                              : "border-purple-600 text-purple-600 hover:bg-purple-50"}
                            font-medium text-base px-4 py-2 h-auto
                          `}
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2 h-full flex items-end justify-center mt-6 md:mt-0">
                  <Image
                    src={heroSlides[currentSlide].imageSrc}
                    alt={heroSlides[currentSlide].imageAlt}
                    className="h-[350px] md:h-[450px] object-contain object-bottom"
                    fill
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-20 hover:bg-gray-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-20 hover:bg-gray-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-purple-600 w-8" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;