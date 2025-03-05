'use client'

import Link from "next/link"
import Image from "next/image"
import SocialIcon from '@/data/home/socialIcon.json'
import {useForm,SubmitHandler} from 'react-hook-form'
import { useState } from "react"
// import sendData from '@/component/footer/api/sendEmail'



export function Footer() {
  type Inputs = {
    email:string;
    }

    // States
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors,isValid},trigger,reset } = useForm<Inputs>(
    {
      defaultValues:{email:""},
    }
  );
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/sendEmail', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: 
        JSON.stringify({ email: data?.email }),
      });
  
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Something went wrong");
  
      reset();
      setSuccessAlert(true);
      setTimeout(() => setSuccessAlert(false), 3000);
    } catch (error) {
      alert(error)
      setErrorMessage(`Failed to send email: ${error}.`);
      console.error("Error:", error);
    } finally {
      setFormLoading(false);
    }
  
  }

    return(
        <>
        {/* Contact Section */}
      <section className="bg-siteSecondaryColor py-[40px] md:py-[80px] px-5 text-center" id="Contact">
        <div className="container mx-auto p-2 md:px-24">
        <h2 className="text-2xl font-semibold text-white mb-6">Let&apos;s Work Together</h2>
        <p className="text-lg text-white mb-8">Got a project in mind? Let&apos;s connect!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row justify-center gap-3 max-w-md mx-auto bg-sitePrimaryColor p-4 rounded-lg">
          <input type="email" placeholder="email@address.com" className="bg-transparent outline-none text-white px-4 py-2 w-full"  {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        onBlur={() => trigger("email")}
        onInput={() => {
          if (errors?.email) trigger("email");
        }} />
          <button type="submit" className="bg-siteSecondaryColor py-2 px-4 rounded-md text-white" disabled={!isValid || formLoading }>{formLoading ? "Submitting..." :"Let's Connect"}</button>
        </div>
        {successAlert && <p className="text-[14px] text-green-500">{successAlert}</p> }
        {errors.email && <p className="text-[18px] text-red-500 ">{errorMessage}</p>}
        </form>
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