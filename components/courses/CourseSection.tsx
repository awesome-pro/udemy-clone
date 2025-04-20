"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Clock, 
  Star, 
  ShoppingCart,
  Heart,
  Play,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2025",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 245789,
    price: 84.99,
    salePrice: 16.99,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    tags: ["Web Development", "Bestseller", "Hot & New"],
    duration: "63 hours",
    students: 842590,
    level: "All Levels"
  },
  {
    id: 2,
    title: "The Complete 2025 Python Programming Masterclass",
    instructor: "Jose Portilla",
    rating: 4.7,
    reviews: 154320,
    price: 89.99,
    salePrice: 14.99,
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    tags: ["Python", "Bestseller", "Programming"],
    duration: "48 hours",
    students: 542300,
    level: "Beginner"
  },
  {
    id: 3,
    title: "React - The Complete Guide 2025 (incl. React Router & Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviews: 187654,
    price: 94.99,
    salePrice: 17.99,
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    tags: ["React", "Bestseller", "Hot & New", "Frontend"],
    duration: "52 hours",
    students: 398765,
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviews: 167890,
    price: 99.99,
    salePrice: 19.99,
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    tags: ["AI", "Machine Learning", "Highest Rated", "Python"],
    duration: "44 hours",
    students: 756230,
    level: "Advanced"
  },
  {
    id: 5,
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 176543,
    price: 84.99,
    salePrice: 15.99,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    tags: ["JavaScript", "Bestseller", "Web Development"],
    duration: "69 hours",
    students: 678900,
    level: "All Levels"
  },
  {
    id: 6,
    title: "AWS Certified Solutions Architect - Associate 2025",
    instructor: "Stephane Maarek",
    rating: 4.8,
    reviews: 158760,
    price: 94.99,
    salePrice: 18.99,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    tags: ["AWS", "Cloud", "Certification", "Bestseller"],
    duration: "37 hours",
    students: 495210,
    level: "Intermediate"
  },
  {
    id: 7,
    title: "The Complete Digital Marketing Course 2025",
    instructor: "Rob Percival",
    rating: 4.5,
    reviews: 134520,
    price: 79.99,
    salePrice: 13.99,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    tags: ["Marketing", "Digital", "SEO"],
    duration: "52 hours",
    students: 387650,
    level: "Beginner"
  },
  {
    id: 8,
    title: "Flutter & Dart - The Complete App Development Course",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.7,
    reviews: 118760,
    price: 89.99,
    salePrice: 16.99,
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    tags: ["Mobile", "Flutter", "App Development", "Hot & New"],
    duration: "48 hours",
    students: 329870,
    level: "Intermediate"
  }
];

// Featured categories that appear as tags
const featuredCategories = [
  "Web Development",
  "Python",
  "JavaScript",
  "React",
  "Machine Learning",
  "AWS",
  "Mobile",
  "Marketing"
];

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
  duration: string;
  students: number;
  level: string;
}

function CourseCard({ 
  title, 
  instructor, 
  rating, 
  reviews, 
  price, 
  salePrice, 
  image, 
  tags, 
  duration, 
  students, 
  level 
}: Course) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format numbers with commas and abbreviate if large
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-100 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="text-white text-center p-4">
              <div className="mb-2" >
                <Button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors">
                  <Play className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
              <p className="text-sm line-clamp-3">{title}</p>
            </div>
          </div>
        )}
        
        {tags.includes("Bestseller") && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-xs font-bold px-2 py-1 text-white rounded">
            BESTSELLER
          </div>
        )}
        
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{instructor}</p>
        
        <div className="flex items-center mb-2">
          <span className="text-amber-500 font-bold mr-1">{rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs ml-1">({formatNumber(reviews)})</span>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {formatNumber(students)}
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs">
            {level}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-lg">${salePrice}</span>
              <span className="text-gray-500 text-sm line-through ml-2">${price}</span>
            </div>
            <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-10"></div>
      
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 mr-2" /> 
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export function CourseSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeTag, setActiveTag] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerPage = 4;
  
  useEffect(() => {
    if (activeTag) {
      setFilteredCourses(courses.filter(course => 
        course.tags.includes(activeTag)
      ));
      setStartIndex(0);
    } else {
      setFilteredCourses(courses);
    }
  }, [activeTag]);

  const endIndex = Math.min(startIndex + itemsPerPage, filteredCourses.length);
  const displayedCourses = filteredCourses.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex(Math.min(filteredCourses.length - itemsPerPage, startIndex + itemsPerPage));
  };

  const handleTagClick = (tag: any) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-indigo-100 rounded-full p-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500">
                Most Popular Courses
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Handpicked by our experts, these courses have helped thousands of students advance their careers. Limited-time offers available!
            </p>
          </div>
          
          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 mt-4 md:mt-0 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
          >
            View all courses
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        

        <div className="flex flex-wrap gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {featuredCategories.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 whitespace-nowrap ${
                activeTag === tag 
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                  : "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300"
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={startIndex + "-" + (activeTag || "all")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {displayedCourses.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className={`absolute -left-4 top-1/2 transform -translate-y-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full shadow-lg h-12 w-12 flex items-center justify-center bg-white border-gray-200 ${
                startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-50 hover:border-indigo-200'
              }`}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </Button>
          </motion.div>
          
          <motion.div 
            className={`absolute -right-4 top-1/2 transform -translate-y-1/2 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full shadow-lg h-12 w-12 flex items-center justify-center bg-white border-gray-200 ${
                endIndex >= filteredCourses.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-50 hover:border-indigo-200'
              }`}
              onClick={handleNext}
              disabled={endIndex >= filteredCourses.length}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </Button>
          </motion.div>
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className={`w-10 h-10 rounded-full p-0 ${
                    Math.floor(startIndex / itemsPerPage) === idx
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "text-gray-500 hover:bg-indigo-50"
                  }`}
                  onClick={() => setStartIndex(idx * itemsPerPage)}
                >
                  {idx + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6 border-t border-gray-200 pt-8 px-4 md:px-12 bg-gray-50 rounded-lg shadow-inner">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-100 p-2">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium">Top-rated courses</h4>
                <p className="text-xs text-gray-500">Highest industry standards</p>
              </div>
            </div>
            
            <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Full lifetime access</h4>
                <p className="text-xs text-gray-500">Learn at your own pace</p>
              </div>
            </div>
            
            <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">30-day money-back</h4>
                <p className="text-xs text-gray-500">Risk-free satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseSection;