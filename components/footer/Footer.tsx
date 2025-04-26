'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      {/* Main footer navigation */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Column 1: Certifications by Issuer */}
          <div>
            <h3 className="font-medium mb-4">Certifications by Issuer</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Amazon Web Services (AWS) Certifications</Link></li>
              <li><Link href="#" className="hover:underline">Six Sigma Certifications</Link></li>
              <li><Link href="#" className="hover:underline">Microsoft Certifications</Link></li>
              <li><Link href="#" className="hover:underline">Cisco Certifications</Link></li>
              <li><Link href="#" className="hover:underline">Tableau Certifications</Link></li>
              <li><Link href="#" className="hover:underline">See all Certifications</Link></li>
            </ul>
          </div>

          {/* Column 2: Web Development */}
          <div>
            <h3 className="font-medium mb-4">Web Development</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Web Development</Link></li>
              <li><Link href="#" className="hover:underline">JavaScript</Link></li>
              <li><Link href="#" className="hover:underline">React JS</Link></li>
              <li><Link href="#" className="hover:underline">Angular</Link></li>
              <li><Link href="#" className="hover:underline">Java</Link></li>
            </ul>
          </div>

          {/* Column 3: IT Certifications */}
          <div>
            <h3 className="font-medium mb-4">IT Certifications</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Amazon AWS</Link></li>
              <li><Link href="#" className="hover:underline">AWS Certified Cloud Practitioner</Link></li>
              <li><Link href="#" className="hover:underline">AZ-900: Microsoft Azure Fundamentals</Link></li>
              <li><Link href="#" className="hover:underline">AWS Certified Solutions Architect - Associate</Link></li>
              <li><Link href="#" className="hover:underline">Kubernetes</Link></li>
            </ul>
          </div>

          {/* Column 4: Leadership */}
          <div>
            <h3 className="font-medium mb-4">Leadership</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Leadership</Link></li>
              <li><Link href="#" className="hover:underline">Management Skills</Link></li>
              <li><Link href="#" className="hover:underline">Project Management</Link></li>
              <li><Link href="#" className="hover:underline">Personal Productivity</Link></li>
              <li><Link href="#" className="hover:underline">Emotional Intelligence</Link></li>
            </ul>
          </div>
        </div>

        {/* Second row of footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Column 1: Certifications by Skill */}
          <div>
            <h3 className="font-medium mb-4">Certifications by Skill</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Cybersecurity Certification</Link></li>
              <li><Link href="#" className="hover:underline">Project Management Certification</Link></li>
              <li><Link href="#" className="hover:underline">Cloud Certification</Link></li>
              <li><Link href="#" className="hover:underline">Data Analytics Certification</Link></li>
              <li><Link href="#" className="hover:underline">HR Management Certification</Link></li>
              <li><Link href="#" className="hover:underline">See all Certifications</Link></li>
            </ul>
          </div>

          {/* Column 2: Data Science */}
          <div>
            <h3 className="font-medium mb-4">Data Science</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Data Science</Link></li>
              <li><Link href="#" className="hover:underline">Python</Link></li>
              <li><Link href="#" className="hover:underline">Machine Learning</Link></li>
              <li><Link href="#" className="hover:underline">ChatGPT</Link></li>
              <li><Link href="#" className="hover:underline">Deep Learning</Link></li>
            </ul>
          </div>

          {/* Column 3: Communication */}
          <div>
            <h3 className="font-medium mb-4">Communication</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Communication Skills</Link></li>
              <li><Link href="#" className="hover:underline">Presentation Skills</Link></li>
              <li><Link href="#" className="hover:underline">Public Speaking</Link></li>
              <li><Link href="#" className="hover:underline">Writing</Link></li>
              <li><Link href="#" className="hover:underline">PowerPoint</Link></li>
            </ul>
          </div>

          {/* Column 4: Business Analytics & Intelligence */}
          <div>
            <h3 className="font-medium mb-4">Business Analytics & Intelligence</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Microsoft Excel</Link></li>
              <li><Link href="#" className="hover:underline">SQL</Link></li>
              <li><Link href="#" className="hover:underline">Microsoft Power BI</Link></li>
              <li><Link href="#" className="hover:underline">Data Analysis</Link></li>
              <li><Link href="#" className="hover:underline">Business Analysis</Link></li>
            </ul>
          </div>
        </div>

        {/* Third row of footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Column 1: About */}
          <div>
            <h3 className="font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact us</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Investors</Link></li>
            </ul>
          </div>

          {/* Column 2: Discover Udemy */}
          <div>
            <h3 className="font-medium mb-4">Discover Udemy</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Get the app</Link></li>
              <li><Link href="#" className="hover:underline">Teach on Udemy</Link></li>
              <li><Link href="#" className="hover:underline">Plans and Pricing</Link></li>
              <li><Link href="#" className="hover:underline">Affiliate</Link></li>
              <li><Link href="#" className="hover:underline">Help and Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Udemy for Business */}
          <div>
            <h3 className="font-medium mb-4">Udemy for Business</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Udemy Business</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Accessibility */}
          <div>
            <h3 className="font-medium mb-4">Legal & Accessibility</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Accessibility statement</Link></li>
              <li><Link href="#" className="hover:underline">Privacy policy</Link></li>
              <li><Link href="#" className="hover:underline">Sitemap</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="mt-4 md:mt-0">
              <Link href="/">
                <Image 
                  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" 
                  alt="Udemy Logo" 
                  width={80} 
                  height={28}
                  className="h-7 w-auto"
                />
              </Link>
            </div>
            <p className="text-xs text-gray-300 mt-2 md:mt-0">© 2025 Udemy, Inc.</p>
          </div>

          {/* Language selector and Cookie settings */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm border border-white rounded px-3 py-1.5">
              <Globe size={16} />
              English
            </button>
            <button className="text-sm hover:underline">Cookie settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}