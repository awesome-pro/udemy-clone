import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Udemy Business</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Teach on Udemy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Get the app</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help and Support</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Affiliate</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Cookie settings</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sitemap</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Accessibility statement</Link></li>
            </ul>
          </div>
          <div>
            <Button variant="outline" size="sm" className="mb-4 text-white border-white hover:bg-gray-800">
              <Globe className="h-4 w-4 mr-2" />
              <span>English</span>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="font-bold text-xl mb-4 md:mb-0">udemy</div>
          <div className="text-sm text-gray-400">© 2025 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
}