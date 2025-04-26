import Companies from "@/components/companies";
import SkillsCoursesSection from "@/components/courses";
import CourseSection from "@/components/courses/CourseSection";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/hero2";
import LearningGoals from "@/components/learning/LearningGoals";
import { Navbar } from "@/components/navbar/Navbar";
import PricingPlans from "@/components/pricing/PricingPlans";
import Testimonials from "@/components/testimonials/Testimonials";
import Trends from "@/components/top-trends";
import TrendingNow from "@/components/trending/TrendingNow";
import TopTrends from "@/components/trends/TopTrends";
import AICourseRecommender from "@/components/ai-finder/AICourseRecommender";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <AICourseRecommender />
      <SkillsCoursesSection />
      <Companies />
      <CourseSection />
      <LearningGoals />
      <PricingPlans />
      <Testimonials />
      <Trends />
      <TrendingNow />
      <TopTrends />
      <FAQ />
      <Footer />
    </main>
  );
}
