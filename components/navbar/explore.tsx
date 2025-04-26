import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BicepsFlexed, Book, BrainIcon, Building2, Camera, ChartBarIcon, ChevronDown, ChevronRight, CodeIcon, ComputerIcon, DollarSign, MemoryStickIcon, Music, PaintBucket, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExploreDropdown() {
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);
  const [activeSectionType, setActiveSectionType] = useState("categories");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const exploreMenuRef = useRef<HTMLDivElement | null>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreMenuRef.current && !exploreMenuRef.current.contains(event.target as Node)) {
        setIsExploreMenuOpen(false);
      }
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExploreMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Define the type for section items
  type SectionItem = {
    id: string;
    name: string;
    icon?: React.ReactNode;
  };

  // Define the type for a section
  type Section = {
    title: string;
    items: SectionItem[];
  };

  // Define the type for the sections object
  type Sections = {
    [key: string]: Section;
  };

  // Data structure
  const sections: Sections = {
    categories: {
      title: "Categories",
      items: [
        { id: "development", name: "Development", icon: <CodeIcon /> },
        { id: "business", name: "Business", icon: <ChartBarIcon /> },
        { id: "finance", name: "Finance & Accounting", icon: <DollarSign /> },
        { id: "it", name: "IT & Software", icon: <ComputerIcon /> },
        { id: "office", name: "Office Productivity", icon: <Building2 /> },
        { id: "personal", name: "Personal Development", icon: <BrainIcon /> },
        { id: "design", name: "Design", icon: <PaintBucket /> },
        { id: "marketing", name: "Marketing", icon: <Phone /> },
        { id: "lifestyle", name: "Lifestyle", icon: "🌿" },
        { id: "photo", name: "Photography & Video", icon:<Camera /> },
        { id: "health", name: "Health & Fitness", icon: <BicepsFlexed /> },
        { id: "music", name: "Music", icon: <Music /> },
        { id: "teaching", name: "Teaching & Academics", icon: <Book /> }
      ]
    },
    certifications: {
      title: "Certifications",
      items: [
        { id: "browse", name: "Browse Certifications" },
        { id: "prep", name: "Certification Preparation" }
      ]
    },
    issuers: {
      title: "Popular Issuers",
      items: [
        { id: "aws", name: "Amazon Web Services (AWS)" },
        { id: "microsoft", name: "Microsoft" },
        { id: "cisco", name: "Cisco" },
        { id: "comptia", name: "CompTIA" },
        { id: "pmi", name: "Project Management Institute (PMI)" },
        { id: "google", name: "Google Cloud" },
        { id: "sixsigma", name: "Six Sigma" },
        { id: "oracle", name: "Oracle" }
      ]
    },
    subjects: {
      title: "Popular Subjects",
      items: [
        { id: "cloud", name: "Cloud Certification" },
        { id: "networking", name: "Networking Certification" },
        { id: "cybersecurity", name: "Cybersecurity Certification" },
        { id: "projectmgmt", name: "Project Management Certification" },
        { id: "devops", name: "DevOps Certification" },
        { id: "coding", name: "Coding Certification" },
        { id: "sysadmin", name: "System Administration Certification" }
      ]
    }
  };

  // Define the type for item details
  type ItemDetails = {
    [key: string]: string[];
  };

  // Item details content based on selection
  const itemDetails: ItemDetails = {
    // Categories subcategories
    development: ["Web Development", "Mobile Development", "Game Development", "Database Design", "Programming Languages"],
    business: ["Entrepreneurship", "Communication", "Management", "Sales", "Business Strategy"],
    finance: ["Accounting", "Cryptocurrency", "Financial Analysis", "Investment Banking", "Financial Modeling"],
    it: ["IT Certifications", "Network & Security", "Hardware", "Operating Systems", "Software Testing"],
    office: ["Microsoft", "Apple", "Google", "SAP", "Oracle"],
    personal: ["Leadership", "Career Development", "Parenting & Relationships", "Happiness", "Personal Productivity"],
    design: ["Web Design", "Graphic Design", "Design Tools", "User Experience", "Game Design"],
    marketing: ["Digital Marketing", "Social Media Marketing", "Marketing Fundamentals", "SEO", "Branding"],
    lifestyle: ["Arts & Crafts", "Food & Beverage", "Beauty & Makeup", "Travel", "Gaming"],
    photo: ["Digital Photography", "Photography Tools", "Commercial Photography", "Video Design", "3D Modeling"],
    health: ["Fitness", "Nutrition", "Sports", "Yoga", "Mental Health"],
    music: ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques"],
    teaching: ["Engineering", "Math", "Science", "Social Science", "Teacher Training"],
    
    // Issuers certifications
    aws: ["AWS Certified Solutions Architect - Associate", "AWS Certified Cloud Practitioner", "AWS Certified Developer - Associate", "AWS Certified SysOps Administrator", "AWS Certified Solutions Architect - Professional"],
    microsoft: ["Microsoft Azure Administrator", "Microsoft Azure Developer", "Microsoft Azure Architect", "Microsoft 365 Certified", "Microsoft Power Platform"],
    cisco: ["CCNA - Cisco Certified Network Associate", "CCNP - Cisco Certified Network Professional", "CCIE - Cisco Certified Internetwork Expert", "Cisco DevNet", "Cisco CyberOps"],
    comptia: ["CompTIA A+", "CompTIA Network+", "CompTIA Security+", "CompTIA Cloud+", "CompTIA CySA+"],
    pmi: ["PMP - Project Management Professional", "CAPM - Certified Associate in Project Management", "PMI-ACP - PMI Agile Certified Practitioner", "PgMP - Program Management Professional", "PfMP - Portfolio Management Professional"],
    google: ["Google Cloud Associate Engineer", "Google Cloud Professional Architect", "Google Cloud Professional Data Engineer", "Google Cloud Professional DevOps Engineer", "Google Cloud Professional Network Engineer"],
    sixsigma: ["Six Sigma Yellow Belt", "Six Sigma Green Belt", "Six Sigma Black Belt", "Six Sigma Master Black Belt", "Lean Six Sigma"],
    oracle: ["Oracle Database", "Oracle Cloud Infrastructure", "Oracle Applications", "Oracle Java", "Oracle Middleware"],
    
    // Subject details
    cloud: ["AWS Certification Training", "Microsoft Azure Certification", "Google Cloud Certification", "Cloud Security", "Cloud Architecture"],
    networking: ["Cisco CCNA", "CompTIA Network+", "Juniper Networks", "Network Security", "Wireless Networking"],
    cybersecurity: ["CompTIA Security+", "Certified Ethical Hacker (CEH)", "CISSP", "Penetration Testing", "Security Awareness"],
    projectmgmt: ["PMP Certification", "CAPM Certification", "Scrum", "Agile", "PRINCE2"],
    devops: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Infrastructure as Code"],
    coding: ["Python", "Java", "JavaScript", "C#", "PHP"],
    sysadmin: ["Linux Administration", "Windows Server", "Active Directory", "Virtualization", "Shell Scripting"]
  };

  return (
    <div className="relative" ref={exploreMenuRef}>
      {/* Trigger button */}
      <button 
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
        onClick={() => setIsExploreMenuOpen(!isExploreMenuOpen)}
        onMouseEnter={() => setIsExploreMenuOpen(true)}
      >
        Explore
        <ChevronDown className={cn(
          "ml-1 h-4 w-4 transition-transform duration-200",
          isExploreMenuOpen ? "rotate-180" : ""
        )} />
      </button>
      
      {/* Dropdown menu */}
      {isExploreMenuOpen && (
        <div 
          className="absolute top-full left-0 z-50 w-[800px] bg-white shadow-lg rounded-lg border border-gray-100 overflow-hidden"
          onMouseLeave={() => setIsExploreMenuOpen(false)}
        >
          <div className="flex">
            {/* Left sidebar navigation */}
            <div className="w-1/4 bg-gray-50 p-2 border-r border-gray-100 max-h-[450px] overflow-y-auto">
              {Object.keys(sections).map((sectionKey) => (
                <div key={sectionKey} className="mb-4">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 px-3 mb-1">
                    {sections[sectionKey].title}
                  </h3>
                  <ul>
                    {sections[sectionKey].items.map((item) => (
                      <li key={item.id}>
                        <button
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between",
                            activeItemId === item.id ? "bg-purple-50 text-purple-700 font-medium" : "hover:bg-gray-100"
                          )}
                          onMouseEnter={() => {
                            setActiveSectionType(sectionKey);
                            setActiveItemId(item.id);
                          }}
                          onClick={() => {
                            // Handle click navigation here
                          }}
                        >
                          <span className="flex items-center">
                            {item.icon && <span className="mr-2">{item.icon}</span>}
                            {item.name}
                          </span>
                          <ChevronRight className="h-3 w-3 opacity-50" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Right content area */}
            <div className="w-3/4 p-6 max-h-[450px] overflow-y-auto">
              {activeItemId && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    {sections[activeSectionType].items.find(item => item.id === activeItemId)?.name}
                  </h2>
                  
                  {itemDetails[activeItemId] ? (
                    <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                      {itemDetails[activeItemId].map((detail, idx) => (
                        <Link 
                          key={idx} 
                          href="#" 
                          className="text-gray-700 hover:text-purple-700 transition-colors py-1 text-sm"
                        >
                          {detail}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No additional details available</p>
                  )}
                </div>
              )}
              
              {!activeItemId && (
                <div className="text-center p-8">
                  <p className="text-gray-500">Hover over an item to see details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}