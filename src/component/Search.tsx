// import { useState } from "react";
// import { motion } from "framer-motion";
// import Button from "@/components/button/Button";
// import { SubmitHandler, useForm } from "react-hook-form";
// import Image from "next/image";

export function GetStartSection() {
//   type RequestDemoFormType = {
//     email: string;
//   };

  // States
//   const [formLoading, setFormLoading] = useState<boolean>(false);
//   const [successAlert, setSuccessAlert] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form Hooks
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     trigger,
//     reset,
//   } = useForm<RequestDemoFormType>({
//     defaultValues: { email: "" },
//   });

//   const onSubmit: SubmitHandler<RequestDemoFormType> = async (data) => {
//     setFormLoading(true);
//     setErrorMessage(null);

//     try {
//       const formData = new FormData();
//       formData.append("from", data?.email);
//       formData.append("to", "neha@centraldatastorage.com");
//       formData.append("name", `Get Started email id`);
//       formData.append("content", data?.email);
//       formData.append("action", "email of website user");

//       const response = await fetch("https://sandbox.unison-bdr.com:8443", {
//         method: "POST",
//         headers: {
//           "X-API-Token": process.env.SITE_API_TOKEN!,
//           Cookie: process.env.SITE_COOKIE!,
//         },
//         body: formData,
//       });

//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message || "Something went wrong");

//       reset();
//       setSuccessAlert(true);
//       setTimeout(() => setSuccessAlert(false), 2000);
//     } catch (error) {
//       setErrorMessage("Failed to send email. Please try again.");
//       console.error("Error:", error);
//     } finally {
//       setFormLoading(false);
//     }
//   };

  return (
    <div
      className="flex rounded-full  bg-sitePrimaryColor p-[4px] mt-[40px] mb-[70px] max-w-[480px] mx-auto items-center gap-x-[8px] relative"
    >
      {/* Email Input */}
      <input
        type="email"
        placeholder="Your email"
        className="w-full bg-transparent text-[#f3f3f3] placeholder:text-[#cac9c9f8] outline-none rounded-full grow pl-[16px] h-[17px]"
      />

      {/* Submit Button */}
     <button type="submit" className="bg-siteSecondaryColor buttonClass w-fit"> Let’s connect</button>
    </div>
  );
}
