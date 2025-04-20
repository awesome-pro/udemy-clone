import Companies from "@/components/companies";
import SkillsCoursesSection from "@/components/courses";
import CourseSection from "@/components/courses/CourseSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/hero2";
import LearningGoals from "@/components/learning/LearningGoals";
import { Navbar } from "@/components/navbar/Navbar";
import PricingPlans from "@/components/pricing/PricingPlans";
import Testimonials from "@/components/testimonials/Testimonials";
import TrendingNow from "@/components/trending/TrendingNow";
import TopTrends from "@/components/trends/TopTrends";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <SkillsCoursesSection />
      <Companies />
      <CourseSection />
      <LearningGoals />
      <PricingPlans />
      <Testimonials />
      <TrendingNow />
      <TopTrends />
      <Footer />
    </main>
  );
}
