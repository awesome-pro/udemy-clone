"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Award, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { motion, AnimatePresence } from "framer-motion";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  salePrice: number;
  image: string;
  tags: string[];
}

interface CourseSectionProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  featuredCategoryTags?: string[];
}

export function CourseSection({ 
  title, 
  subtitle, 
  courses, 
  featuredCategoryTags = [] 
}: CourseSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const itemsPerPage = 4;
  
  useEffect(() => {
    if (activeTag) {
      setFilteredCourses(courses.filter(course => course.tags.includes(activeTag)));
      setStartIndex(0);
    } else {
      setFilteredCourses(courses);
    }
  }, [activeTag, courses]);

  const endIndex = Math.min(startIndex + itemsPerPage, filteredCourses.length);
  const displayedCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(Math.min(filteredCourses.length - itemsPerPage, startIndex + itemsPerPage));
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {title}
            </h2>
          </div>
          
          {subtitle && (
            <p className="text-gray-600 mb-6">{subtitle}</p>
          )}
          
          {featuredCategoryTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {featuredCategoryTags.map((tag) => (
                <Button
                  key={tag}
                  variant={activeTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTagClick(tag)}
                  className={`rounded-full px-4 transition-all duration-300 ${
                    activeTag === tag 
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                      : "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300"
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={startIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {displayedCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full shadow-md h-12 w-12 flex items-center justify-center bg-white border-gray-200 ${
                startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-50 hover:border-indigo-200'
              }`}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full shadow-md h-12 w-12 flex items-center justify-center bg-white border-gray-200 ${
                endIndex >= filteredCourses.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-50 hover:border-indigo-200'
              }`}
              onClick={handleNext}
              disabled={endIndex >= filteredCourses.length}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.ceil(filteredCourses.length / itemsPerPage) }).map((_, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className={`w-8 h-8 rounded-full p-0 ${
                  Math.floor(startIndex / itemsPerPage) === idx
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:bg-indigo-50"
                }`}
                onClick={() => setStartIndex(idx * itemsPerPage)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-6 border-t border-gray-200 pt-6 px-8">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-gray-600">Top-rated courses</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-600">Full lifetime access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;