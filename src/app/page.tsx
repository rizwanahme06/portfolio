'use client'

import React from "react";
import Image from "next/image";
import SkillChart from "@/component/Chart";
import ProjectList from '@/data/home/projects.json'
import SocialIcon from '@/data/home/socialIcon.json'

const Home = () => {
  return (
    <>
      <section className="bg-sitePrimaryColor py-[80px]">
        <div className="container mx-auto text-center ">

          {/* Profile Image */}
          <div className="rounded-full w-fit bg-siteText p-[20px] mx-auto mb-[50px]">
            <Image src="/images/profile.png" alt="profileImage" width={150} height={150} />
          </div>

          {/* Heading */}
          <h4 className="siteNameHeading sitepoppinsfont mb-[50px]">Hi, I’m Rizwan 🤝</h4>

          {/* Hero Text */}
          <h1 className="siteHeroHeading siteInterfont max-w-[600px] mx-auto text-center mb-[65px]">
            Crafting Scalable Web Applications, Software, & Automation Solutions
          </h1>
          
          {/* Button to show work */}
          <button className="bg-siteSecondaryColor rounded-[10px] font-[18px] sitepoppinsfont text-[#f2f2f2] py-[20px] px-[40px] tracking-[5%]">View My Work</button>
        </div>
      </section>
      <section className="bg-sitePrimaryColor py-[80px]">
        <div className="container mx-auto items-start text-center p-20">
          {/* Heading */}
          <h3 className="siteSectionHeading mb-[40px]">Our Mission</h3>
          <p className=" siteInterfont text-[18px] font-medium text-[#f2f2f2] siteInterfont max-w-[795px] tracking-[7%] leading-[30px] mb-[40px] mx-auto">We believe that every small business deserves access to high-quality technology without breaking the bank. Our mission is to bridge the gap between technology and business growth, helping entrepreneurs establish a strong online presence and streamline operations.</p>
          <p className="text-[18px] font-medium text-[#f2f2f2] siteInterfont max-w-[795px] tracking-[7%] leading-[30px] mx-auto">Whether you need a custom website, a powerful web application, or automation for your business, we’re here to bring your ideas to life. Let’s create digital solutions that work for you!
            <span className="font-extrabold">
          📩 Get in Touch Today </span> and take your business to the next level!</p>
        </div>
      </section>

    <section className="bg-sitePrimaryColor py-[80px]">
      <div className="container mx-auto text-center">
        <h3 className="siteSectionHeading mb-[40px]">About Us</h3>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:text-left gap-28 p-12 text-[#f2f2f2]">
          {/* Left Image Placeholder */}
        <div className="items-center flex justify-between p-10 rounded-[20px] bg-siteSecondaryColor">
        <Image src="/images/working.png" alt="profileImage" width={457} height={504} />
        </div>
      {/* Right-section */}
        <div className="w-full md:w-1/2">
        <p className="text-[20px] siteInterfont leading-[30px] tracking-[7%] mb-[40px] text-left">
            We specialize in crafting high-quality web applications, websites, and custom software solutions 
            designed to help small entrepreneurs thrive in the digital world. With expertise in modern technologies 
            and automation, we empower businesses by providing cost-effective, scalable, and user-friendly solutions 
            that drive growth and efficiency.
          </p>
          <div className="why-choose">
          <h3 className="siteSectionHeading mb-[30px]">Why Choose Us?</h3>
          <ul className="space-y-[30px]">
            <li className="text-[20px] font-medium siteInterfont">✅ <span className="font-semibold">Custom Solutions:</span> Tailored software and web applications to meet your unique business needs.</li>
            <li className="text-[20px] font-medium siteInterfont">✅ <span className="font-semibold">Entrepreneur-Focused:</span> We understand the challenges of small businesses and provide solutions that fit your budget.</li>
            <li className="text-[20px] font-medium siteInterfont">✅ <span className="font-semibold">Scalable & Future-Proof:</span> Our development approach ensures your digital presence grows with your business.</li>
            <li className="text-[20px] font-medium siteInterfont">✅ <span className="font-semibold">SEO & Performance Optimized:</span> Websites and applications built for speed, search visibility, and user engagement.</li>
            <li className="text-[20px] font-medium siteInterfont">✅ <span className="font-semibold">Reliable Support & Maintenance:</span> Ongoing technical support to keep your business running smoothly.</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="bg-sitePrimaryColor py-[80px]">
      <div className="container mx-auto items-center text-center">
      <h3 className="siteSectionHeading mb-[40px]">Skills & Tech Stack</h3>
        <div className="flex justify-center px-[100px]">
      <SkillChart/>
        </div>
      </div>
    </section>

    <section className="bg-sitePrimaryColor py-[80px]">
  <div className="container mx-auto text-center">
    <h3 className="siteSectionHeading mb-[60px]">Projects</h3>

    <div className="grid grid-cols-12 gap-[40px] m-5">
      {ProjectList?.ProjectDetails?.map((data,index)=>(

<div key={index} className="col-span-4 border border-siteSecondaryColor rounded-[20px] ">
<div className="relative w-full aspect-[4/3]">
  <Image
    src={`/images/works/${data?.image}.png`}
    alt="handgame"
    fill
    objectFit="cover"
    sizes="100%"
    className="object-contain rounded-lg drop-shadow-lg"
  />
</div>
<div className="details text-center text-[#f2f2f2] px-[30px] p-5 mt-4">
  <h2 className="text-[24px] leading-3 font-bold mb-[20px]">{data?.title}</h2>
  <p className="text-[20px] leading-5 font-semibold">{data?.subtitle}</p>
</div>
</div>
      ))}
    </div>
  </div>
</section>

    <section className="bg-siteSecondaryColor py-[80px]">
      <div className="container mx-auto p-[40px] text-center">
        <h1 className="sitepoppinsfont text-[24px] font-semibold leading-auto mb-[30px] text-[#f2f2f2]">Let&apos;s Work Together</h1>
        <p className="text-[20px] font-medium siteInterfont text-[#f2f2f2] mb-[40px]">Got a project in mind? Let&apos;s connect!</p>
        <div className="email-enter bg-sitePrimaryColor flex justify-between gap-3 max-w-[502px] mx-auto p-[4px] pl-[40px] mb-[40px]">
          <input type="email" name="email" id="email" placeholder="Your email ..." className="outline-none bg-transparent placeholder:text-[#999797] tracking-[7%]" />
          <button className="bg-siteSecondaryColor py-[15px] px-[20px] rounded-[50px] text-[#f6f6f6]" type="submit">Let&apos;s connect</button>
        </div>
        <p className="text-[20px] font-medium siteInterfont text-[#f2f2f2] mb-[40px]">Stay Connected – Let&apos;s Innovate and Collaborate!</p>
        <div className="flex gap-[40px] mx-auto w-fit">
{SocialIcon.SocialIcon.map((data,index)=>(

  <Image
  key={index}
  src={`/images/icon/${data?.icon}.svg`}
  alt="socialIcon"
  width={24}
  height={24}
  />
))}
        </div>
      </div>
    </section>

    </>
  );
};

export default Home;
