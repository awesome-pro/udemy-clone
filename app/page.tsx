import Companies from "@/components/companies";
import SkillsCoursesSection from "@/components/courses";
import CourseSection from "@/components/courses/CourseSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import LearningGoals from "@/components/learning/LearningGoals";
import { Navbar } from "@/components/navbar/Navbar";
import PricingPlans from "@/components/pricing/PricingPlans";
import Testimonials from "@/components/testimonials/Testimonials";
import TrendingNow from "@/components/trending/TrendingNow";
import TopTrends from "@/components/trends/TopTrends";

// Mock data for courses
const topCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2025",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: 245789,
    price: 84.99,
    salePrice: 16.99,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    tags: ["Bestseller", "Hot & New"],
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
    tags: ["Bestseller"],
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
    tags: ["Bestseller", "Hot & New"],
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
    tags: ["Highest Rated"],
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
    tags: ["Bestseller"],
  },
  {
    id: 6,
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviews: 176543,
    price: 84.99,
    salePrice: 15.99,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    tags: ["Bestseller"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <SkillsCoursesSection />
      <Companies />
      <CourseSection 
        title="Featured courses for you" 
        courses={topCourses} 
      />
      <LearningGoals />
      <PricingPlans />
      <Testimonials />
      <TrendingNow />
      <TopTrends />
      <Footer />
    </main>
  );
}
