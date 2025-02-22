'use client'

import Link from "next/link"
import Image from "next/image"
import SocialIcon from '@/data/home/socialIcon.json'


export function Footer() {
    return(
        <>
        {/* Contact Section */}
      <section className="bg-siteSecondaryColor py-[40px] md:py-[80px] px-5 text-center">
        <div className="container mx-auto p-2 md:px-24">
        <h2 className="text-2xl font-semibold text-white mb-6">Let&apos;s Work Together</h2>
        <p className="text-lg text-white mb-8">Got a project in mind? Let&apos;s connect!</p>
        <div className="flex flex-col md:flex-row justify-center gap-3 max-w-md mx-auto bg-sitePrimaryColor p-4 rounded-lg">
          <input type="email" placeholder="Your email..." className="bg-transparent outline-none text-white px-4 py-2 w-full" />
          <button className="bg-siteSecondaryColor py-2 px-4 rounded-md text-white">Let&apos;s Connect</button>
        </div>
        <div className="siteDivider ">OR</div>
        <Link href="tel:+919321983228" className="siteContactLink">Contact:- +91-9321983228</Link>
        <p className="text-lg text-white mt-8">Stay Connected – Let&apos;s Innovate and Collaborate!</p>
        <div className="flex justify-center gap-6 mt-6">
          {SocialIcon.SocialIcon.map((data, index) => (
            <div key={index}>
            <Link href={data.href} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
            <Image src={`/images/icon/${data?.icon}.svg`} alt="socialIcon" width={24} height={24} />
            </a>
            </Link>
            </div>
          ))}
        </div>
        </div>
      </section>
        </>
    )
}