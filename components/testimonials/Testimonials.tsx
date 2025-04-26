"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Testimonial {
  id: string;
  initials: string;
  name: string;
  quote: string;
  course: {
    name: string;
    url: string;
  };
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "ds",
      initials: "DS",
      name: "Diksha S",
      quote: "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.",
      course: {
        name: "Business Intelligence (BI)",
        url: "#",
      }
    },
    {
      id: "cb",
      initials: "CB",
      name: "Chethan B",
      quote: "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.",
      course: {
        name: "Go (golang) course",
        url: "#",
      }
    },
    {
      id: "bk",
      initials: "BK",
      name: "Batchu K",
      quote: "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.",
      course: {
        name: "Java course",
        url: "#",
      }
    },
    {
      id: "ak",
      initials: "AK",
      name: "Ankit K",
      quote: "I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance their skills in this field.",
      course: {
        name: "Web Development course",
        url: "#",
      }
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">See what others are achieving through learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-xl border border-black">
              <div className="mb-4 text-4xl">"</div>
              <p className="text-gray-700 mb-4">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-800 mr-3">
                  {testimonial.initials}
                </div>
                <div>
                  <h5 className="font-medium">{testimonial.name}</h5>
                </div>
              </div>
              
              <Link 
                href={testimonial.course.url}
                className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
              >
                View this {testimonial.course.name}
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;