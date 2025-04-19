"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Separator } from "../ui/separator";

interface TrendingCategory {
  name: string;
  subcategories: {
    name: string;
    url: string;
    learners: string;
  }[];
}

export function TrendingNow() {
  const categories: TrendingCategory[] = [
    {
      name: "Development",
      subcategories: [
        { name: "Python", url: "#", learners: "47,908,007 learners" },
        { name: "Web Development", url: "#", learners: "14,035,516 learners" },
        { name: "Data Science", url: "#", learners: "7,809,749 learners" },
      ],
    },
    {
      name: "Design",
      subcategories: [
        { name: "Blender", url: "#", learners: "2,921,159 learners" },
        { name: "Graphic Design", url: "#", learners: "4,501,988 learners" },
        { name: "User Experience (UX) Design", url: "#", learners: "2,073,901 learners" },
      ],
    },
    {
      name: "Business",
      subcategories: [
        { name: "PMI Project Management Professional (PMP)", url: "#", learners: "2,576,825 learners" },
        { name: "Microsoft Power BI", url: "#", learners: "4,555,481 learners" },
        { name: "Project Management", url: "#", learners: "4,002,085 learners" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* ChatGPT section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">ChatGPT is a top skill</h3>
            <Link href="#" className="text-[#a435f0] hover:text-[#8710d8] flex items-center mb-2">
              See ChatGPT courses <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
            <p className="text-gray-600 mb-4">4,379,628 learners</p>
            
            <Button variant="outline" className="border-[#a435f0] text-[#a435f0] hover:bg-[#a435f0]/10 w-full">
              Show all trending skills <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {/* Categories */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  <ul className="space-y-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subcategory.url} className="text-[#a435f0] hover:text-[#8710d8] flex items-center">
                          {subcategory.name} <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                        <p className="text-sm text-gray-600">{subcategory.learners}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingNow;
