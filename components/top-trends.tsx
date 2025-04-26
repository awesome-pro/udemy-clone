import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Trends = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* Text content */}
          <div className="md:w-2/6">
            <div className="mb-8">
              <h1 className="text-4xl leading-tight mb-4">Top trends for the future of work</h1>
              <p className="text-base text-gray-700 mb-2">Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.</p>
            </div>
            
            <Button variant={'outline'} size={'lg'} className="border-primary border-2 text-primary hover:bg-primary/10">
              Get the Report <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          {/* Left side - Images */}
          <div className='md:w-4/6'>
            <Image
              src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
              alt="Teacher"
              className="w-full h-auto object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends
