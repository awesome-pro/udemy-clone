"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Search, BookOpen, Video, File, Clock, Sparkles, Tag, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Mock search data
const mockSearchResults = [
  {
    type: "Course",
    title: "React - The Complete Guide 2025 (incl. React Router & Redux)",
    description: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js and way more!",
    href: "/course/react-complete-guide",
    category: "Development",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    students: "752,410",
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
  },
  {
    type: "Course",
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
    href: "/course/javascript-complete",
    category: "Development",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    students: "689,235",
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
  },
  {
    type: "Course",
    title: "Python for Data Science and Machine Learning Bootcamp",
    description: "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, and more!",
    href: "/course/python-data-science",
    category: "Data Science",
    instructor: "Jose Portilla",
    rating: 4.6,
    students: "534,890",
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg"
  },
  {
    type: "Path",
    title: "Full-Stack Web Developer Path",
    description: "Become a professional web developer with this comprehensive learning path",
    href: "/learning-path/web-developer",
    category: "Career Path",
    courses: 12,
    duration: "6 months",
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
  },
  {
    type: "Topic",
    title: "Artificial Intelligence",
    description: "Explore courses on AI, machine learning, and deep learning",
    href: "/topic/artificial-intelligence",
    category: "Topic",
    courses: 1250,
    image: "https://s.udemycdn.com/browse_components/link-bar/large-next-v2/AI.jpg"
  }
];

// Popular searches
const popularSearches = [
  "javascript", "react", "python", "web development", 
  "data science", "machine learning", "aws", "excel",
  "sql", "docker", "typescript", "figma"
];

// Categories with icons
const categories = [
  { name: "Development", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Business", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "IT & Software", icon: <File className="h-4 w-4" /> },
  { name: "Design", icon: <Sparkles className="h-4 w-4" /> },
  { name: "Marketing", icon: <Tag className="h-4 w-4" /> }
];

// Recent searches (would normally be stored in localStorage or user profile)
const recentSearches = [
  "react hooks", "typescript tutorial", "next.js", "tailwind css"
];

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"all" | "courses" | "instructors" | "topics">("all");
  
  // Reset search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
    }
  }, [open]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
      
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange]);

  const filteredResults = searchQuery
    ? mockSearchResults.filter(
        item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 gap-0 overflow-hidden rounded-2xl">
        <div className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything..."
              className="flex h-14 w-full rounded-md border-0 bg-transparent py-3 text-base outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            <div className="text-xs text-gray-500 hidden md:block">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-600">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
          
          {/* Tabs for filtering */}
          <div className="border-b">
            <div className="flex px-2">
              {["all", "courses", "instructors", "topics"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab as any)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium relative",
                    selectedTab === tab 
                      ? "text-[#a435f0]" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {selectedTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a435f0]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="max-h-[500px] overflow-y-auto p-2">
            {searchQuery === "" ? (
              <div className="py-2 px-2">
                {/* Recent searches */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-medium text-gray-700">Recent Searches</h2>
                    <button className="text-xs text-[#a435f0] hover:text-[#8710d8] font-medium">
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setSearchQuery(term)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                      >
                        <Clock className="h-3 w-3 text-gray-500" />
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Popular searches */}
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-700 mb-2">Popular Searches</h2>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setSearchQuery(term)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Browse categories */}
                <div>
                  <h2 className="text-sm font-medium text-gray-700 mb-2">Browse Categories</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700">
                          {category.icon}
                        </div>
                        <span className="text-sm font-medium">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredResults.length > 0 ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    <h2 className="px-2 text-xs font-semibold text-gray-500 mb-2">
                      {filteredResults.length} results
                    </h2>
                    
                    {filteredResults.map((item, index) => (
                      <div
                        key={index}
                        className="px-2 py-3 rounded-md cursor-pointer flex gap-3 items-start hover:bg-gray-100"
                        onClick={() => {
                          window.location.href = item.href;
                        }}
                      >
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={cn(
                              "text-xs font-medium px-1.5 py-0.5 rounded",
                              item.type === "Course" ? "bg-blue-100 text-blue-800" :
                              item.type === "Path" ? "bg-purple-100 text-purple-800" :
                              "bg-green-100 text-green-800"
                            )}>
                              {item.type}
                            </span>
                            <span className="text-xs text-gray-500">{item.category}</span>
                          </div>
                          
                          <h3 className="font-medium text-sm text-gray-900 truncate mb-1">
                            {item.title}
                          </h3>
                          
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {item.description}
                          </p>
                          
                          {item.type === "Course" && (
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                              <span>{item.instructor}</span>
                              <span>•</span>
                              <div className="flex items-center">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>{item.rating}</span>
                              </div>
                              <span>•</span>
                              <span>{item.students} students</span>
                            </div>
                          )}
                          
                          {item.type === "Path" && (
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                              <span>{item.courses} courses</span>
                              <span>•</span>
                              <span>{item.duration}</span>
                            </div>
                          )}
                          
                          {item.type === "Topic" && (
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                              <span>{item.courses}+ courses</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No results found</h3>
                <p className="text-xs text-gray-500 mb-4">
                  We couldn't find anything matching "{searchQuery}". Try something else?
                </p>
                <Link
                  href={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="text-sm font-medium text-[#a435f0] hover:text-[#8710d8]"
                >
                  Browse all courses for "{searchQuery}"
                </Link>
              </div>
            )}
          </div>
          
          <div className="border-t p-2 flex justify-between items-center">
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <span>Press</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-600">
                ESC
              </kbd>
              <span>to close</span>
            </div>
            <Link href="/browse" className="text-xs font-medium text-[#a435f0] hover:text-[#8710d8]">
              Browse all courses
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchDialog;
