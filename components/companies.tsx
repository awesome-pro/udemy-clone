import Image from 'next/image'
import React from 'react'

function Companies() {
  return (
    <section className="py-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl mb-8">
            Trusted by over 14,400 companies and millions of learners around the world
          </p>
          <div className="grid grid-cols-3 md:grid-cols-7 justify-center items-center gap-8 md:gap-16">
            <Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq" width={120} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen" width={60} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Box" width={80} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp" width={120} height={40} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite" width={120} height={40} />
            <Image src="https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals" alt="IBM" width={120} height={40} />
            <Image src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals" alt="IBM" width={60} height={40} />
          </div>
        </div>
      </section>
  )
}

export default Companies
