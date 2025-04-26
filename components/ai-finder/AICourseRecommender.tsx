"use client";

import { useState, useRef } from "react";
import { 
  Mic, 
  Sparkles, 
  Brain, 
  Loader2, 
  Database, 
  CheckCircle2, 
  GraduationCap,
  Clock,
  Users,
  Star,
  ShoppingCart,
  ArrowRight,
  Zap,
  BarChart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Mock data for courses that will be "recommended" by AI
const recommendableCourses = [
  {
    id: 1,
    title: "Complete Machine Learning & Data Science Bootcamp 2025",
    instructor: "Dr. Angela Yu & Andrei Neagoie",
    rating: 4.9,
    reviews: 32456,
    price: 94.99,
    salePrice: 19.99,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    duration: "58 hours",
    students: 245890,
    level: "All Levels",
    description: "Learn Data Science, Machine Learning, Neural Networks, AI with Python. Build a portfolio of 12+ Machine Learning projects.",
    topics: ["Python", "Machine Learning", "Data Science", "Neural Networks", "AI", "TensorFlow", "PyTorch"]
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.7,
    reviews: 154320,
    price: 89.99,
    salePrice: 16.99,
    image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
    duration: "42 hours",
    students: 542300,
    level: "Intermediate",
    description: "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, and more!",
    topics: ["Python", "Data Science", "Machine Learning", "Data Visualization", "Statistics"]
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate in 2025: Zero to Mastery",
    instructor: "Daniel Bourke",
    rating: 4.8,
    reviews: 18765,
    price: 94.99,
    salePrice: 17.99,
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    duration: "64 hours",
    students: 98765,
    level: "Intermediate",
    description: "Pass the TensorFlow Developer Certification Exam by Google. Learn TensorFlow for Deep Learning & Machine Learning.",
    topics: ["TensorFlow", "Deep Learning", "Machine Learning", "Neural Networks", "Computer Vision", "NLP"]
  },
  {
    id: 4,
    title: "Deep Learning A-Z™: Hands-On Artificial Neural Networks",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviews: 167890,
    price: 99.99,
    salePrice: 19.99,
    image: "https://img-c.udemycdn.com/course/240x135/1151632_de9b.jpg",
    duration: "44 hours",
    students: 756230,
    level: "Advanced",
    description: "Learn to create Deep Learning Algorithms in Python from two Machine Learning & Data Science experts.",
    topics: ["Deep Learning", "Neural Networks", "AI", "Python", "TensorFlow", "PyTorch"]
  },
  {
    id: 5,
    title: "The Complete ChatGPT & OpenAI API Course: Build 5 AI Projects",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    reviews: 12543,
    price: 84.99,
    salePrice: 15.99,
    image: "https://img-c.udemycdn.com/course/240x135/5254183_f0df_3.jpg",
    duration: "18 hours",
    students: 87650,
    level: "All Levels",
    description: "Master ChatGPT, OpenAI API & LangChain. Build AI-powered applications with GPT-3.5, GPT-4 & DALL-E.",
    topics: ["ChatGPT", "OpenAI", "LangChain", "AI", "GPT", "DALL-E", "Prompt Engineering"]
  }
];

// Simulated AI analysis of user query
const analyzeUserQuery = (query: string) => {
  // In a real implementation, this would call an API
  const lowercaseQuery = query.toLowerCase();
  
  // Simple keyword matching for demo purposes
  const keywords = {
    ml: ["machine learning", "ml", "ai", "artificial intelligence", "neural", "deep learning"],
    data: ["data science", "data analysis", "analytics", "visualization", "statistics", "pandas"],
    python: ["python", "programming", "coding", "development"],
    tensorflow: ["tensorflow", "keras", "neural networks", "deep learning"],
    chatgpt: ["chatgpt", "gpt", "openai", "llm", "large language model", "prompt"]
  };
  
  // Calculate relevance scores
  const scores: Record<string, number> = {};
  
  Object.entries(keywords).forEach(([category, terms]) => {
    scores[category] = terms.reduce((score, term) => {
      return score + (lowercaseQuery.includes(term) ? 1 : 0);
    }, 0);
  });
  
  // Sort courses based on relevance
  return recommendableCourses.map(course => {
    let relevanceScore = 0;
    let matchReasons = [];
    
    // Calculate course relevance
    if (scores.ml > 0 && course.topics.some(t => ["Machine Learning", "AI", "Neural Networks", "Deep Learning"].includes(t))) {
      relevanceScore += scores.ml * 2;
      matchReasons.push("Matches your interest in Machine Learning and AI");
    }
    
    if (scores.data > 0 && course.topics.some(t => ["Data Science", "Data Visualization", "Statistics"].includes(t))) {
      relevanceScore += scores.data * 2;
      matchReasons.push("Aligns with your data science requirements");
    }
    
    if (scores.python > 0 && course.topics.includes("Python")) {
      relevanceScore += scores.python;
      matchReasons.push("Includes Python programming as requested");
    }
    
    if (scores.tensorflow > 0 && course.topics.some(t => ["TensorFlow", "Neural Networks"].includes(t))) {
      relevanceScore += scores.tensorflow * 1.5;
      matchReasons.push("Covers TensorFlow and neural networks");
    }
    
    if (scores.chatgpt > 0 && course.topics.some(t => ["ChatGPT", "OpenAI", "GPT", "LangChain"].includes(t))) {
      relevanceScore += scores.chatgpt * 2;
      matchReasons.push("Focuses on ChatGPT and OpenAI technologies");
    }
    
    // Add general relevance factors
    if (course.rating >= 4.7) {
      relevanceScore += 0.5;
      matchReasons.push("Highly rated by students");
    }
    
    if (course.students > 100000) {
      relevanceScore += 0.3;
      matchReasons.push("Popular course with many students");
    }
    
    return {
      ...course,
      relevanceScore,
      matchReasons: matchReasons.length > 0 ? matchReasons : ["General match for your learning goals"]
    };
  }).sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Format numbers with commas and abbreviate if large
const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// AI Recommendation Card Component
function RecommendationCard({ course, rank }: { course: any, rank: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: rank * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-48 md:h-full object-cover" 
          />
          <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Pick #{rank + 1}
          </div>
        </div>
        
        <div className="md:w-2/3 p-5 flex flex-col">
          <h3 className="font-bold text-lg mb-1">{course.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
          
          <div className="flex items-center mb-2">
            <span className="text-amber-500 font-bold mr-1">{course.rating}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">({formatNumber(course.reviews)})</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {course.topics.slice(0, 4).map((topic: string) => (
              <Badge key={topic} variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                {topic}
              </Badge>
            ))}
            {course.topics.length > 4 && (
              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                +{course.topics.length - 4} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {formatNumber(course.students)} students
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded text-xs">
              {course.level}
            </div>
          </div>
          
          <div className="mt-1 mb-3">
            <h4 className="text-sm font-semibold text-primary mb-1 flex items-center">
              <Brain className="h-3 w-3 mr-1" /> 
              Why this is a match:
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {course.matchReasons.slice(0, 3).map((reason: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <div>
              <span className="font-bold text-lg">${course.salePrice}</span>
              <span className="text-gray-500 text-sm line-through ml-2">${course.price}</span>
            </div>
            <Button className="bg-primary hover:bg-primary/80 text-white">
              <ShoppingCart className="h-4 w-4 mr-2" /> 
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AICourseRecommender() {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchStage, setSearchStage] = useState(0);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Speech recognition setup
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(true);
      
      // In a real implementation, we would use the Web Speech API
      // For this demo, we'll simulate speech recognition
      setTimeout(() => {
        setQuery("I want to learn machine learning and AI with Python");
        setIsListening(false);
      }, 2000);
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };
  
  const stopListening = () => {
    setIsListening(false);
  };
  
  // Simulate AI search process
  const handleSearch = () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setSearchStage(0);
    setShowResults(false);
    setRecommendations([]);
    
    // Simulate AI processing stages
    const stageTimings = [1500, 1500, 1500, 1000];
    let currentStage = 0;
    
    const processNextStage = () => {
      if (currentStage < stageTimings.length) {
        setTimeout(() => {
          setSearchStage(currentStage + 1);
          currentStage++;
          processNextStage();
        }, stageTimings[currentStage]);
      } else {
        // Search complete, show results
        const results = analyzeUserQuery(query);
        setRecommendations(results);
        setIsSearching(false);
        setShowResults(true);
      }
    };
    
    processNextStage();
  };
  
  const searchStages = [
    { icon: <Brain className="h-5 w-5 text-purple-600" />, text: "Analyzing your learning goals..." },
    { icon: <Database className="h-5 w-5 text-indigo-600" />, text: "Searching course database..." },
    { icon: <BarChart className="h-5 w-5 text-blue-600" />, text: "Ranking best matches..." },
    { icon: <Sparkles className="h-5 w-5 text-amber-600" />, text: "Preparing personalized recommendations..." }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-800 mb-4 px-3 py-1 text-xs font-medium rounded-full">
            POWERED BY AI
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Find Your Perfect Course with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Describe what you want to learn in your own words, and our AI will recommend the best courses tailored to your goals.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl shadow-primary/50 border border-gray-100 overflow-hidden mb-16 max-w-4xl mx-auto">
          <div className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 ">
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Describe what you want to learn (e.g., 'I want to build AI applications with Python')"
                    className="pl-12 pr-4 py-6   text-base rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    disabled={isSearching || isListening}
                  />
                
                <Button
                  className="rounded-lg bg-primary text-white px-8 py-6"
                  onClick={handleSearch}
                  disabled={isSearching || isListening || !query.trim()}
                >
                  {isSearching ? (
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  ) : (
                    <Sparkles className="h-5 w-5 mr-2" />
                  )}
                  Find Courses
                </Button>
              </div>
              
              <div className="mt-2 text-xs text-gray-500 flex items-center">
                <Zap className="h-3 w-3 mr-1 text-amber-500" />
                Try: "Machine learning with Python" or "ChatGPT app development"
              </div>
            
            {/* AI Processing Animation */}
            {isSearching && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center mb-6">
                    {searchStages.map((stage, index) => (
                      <div key={index} className="flex flex-col items-center mx-4">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                          index < searchStage 
                            ? "bg-green-100" 
                            : index === searchStage 
                              ? "bg-purple-100 animate-pulse" 
                              : "bg-gray-100"
                        )}>
                          {index < searchStage ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <div className={index === searchStage ? "animate-pulse" : ""}>
                              {stage.icon}
                            </div>
                          )}
                        </div>
                        <div className="h-0.5 w-16 bg-gray-200 mx-2 hidden md:block"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-700 font-medium mb-2">
                      {searchStages[Math.min(searchStage, searchStages.length - 1)].text}
                    </p>
                    <p className="text-sm text-gray-500">
                      Finding the perfect courses tailored to your learning goals...
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Results Section */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      AI-Recommended Courses for You
                    </h3>
                    <p className="text-gray-600">
                      Based on your learning goals, our AI has found these top-rated courses:
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {recommendations.slice(0, 3).map((course, index) => (
                      <RecommendationCard key={course.id} course={course} rank={index} />
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg">
                      View All Recommendations
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600 text-sm">
              Our AI analyzes your unique learning goals to find courses that match your specific needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Smart Course Analysis</h3>
            <p className="text-gray-600 text-sm">
              Understand why each course is recommended with detailed AI-powered explanations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Voice Search</h3>
            <p className="text-gray-600 text-sm">
              Simply speak your learning goals and let our AI find the perfect courses for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
