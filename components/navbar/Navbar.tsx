"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, ShoppingCart, Menu, X, ChevronDown, Check, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SearchDialog } from "@/components/search/SearchDialog";
import { ExploreDropdown } from "./explore";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeIssuer, setActiveIssuer] = useState<string | null>("aws"); // Default to AWS
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const exploreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      
      if (exploreMenuRef.current && !exploreMenuRef.current.contains(event.target as Node)) {
        setIsExploreMenuOpen(false);
        // Reset active states when closing the menu
        setActiveCategory(null);
        setActiveIssuer("aws"); // Default to AWS
        setActiveSubject(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchDialogOpen(true);
      }

      if (e.key === "Escape") {
        setIsExploreMenuOpen(false);
        // Reset active states when closing the menu
        setActiveCategory(null);
        setActiveIssuer("aws"); // Default to AWS
        setActiveSubject(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Define categories with subcategories for multi-level navigation
  const categories = [
    { name: "Development", icon: "💻", subcategories: [
      "Web Development", "Mobile Development", "Game Development", "Database Design", "Programming Languages"
    ] },
    { name: "Business", icon: "📊", subcategories: [
      "Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy"
    ] },
    { name: "Finance & Accounting", icon: "💰", subcategories: [
      "Accounting", "Cryptocurrency", "Financial Analysis", "Investment Banking", "Financial Modeling"
    ] },
    { name: "IT & Software", icon: "🖥️", subcategories: [
      "IT Certifications", "Network & Security", "Hardware", "Operating Systems", "Software Testing"
    ] },
    { name: "Office Productivity", icon: "📝", subcategories: [
      "Microsoft", "Apple", "Google", "SAP", "Oracle"
    ] },
    { name: "Personal Development", icon: "🧠", subcategories: [
      "Leadership", "Career Development", "Parenting & Relationships", "Happiness", "Personal Productivity"
    ] },
    { name: "Design", icon: "🎨", subcategories: [
      "Web Design", "Graphic Design", "Design Tools", "User Experience", "Game Design"
    ] },
    { name: "Marketing", icon: "📱", subcategories: [
      "Digital Marketing", "Social Media Marketing", "Marketing Fundamentals", "SEO", "Branding"
    ] },
    { name: "Lifestyle", icon: "🌿", subcategories: [
      "Arts & Crafts", "Food & Beverage", "Beauty & Makeup", "Travel", "Gaming"
    ] },
    { name: "Photography & Video", icon: "📷", subcategories: [
      "Digital Photography", "Photography Tools", "Commercial Photography", "Video Design", "3D Modeling"
    ] },
    { name: "Health & Fitness", icon: "💪", subcategories: [
      "Fitness", "Nutrition", "Sports", "Yoga", "Mental Health"
    ] },
    { name: "Music", icon: "🎵", subcategories: [
      "Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques"
    ] },
    { name: "Teaching & Academics", icon: "📚", subcategories: [
      "Engineering", "Math", "Science", "Social Science", "Teacher Training"
    ] },
  ];

  // Define certification categories with subcategories
  const certifications = [
    { name: "Browse Certifications", id: "browse", subcategories: [] },
    { name: "Certification preparation", id: "prep", subcategories: [] },
  ];

  // Define popular issuers with their certification offerings
  const popularIssuers = [
    { 
      name: "Amazon Web Services (AWS) Certifications", 
      id: "aws",
      subcategories: [
        "AWS Certified Solutions Architect - Associate",
        "AWS Certified Cloud Practitioner",
        "AWS Certified Developer - Associate",
        "AWS Certified SysOps Administrator - Associate",
        "AWS Certified Solutions Architect - Professional",
        "AWS Certified DevOps Engineer - Professional",
        "AWS Certified Security - Specialty",
        "AWS Certified Machine Learning - Specialty",
        "AWS Certified Advanced Networking - Specialty"
      ] 
    },
    { 
      name: "Microsoft Certifications", 
      id: "microsoft",
      subcategories: [
        "Microsoft Azure Administrator",
        "Microsoft Azure Developer",
        "Microsoft Azure Architect",
        "Microsoft 365 Certified",
        "Microsoft Power Platform"
      ] 
    },
    { 
      name: "Cisco Certifications", 
      id: "cisco",
      subcategories: [
        "CCNA - Cisco Certified Network Associate",
        "CCNP - Cisco Certified Network Professional",
        "CCIE - Cisco Certified Internetwork Expert",
        "Cisco DevNet",
        "Cisco CyberOps"
      ] 
    },
    { 
      name: "CompTIA Certifications", 
      id: "comptia",
      subcategories: [
        "CompTIA A+",
        "CompTIA Network+",
        "CompTIA Security+",
        "CompTIA Cloud+",
        "CompTIA CySA+"
      ] 
    },
    { 
      name: "Project Management Institute (PMI) Certifications", 
      id: "pmi",
      subcategories: [
        "PMP - Project Management Professional",
        "CAPM - Certified Associate in Project Management",
        "PMI-ACP - PMI Agile Certified Practitioner",
        "PgMP - Program Management Professional",
        "PfMP - Portfolio Management Professional"
      ] 
    },
    { 
      name: "Google Cloud Certifications", 
      id: "google",
      subcategories: [
        "Google Cloud Associate Engineer",
        "Google Cloud Professional Architect",
        "Google Cloud Professional Data Engineer",
        "Google Cloud Professional DevOps Engineer",
        "Google Cloud Professional Network Engineer"
      ] 
    },
    { 
      name: "Six Sigma Certifications", 
      id: "sixsigma",
      subcategories: [
        "Six Sigma Yellow Belt",
        "Six Sigma Green Belt",
        "Six Sigma Black Belt",
        "Six Sigma Master Black Belt",
        "Lean Six Sigma"
      ] 
    },
    { 
      name: "Oracle Certifications", 
      id: "oracle",
      subcategories: [
        "Oracle Database",
        "Oracle Cloud Infrastructure",
        "Oracle Applications",
        "Oracle Java",
        "Oracle Middleware"
      ] 
    },
  ];

  // Define popular subjects with their specific courses
  const popularSubjects = [
    { 
      name: "Cloud Certification", 
      id: "cloud",
      subcategories: [
        "AWS Certification Training",
        "Microsoft Azure Certification",
        "Google Cloud Certification",
        "Cloud Security",
        "Cloud Architecture"
      ] 
    },
    { 
      name: "Networking Certification", 
      id: "networking",
      subcategories: [
        "Cisco CCNA",
        "CompTIA Network+",
        "Juniper Networks",
        "Network Security",
        "Wireless Networking"
      ] 
    },
    { 
      name: "Cybersecurity Certification", 
      id: "cybersecurity",
      subcategories: [
        "CompTIA Security+",
        "Certified Ethical Hacker (CEH)",
        "CISSP",
        "Penetration Testing",
        "Security Awareness"
      ] 
    },
    { 
      name: "Project Management Certification", 
      id: "projectmgmt",
      subcategories: [
        "PMP Certification",
        "CAPM Certification",
        "Scrum",
        "Agile",
        "PRINCE2"
      ] 
    },
    { 
      name: "DevOps Certification", 
      id: "devops",
      subcategories: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD",
        "Infrastructure as Code"
      ] 
    },
    { 
      name: "Coding Certification", 
      id: "coding",
      subcategories: [
        "Python",
        "Java",
        "JavaScript",
        "C#",
        "PHP"
      ] 
    },
    { 
      name: "System Administration Certification", 
      id: "sysadmin",
      subcategories: [
        "Linux Administration",
        "Windows Server",
        "Active Directory",
        "Virtualization",
        "Shell Scripting"
      ] 
    },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out bg-white/70 backdrop-blur-lg border-b border-gray-200",
        isScrolled ? "shadow-sm" : ""
      )}
    >
      <div className="flex items-center justify-between py-3 px-5">
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="mr-4 flex-shrink-0 group">
          <h1 className="text-2xl font-bold text-[#1c1d1f] group-hover:text-[#a435f0] transition-colors duration-200">udemy</h1>
        </Link>

        {/* Explore button - desktop only */}
        <div className="hidden md:block relative" ref={exploreMenuRef}>
          <ExploreDropdown />
          
          {/* Explore mega menu */}
          {isExploreMenuOpen && (
            <div 
              className="absolute top-full left-0 z-50 w-[980px] bg-white shadow-xl border border-gray-200 rounded-b-lg py-4"
              onMouseLeave={() => setIsExploreMenuOpen(false)}
            >
              <div className="grid grid-cols-3 gap-6 p-4">
                {/* First column - Browse Certifications */}
                <div className="col-span-1 border-r border-gray-200 pr-4">
                  <h3 className="font-semibold text-gray-800 mb-4">Browse Certifications</h3>
                  <ul className="space-y-2">
                    {certifications.map((cert) => (
                      <li key={cert.id}>
                        <button 
                          className={`w-full flex items-center text-gray-700 hover:text-[#a435f0] transition-colors ${cert.id === activeCategory ? 'text-[#a435f0] font-medium' : ''}`}
                          onMouseEnter={() => setActiveCategory(cert.id)}
                        >
                          <span>{cert.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-semibold text-gray-800 mt-8 mb-4">Popular Issuers</h3>
                  <ul className="space-y-2">
                    {popularIssuers.map((issuer) => (
                      <li key={issuer.id}>
                        <button 
                          className={`w-full flex items-center text-gray-700 hover:text-[#a435f0] transition-colors ${issuer.id === activeIssuer ? 'text-[#a435f0] font-medium' : ''}`}
                          onMouseEnter={() => setActiveIssuer(issuer.id)}
                        >
                          <span>{issuer.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Second column - Popular Subjects */}
                <div className="col-span-1 border-r border-gray-200 px-4">
                  <h3 className="font-semibold text-gray-800 mb-4">Popular Subjects</h3>
                  <ul className="space-y-2">
                    {popularSubjects.map((subject) => (
                      <li key={subject.id}>
                        <button 
                          className={`w-full flex items-center text-gray-700 hover:text-[#a435f0] transition-colors ${subject.id === activeSubject ? 'text-[#a435f0] font-medium' : ''}`}
                          onMouseEnter={() => setActiveSubject(subject.id)}
                        >
                          <span>{subject.name}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Third column - Dynamic content based on active selection */}
                <div className="col-span-1 pl-4">
                  {/* Show content based on active issuer */}
                  {activeIssuer && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">
                        {popularIssuers.find(i => i.id === activeIssuer)?.name.split(' ')[0]} Certifications
                      </h3>
                      <ul className="space-y-2">
                        {popularIssuers.find(i => i.id === activeIssuer)?.subcategories.map((cert, index) => (
                          <li key={index}>
                            <Link href="#" className="block text-gray-700 hover:text-[#a435f0] transition-colors">
                              {cert}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Show content based on active subject */}
                  {activeSubject && !activeIssuer && (
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-4">
                        {popularSubjects.find(s => s.id === activeSubject)?.name}
                      </h3>
                      <ul className="space-y-2">
                        {popularSubjects.find(s => s.id === activeSubject)?.subcategories.map((course, index) => (
                          <li key={index}>
                            <Link href="#" className="block text-gray-700 hover:text-[#a435f0] transition-colors">
                              {course}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Categories section */}
              <div className="mt-6 pt-6 border-t border-gray-200 px-4">
                <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="grid grid-cols-4 gap-4">
                  {categories.map((category) => (
                    <div key={category.name} className="col-span-1">
                      <Link href="#" className="flex items-center text-gray-700 hover:text-[#a435f0] transition-colors">
                        <span className="mr-2">{category.icon}</span>
                        <span>{category.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search bar - grows to fill space */}
        <div className="hidden md:flex flex-1 mx-4 relative" ref={searchRef}>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              ref={searchInputRef}
              type="search"
              placeholder="Search for anything"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:border-[#a435f0] focus:ring-[#a435f0]/20"
              onClick={() => setIsSearchDialogOpen(true)}
              onFocus={() => setIsSearchDialogOpen(true)}
              readOnly
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-600">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>
        
        {/* Search Dialog */}
        <SearchDialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen} />

        {/* Business link - desktop only */}
        <div className="hidden lg:block">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="mx-4 text-sm font-medium text-gray-800 hover:text-[#a435f0] transition-colors"
                >
                  Udemy Business
                </Link>
              </TooltipTrigger>
              <TooltipContent className=" text-white">
                <p className="text-xs">Solutions for organizations</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Teach on Udemy - desktop only */}
        <div className="hidden lg:block">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="mx-4 text-sm font-medium text-gray-800 hover:text-[#a435f0] transition-colors"
                >
                  Teach on Udemy
                </Link>
              </TooltipTrigger>
              <TooltipContent className=" text-white">
                <p className="text-xs">Share your knowledge</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* My Learning - desktop only */}
        <div className="hidden lg:block">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="mx-4 text-sm font-medium text-gray-800 hover:text-[#a435f0] transition-colors"
                >
                  My Learning
                </Link>
              </TooltipTrigger>
              <TooltipContent className=" text-white">
                <p className="text-xs">Access your courses</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Shopping cart with badge */}
        <div className="relative mx-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="relative group">
                  <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-[#a435f0] transition-colors" />
                  <Badge className="absolute -top-2 -right-2 bg-[#a435f0] text-white px-1.5 py-0.5 text-xs rounded-full">
                    2
                  </Badge>
                </Link>
              </TooltipTrigger>
              <TooltipContent className=" text-white">
                <p className="text-xs">Shopping Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Login and Signup buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            variant="outline"
            className="font-medium border-gray-700 text-gray-700 hover:bg-gray-100 hover:border-[#a435f0] hover:text-[#a435f0] transition-colors"
            size="sm"
          >
            Log in
          </Button>
          <Button 
            className="font-medium bg-[#a435f0] text-white hover:bg-[#8710d8] transition-colors"
            size="sm"
          >
            Sign up
          </Button>
        </div>

        {/* Language selector */}
        <Dialog open={isLanguageDialogOpen} onOpenChange={setIsLanguageDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-2 border-gray-700 text-gray-700 hover:bg-gray-100 hover:border-[#a435f0] hover:text-[#a435f0] transition-colors group"
            >
              <Globe className="h-5 w-5 group-hover:text-[#a435f0] transition-colors" />
            </Button>
          </DialogTrigger>
          <DialogContent className=" rounded-2xl ">
            <DialogHeader>
              <DialogTitle className="text-center">Choose a language</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4 max-h-[60vh] overflow-y-auto">
              {languages.map((language) => (
                <button
                  key={language.code}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-md transition-colors",
                    selectedLanguage.code === language.code
                      ? "bg-[#a435f0]/10 text-[#a435f0]"
                      : "hover:bg-gray-100"
                  )}
                  onClick={() => {
                    setSelectedLanguage(language);
                    setIsLanguageDialogOpen(false);
                  }}
                >
                  <span className="text-xl">{language.flag}</span>
                  <span className="flex-1 text-left">{language.name}</span>
                  {selectedLanguage.code === language.code && (
                    <Check className="h-4 w-4 text-[#a435f0]" />
                  )}
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            {/* Mobile search */}
            <div className="relative my-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for anything"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:border-[#a435f0] focus:ring-[#a435f0]/20"
                onClick={() => {
                  setIsSearchDialogOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                readOnly
              />
            </div>

            {/* Mobile categories */}
            <div className="space-y-2 my-4">
              <h3 className="font-bold text-gray-800 mb-2">Categories</h3>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href="#"
                  className="flex items-center py-2 text-gray-700 hover:text-gray-900"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Mobile business and teach links */}
            <div className="space-y-2 my-4 border-t border-gray-200 pt-4">
              <Link
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900"
              >
                Udemy Business
              </Link>
              <Link
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900"
              >
                Teach on Udemy
              </Link>
              <Link
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900"
              >
                My Learning
              </Link>
            </div>

            {/* Mobile login/signup */}
            <div className="flex flex-col gap-2 my-4 border-t border-gray-200 pt-4">
              <Button
                variant="outline"
                className="w-full font-medium border-gray-700 text-gray-700 hover:border-[#a435f0] hover:text-[#a435f0] transition-colors"
              >
                Log in
              </Button>
              <Button className="w-full font-medium bg-[#a435f0] text-white hover:bg-[#8710d8] transition-colors">
                Sign up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;