"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "How does the 30-day free trial work?",
      answer: "Our 30-day free trial gives you full access to all courses and features. You can start learning immediately without any payment. We'll collect your billing information during registration, but you won't be charged until the trial period ends. You can cancel anytime before the trial ends to avoid any charges.",
      category: "subscription",
    },
    {
      id: "2",
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel during your free trial period, you won't be charged. If you cancel after your trial has ended or during a paid subscription period, you'll continue to have access until the end of your current billing cycle, but you won't be charged again.",
      category: "subscription",
    },
    {
      id: "3",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, and in select countries, we also offer payment through mobile carrier billing and various local payment methods. All payments are securely processed through our payment partners.",
      category: "payment",
    },
    {
      id: "4",
      question: "Are there any refunds if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all subscription plans. If you're not completely satisfied with your experience, you can request a full refund within 30 days of your purchase. Simply contact our customer support team, and they'll process your refund.",
      category: "payment",
    },
    {
      id: "5",
      question: "Can I download courses for offline viewing?",
      answer: "Yes, with our mobile app, you can download courses for offline viewing. This feature is available on both iOS and Android devices. Simply look for the download icon on the course lectures you want to save for offline access. Downloaded content will be available in the 'My Learning' section of the app.",
      category: "courses",
    },
    {
      id: "6",
      question: "How do I get a certificate after completing a course?",
      answer: "Upon completing 100% of a course, you'll automatically receive a certificate of completion. You can access your certificates in the 'Certificates' section of your user profile. These certificates can be downloaded as PDFs, shared on social media, or added to your LinkedIn profile to showcase your new skills.",
      category: "courses",
    },
    {
      id: "7",
      question: "Do courses include practical assignments and projects?",
      answer: "Yes, many of our courses include practical assignments, projects, and coding exercises to help you apply what you've learned. These hands-on activities are designed by industry experts to simulate real-world scenarios and help you build a portfolio of work that demonstrates your skills to potential employers.",
      category: "courses",
    },
    {
      id: "8",
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team 24/7 through multiple channels. Use the 'Help' button in the bottom right corner of any page, email us at support@udemy.com, or use the contact form in the Help Center. For urgent matters, we also offer live chat support during business hours.",
      category: "support",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "subscription", name: "Subscription" },
    { id: "payment", name: "Payment" },
    { id: "courses", name: "Courses" },
    { id: "support", name: "Support" },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const filteredItems = faqItems.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform, courses, and subscription plans.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for questions..."
              className="pl-10 py-6 text-base rounded-xl border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  {openItem === item.id ? (
                    <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                We couldn't find any questions matching your search. Try different keywords or browse all categories.
              </p>
              <Button
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? We're here to help.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
