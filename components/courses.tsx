"use client";

import { useState, useEffect } from "react";
import { ChevronRight, CheckCircle, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for domains
const domainCategories = [
  "Data Science",
  "IT Certifications", 
  "Leadership", 
  "Web Development", 
  "Communication", 
  "Business Analytics & Intelligence",
  "Marketing",
  "Design"
];

// Mock data for skill categories with learner counts
const skillCategories = [
  { name: "ChatGPT", learners: "4M+", highlight: true },
  { name: "Data Science", learners: "7M+" },
  { name: "Python", learners: "477M+" },
  { name: "Machine Learning", learners: "8M+" },
  { name: "Deep Learning", learners: "2M+" },
  { name: "Artificial Intelligence (AI)", learners: "4M+" },
  { name: "Statistics", learners: "1M+" },
  { name: "Natural Language Processing", learners: "818,304" },
  { name: "SQL", learners: "5M+" },
  { name: "R", learners: "2M+" }
];

interface Course {
  id: number;
  title: string;
  instructors: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  bestseller?: boolean;
}

// Mock course data
const coursesData: Record<string, Course[]> = {
  "Data Science": [
    {
      id: 1,
      title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
      instructors: "Julian Melanson, Benza Maman, Leap Learner",
      rating: 4.5,
      reviews: 46564,
      price: 2819,
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
      bestseller: true
    },
    {
      id: 2,
      title: "ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 549,
      price: 939,
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
    },
    {
      id: 3,
      title: "Mastering SEO With ChatGPT: Ultimate Beginner's Guide",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 296,
      price: 829,
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
    },
    {
      id: 4,
      title: "Upgrade Your Social Media Presence with ChatGPT",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 262,
      price: 829,
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
    }
  ],
  "ChatGPT": [
    {
      id: 5,
      title: "The Complete ChatGPT Mastery Course: Zero to Hero",
      instructors: "Prof. James McGill, AI Excellence Team",
      rating: 4.8,
      reviews: 9842,
      price: 1999,
      image: "/api/placeholder/400/225",
      bestseller: true
    },
    {
      id: 6,
      title: "ChatGPT for Business: Automate Tasks & Boost Productivity",
      instructors: "Sarah Johnson, Business AI Solutions",
      rating: 4.7,
      reviews: 3241,
      price: 1299,
      image: "/api/placeholder/400/225"
    },
    {
      id: 3,
      title: "Mastering SEO With ChatGPT: Ultimate Beginner's Guide",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 296,
      price: 829,
      image: "/api/placeholder/400/225"
    },
    {
      id: 4,
      title: "Upgrade Your Social Media Presence with ChatGPT",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 262,
      price: 829,
      image: "/api/placeholder/400/225"
    }
  ],
  "Python": [
    {
      id: 7,
      title: "Python for Data Science and Machine Learning Bootcamp",
      instructors: "Jose Portilla, Head of Data Science",
      rating: 4.7,
      reviews: 125640,
      price: 3499,
      image: "/api/placeholder/400/225",
      bestseller: true
    },
    {
      id: 8,
      title: "Complete Python Developer in 2025: Zero to Mastery",
      instructors: "Andrei Neagoie, Zero To Mastery",
      rating: 4.6,
      reviews: 84590,
      price: 2899,
      image: "/api/placeholder/400/225"
    },
    {
      id: 9,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructors: "Dr. Angela Yu, Developer & Lead Instructor",
      rating: 4.7,
      reviews: 237890,
      price: 3699,
      image: "/api/placeholder/400/225",
      bestseller: true
    },
    {
      id: 10,
      title: "Python for Financial Analysis and Algorithmic Trading",
      instructors: "Jose Portilla, Head of Data Science",
      rating: 4.5,
      reviews: 18735,
      price: 2499,
      image: "/api/placeholder/400/225"
    }
  ],
  "IT Certifications": [
    {
      id: 11,
      title: "AWS Certified Solutions Architect - Associate 2025",
      instructors: "Stephane Maarek, AWS Certified Solutions Architect",
      rating: 4.7,
      reviews: 182734,
      price: 3699,
      image: "/api/placeholder/400/225",
      bestseller: true
    },
    {
      id: 12,
      title: "CompTIA A+ Core 1 (220-1101) & Core 2 (220-1102) Complete",
      instructors: "Mike Meyers, Total Seminars",
      rating: 4.8,
      reviews: 59632,
      price: 3199,
      image: "/api/placeholder/400/225"
    }
  ]
};

// Function to get courses based on active category
const getCoursesByCategory = (category: string): Course[] => {
  return coursesData[category] || coursesData["Data Science"]; // Default fallback
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < fullStars 
              ? "text-yellow-400 fill-yellow-400" 
              : i === fullStars && hasHalfStar 
                ? "text-yellow-400 fill-yellow-400 opacity-60" 
                : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// Course card component
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-[140px] object-cover" />
        {course.bestseller && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
            Bestseller
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12 group-hover:text-primary">{course.title}</h3>
        <p className="text-xs text-gray-500 mb-2 group-hover:text-gray-900">{course.instructors}</p>
        
        <div className="flex items-center mb-1">
          <span className="text-amber-500 font-bold mr-1">{course.rating}</span>
          <StarRating rating={course.rating} />
          <span className="text-gray-500 text-xs ml-2">({course.reviews.toLocaleString()})</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="font-bold text-gray-900">₹{course.price}</span>
          <div className="inline-flex items-center text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
            <CheckCircle size={12} className="mr-1" />
            Premium
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SkillsCoursesSection() {
  const [activeDomain, setActiveDomain] = useState("Data Science");
  const [activeSkill, setActiveSkill] = useState("Data Science");
  const [displayedCourses, setDisplayedCourses] = useState<Course[]>([]);

  // Effect to update courses when categories change
  useEffect(() => {
    // Priority to skill category, fallback to domain category
    const categoryToUse = coursesData[activeSkill] ? activeSkill : activeDomain;
    setDisplayedCourses(getCoursesByCategory(categoryToUse));
  }, [activeDomain, activeSkill]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main heading */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">All the skills you need in one place</h2>
          <p className="text-lg text-gray-600">From critical skills to technical topics, Udemy supports your professional development.</p>
        </div>
        
        {/* Domain tabs navigation */}
        <div className="relative mb-8">
          <div className="overflow-x-auto hide-scrollbar">
            <nav className="flex space-x-1 border-b border-gray-200 min-w-max">
              {domainCategories.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeDomain === domain
                      ? "text-primary border-b-2 border-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Gradient fades for horizontal scrolling */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Skills pill buttons */}
        <div className="relative mb-12">
          <div className="overflow-x-auto hide-scrollbar pb-2">
            <div className="flex space-x-3 min-w-max">
              {skillCategories.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setActiveSkill(skill.name)}
                  className={`rounded-full px-4 py-2 flex items-center transition-all duration-200 ${
                    activeSkill === skill.name
                      ? skill.highlight
                        ? "bg-primary text-white"
                        : "bg-gray-800 text-white"
                      : skill.highlight
                        ? "bg-gray-q200 text-gray-900 hover:bg-gray-300"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-2 text-xs opacity-80">{skill.learners}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Gradient fades for horizontal scrolling */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Course cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        
        {/* Show all button */}
        <div className="mt-10 flex justify-center">
          <Button 
            variant="outline"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium rounded-md px-6"
          >
            Show all {activeSkill} courses
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}