'use client'

import React from "react";
import Image from "next/image";
import SkillChart from "@/component/Chart";
import ProjectList from '@/data/home/projects.json'
import SocialIcon from '@/data/home/socialIcon.json'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sitePrimaryColor py-16 px-5 text-center">
        <div className="container mx-auto">
          <div className="rounded-full w-fit bg-siteText p-5 mx-auto mb-12">
            <Image src="/images/profile.png" alt="profileImage" width={150} height={150} />
          </div>
          <h4 className="siteNameHeading sitepoppinsfont mb-6">Hi, I’m Rizwan 🤝</h4>
          <h1 className="lg:siteHeroHeading siteInterfont max-w-xl mx-auto text-center mb-8 mb:text-2xl text-4xl text-[#f2f2f2]">
            Crafting Scalable Web Applications, Software, & Automation Solutions
          </h1>
          <button className="bg-siteSecondaryColor rounded-md text-lg text-white py-3 px-6 tracking-wide">
            View My Work
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-sitePrimaryColor py-16 px-5 text-center">
        <div className="container mx-auto max-w-3xl">
          <h3 className="siteSectionHeading mb-6">Our Mission</h3>
          <p className="text-lg text-white leading-7 mb-6">
            We believe that every small business deserves access to high-quality technology without breaking the bank. 
            Our mission is to bridge the gap between technology and business growth, helping entrepreneurs establish 
            a strong online presence and streamline operations.
          </p>
          <p className="text-lg text-white leading-7">
            Whether you need a custom website, a powerful web application, or automation for your business, we’re here to help. 
            <span className="font-extrabold"> 📩 Get in Touch Today </span> and take your business to the next level!
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-sitePrimaryColor py-16 px-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 text-white">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/working.png" alt="profileImage" width={350} height={400} className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="siteSectionHeading mb-6">About Us</h3>
            <p className="text-lg leading-7 mb-6">
              We specialize in crafting high-quality web applications, websites, and custom software solutions designed 
              to help small entrepreneurs thrive in the digital world.
            </p>
            <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
            <ul className="space-y-4 text-lg">
              <li>✅ <strong>Custom Solutions:</strong> Tailored software and web applications for your needs.</li>
              <li>✅ <strong>Entrepreneur-Focused:</strong> Budget-friendly solutions for small businesses.</li>
              <li>✅ <strong>Scalable & Future-Proof:</strong> Built to grow with your business.</li>
              <li>✅ <strong>SEO & Performance Optimized:</strong> Fast, search-friendly solutions.</li>
              <li>✅ <strong>Reliable Support & Maintenance:</strong> Ongoing technical support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack */}
      <section className="bg-sitePrimaryColor py-16 text-center">
        <div className="container mx-auto">

        <h3 className="siteSectionHeading mb-6">Skills & Tech Stack</h3>
        <div className="flex justify-center px-5">
          <SkillChart />
        </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-sitePrimaryColor px-5 text-center py-[80px]">
        <div className="container mx-auto">
        <h3 className="siteSectionHeading mb-8">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectList?.ProjectDetails?.map((data, index) => (
            <div key={index} className="border border-siteSecondaryColor rounded-lg overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image src={`/images/works/${data?.image}.png`} alt={data?.title} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="p-5 text-white">
                <h2 className="text-xl font-bold mb-2">{data?.title}</h2>
                <p className="text-lg">{data?.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-siteSecondaryColor py-[80px] px-5 text-center">
        <h1 className="text-2xl font-semibold text-white mb-6">Let&apos;s Work Together</h1>
        <p className="text-lg text-white mb-8">Got a project in mind? Let&apos;s connect!</p>
        <div className="flex flex-col md:flex-row justify-center gap-3 max-w-md mx-auto bg-sitePrimaryColor p-4 rounded-lg">
          <input type="email" placeholder="Your email..." className="bg-transparent outline-none text-white px-4 py-2 w-full" />
          <button className="bg-siteSecondaryColor py-2 px-4 rounded-md text-white">Let&apos;s Connect</button>
        </div>
        <p className="text-lg text-white mt-8">Stay Connected – Let&apos;s Innovate and Collaborate!</p>
        <div className="flex justify-center gap-6 mt-6">
          {SocialIcon.SocialIcon.map((data, index) => (
            <Image key={index} src={`/images/icon/${data?.icon}.svg`} alt="socialIcon" width={24} height={24} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
