import Image from 'next/image'
import React from 'react'

function Companies() {
  return (
    <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-bold mb-8">
            Trusted by over 14,400 companies and millions of learners around the world
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-8 md:gap-16">
            <Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" width={120} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen" width={120} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Box" width={80} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp" width={120} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" width={120} height={40} />
          </div>
        </div>
      </section>
  )
}

export default Companies
