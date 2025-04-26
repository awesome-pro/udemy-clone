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
      image: "https://img-c.udemycdn.com/course/240x135/5077642_2dda_7.jpg",
      bestseller: true
    },
    {
      id: 6,
      title: "ChatGPT for Business: Automate Tasks & Boost Productivity",
      instructors: "Sarah Johnson, Business AI Solutions",
      rating: 4.7,
      reviews: 3241,
      price: 1299,
      image: "https://img-c.udemycdn.com/course/240x135/5266298_5e2a_3.jpg"
    },
    {
      id: 3,
      title: "Mastering SEO With ChatGPT: Ultimate Beginner's Guide",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 296,
      price: 829,
      image: "https://img-c.udemycdn.com/course/240x135/5248846_2f41_4.jpg"
    },
    {
      id: 4,
      title: "Upgrade Your Social Media Presence with ChatGPT",
      instructors: "Anton Voroniuk, Anton Voroniuk Support",
      rating: 4.5,
      reviews: 262,
      price: 829,
      image: "https://img-c.udemycdn.com/course/240x135/5356786_d4d7_2.jpg"
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
      image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
      bestseller: true
    },
    {
      id: 8,
      title: "Complete Python Developer in 2025: Zero to Mastery",
      instructors: "Andrei Neagoie, Zero To Mastery",
      rating: 4.6,
      reviews: 84590,
      price: 2899,
      image: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg"
    },
    {
      id: 9,
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      instructors: "Dr. Angela Yu, Developer & Lead Instructor",
      rating: 4.7,
      reviews: 237890,
      price: 3699,
      image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
      bestseller: true
    },
    {
      id: 10,
      title: "Python for Financial Analysis and Algorithmic Trading",
      instructors: "Jose Portilla, Head of Data Science",
      rating: 4.5,
      reviews: 18735,
      price: 2499,
      image: "https://img-c.udemycdn.com/course/240x135/1189208_d9a3_6.jpg"
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
      image: "https://img-c.udemycdn.com/course/240x135/3891194_7f8f_4.jpg",
      bestseller: true
    },
    {
      id: 12,
      title: "CompTIA A+ Core 1 (220-1101) & Core 2 (220-1102) Complete",
      instructors: "Mike Meyers, Total Seminars",
      rating: 4.8,
      reviews: 59632,
      price: 3199,
      image: "https://img-c.udemycdn.com/course/240x135/5173932_2df7.jpg"
    },
    {
      id: 13,
      title: "Microsoft Azure Fundamentals AZ-900 Certification Exam Prep",
      instructors: "Scott Duffy, MCSE, MCSD, Azure Solutions Architect",
      rating: 4.6,
      reviews: 42890,
      price: 2499,
      image: "https://img-c.udemycdn.com/course/240x135/3994604_1d3f_2.jpg"
    },
    {
      id: 14,
      title: "Cisco CCNA 200-301 – Complete Guide 2025",
      instructors: "Neil Anderson, Flackbox",
      rating: 4.8,
      reviews: 37450,
      price: 3899,
      image: "https://img-c.udemycdn.com/course/240x135/2694854_a637_5.jpg",
      bestseller: true
    }
  ],
  "Leadership": [
    {
      id: 15,
      title: "Leadership: Practical Leadership Skills for 2025",
      instructors: "Chris Croft, Management Trainer and Consultant",
      rating: 4.6,
      reviews: 28734,
      price: 1999,
      image: "https://img-c.udemycdn.com/course/240x135/1259404_72d4_7.jpg",
      bestseller: true
    },
    {
      id: 16,
      title: "The Complete Leadership Masterclass for New Managers",
      instructors: "TJ Walker, Communication Skills Expert",
      rating: 4.5,
      reviews: 12450,
      price: 1799,
      image: "https://img-c.udemycdn.com/course/240x135/1361742_f2d0_3.jpg"
    },
    {
      id: 17,
      title: "Executive Presence: Leadership Communication Skills",
      instructors: "Jennifer Hennings, Executive Coach",
      rating: 4.7,
      reviews: 9876,
      price: 2299,
      image: "https://img-c.udemycdn.com/course/240x135/1533072_cdb2_2.jpg"
    },
    {
      id: 18,
      title: "Emotional Intelligence for Leadership & Management",
      instructors: "Robin Hills, Director at Ei4Change",
      rating: 4.6,
      reviews: 15320,
      price: 1699,
      image: "https://img-c.udemycdn.com/course/240x135/1761310_1f3e_4.jpg"
    }
  ],
  "Web Development": [
    {
      id: 19,
      title: "The Complete 2025 Web Development Bootcamp",
      instructors: "Dr. Angela Yu, Developer & Lead Instructor",
      rating: 4.7,
      reviews: 245890,
      price: 3499,
      image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
      bestseller: true
    },
    {
      id: 20,
      title: "The Complete JavaScript Course 2025: From Zero to Expert",
      instructors: "Jonas Schmedtmann, Web Developer & Designer",
      rating: 4.8,
      reviews: 176540,
      price: 2999,
      image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
      bestseller: true
    },
    {
      id: 21,
      title: "React - The Complete Guide 2025 (incl. React Router & Redux)",
      instructors: "Maximilian Schwarzmüller, Professional Web Developer",
      rating: 4.6,
      reviews: 189760,
      price: 3299,
      image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
    },
    {
      id: 22,
      title: "Next.js & React - The Complete Guide 2025",
      instructors: "Maximilian Schwarzmüller, Professional Web Developer",
      rating: 4.7,
      reviews: 42560,
      price: 2799,
      image: "https://img-c.udemycdn.com/course/240x135/3873464_403c.jpg"
    }
  ],
  "Communication": [
    {
      id: 23,
      title: "Complete Public Speaking Masterclass For Every Occasion",
      instructors: "TJ Walker, Communication Skills Expert",
      rating: 4.5,
      reviews: 32450,
      price: 1999,
      image: "https://img-c.udemycdn.com/course/240x135/1333946_3680_4.jpg"
    },
    {
      id: 24,
      title: "Business Communication Skills: Business Writing & Grammar",
      instructors: "Alex Genadinik, Business Coach",
      rating: 4.4,
      reviews: 28760,
      price: 1699,
      image: "https://img-c.udemycdn.com/course/240x135/1132290_d46d_4.jpg"
    },
    {
      id: 25,
      title: "Assertiveness: You Can Speak Up For Yourself!",
      instructors: "Chris Croft, Management Trainer and Consultant",
      rating: 4.6,
      reviews: 19870,
      price: 1899,
      image: "https://img-c.udemycdn.com/course/240x135/1355610_a4c6_3.jpg",
      bestseller: true
    },
    {
      id: 26,
      title: "Conflict Management with Emotional Intelligence",
      instructors: "Robin Hills, Director at Ei4Change",
      rating: 4.5,
      reviews: 12340,
      price: 1799,
      image: "https://img-c.udemycdn.com/course/240x135/1235692_0e2f_3.jpg"
    }
  ],
  "Business Analytics & Intelligence": [
    {
      id: 27,
      title: "Microsoft Power BI - Up & Running With Power BI Desktop",
      instructors: "Maven Analytics, Award-winning BI & Analytics Education",
      rating: 4.6,
      reviews: 45670,
      price: 2499,
      image: "https://img-c.udemycdn.com/course/240x135/1756340_0543_4.jpg",
      bestseller: true
    },
    {
      id: 28,
      title: "Tableau 2025 A-Z: Hands-On Tableau Training for Data Science",
      instructors: "Kirill Eremenko, Data Scientist",
      rating: 4.6,
      reviews: 87650,
      price: 2799,
      image: "https://img-c.udemycdn.com/course/240x135/937678_abd2_2.jpg"
    },
    {
      id: 29,
      title: "SQL - MySQL for Data Analytics and Business Intelligence",
      instructors: "365 Careers, Creating opportunities for Data Science students",
      rating: 4.7,
      reviews: 32450,
      price: 2299,
      image: "https://img-c.udemycdn.com/course/240x135/1405188_4be1_3.jpg"
    },
    {
      id: 30,
      title: "Advanced Excel: Top Excel Tips & Formulas",
      instructors: "Maven Analytics, Award-winning BI & Analytics Education",
      rating: 4.7,
      reviews: 28760,
      price: 1999,
      image: "https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg",
      bestseller: true
    }
  ],
  "Marketing": [
    {
      id: 31,
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructors: "Rob Percival, Daragh Walsh, Codestars",
      rating: 4.5,
      reviews: 156780,
      price: 3499,
      image: "https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg",
      bestseller: true
    },
    {
      id: 32,
      title: "Facebook Ads & Instagram Ads 2025 MASTERY",
      instructors: "Coursenvy, Digital Marketing Agency",
      rating: 4.4,
      reviews: 45670,
      price: 2499,
      image: "https://img-c.udemycdn.com/course/240x135/2219511_c9a0_7.jpg"
    },
    {
      id: 33,
      title: "The Complete SEO Course: From Beginner to Advanced",
      instructors: "Joshua George, SEO Expert",
      rating: 4.6,
      reviews: 28760,
      price: 2299,
      image: "https://img-c.udemycdn.com/course/240x135/3254610_3e28_2.jpg"
    },
    {
      id: 34,
      title: "Email Marketing 2025: Build Email Lists & Write Newsletters",
      instructors: "Phil Ebiner, Top-Rated Instructor",
      rating: 4.5,
      reviews: 19870,
      price: 1999,
      image: "https://img-c.udemycdn.com/course/240x135/1412122_9aeb_8.jpg"
    }
  ],
  "Design": [
    {
      id: 35,
      title: "The Complete Graphic Design Theory for Beginners Course",
      instructors: "Lindsay Marsh, Graphic Design Master",
      rating: 4.6,
      reviews: 32450,
      price: 2499,
      image: "https://img-c.udemycdn.com/course/240x135/1643044_e281_5.jpg",
      bestseller: true
    },
    {
      id: 36,
      title: "Adobe Photoshop CC – Advanced Training Course",
      instructors: "Daniel Walter Scott, Adobe Certified Instructor",
      rating: 4.7,
      reviews: 28760,
      price: 2799,
      image: "https://img-c.udemycdn.com/course/240x135/1192036_153a_6.jpg"
    },
    {
      id: 37,
      title: "UI/UX Design: Create High-Fidelity Designs and Prototypes",
      instructors: "Daniel Walter Scott, Adobe Certified Instructor",
      rating: 4.7,
      reviews: 19870,
      price: 2299,
      image: "https://img-c.udemycdn.com/course/240x135/2196482_8e15_7.jpg",
      bestseller: true
    },
    {
      id: 38,
      title: "The Complete Blender Creator: Learn 3D Modelling for Beginners",
      instructors: "GameDev.tv Team, Yann Burrett",
      rating: 4.6,
      reviews: 45670,
      price: 2999,
      image: "https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg"
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
                <Button
                variant={'ghost'}
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 bg-transparent hover:bg-primary/20 hover:text-primary ${
                    activeDomain === domain
                      ? "text-primary border-b-2 border-primary bg-primary/30"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {domain}
                </Button>
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
            <div className="flex space-x-3 min-w-max ">
              {skillCategories.map((skill) => (
                <Button
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
                </Button>
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