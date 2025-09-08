"use client";

import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../buttons/primary-button";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  subject: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);

      // Send form data to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Reset form after successful submission
      reset();

      // Success notification
      toast.success("Message sent successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Error notification
      toast.error(
        error instanceof Error
          ? error.message
          : "Error sending message. Please try again."
      );
    }
  };

  return (
    <div className="p-4 sm:px-[30px] max-w-[1440px] mx-auto  py-[50px]  sm:py-[70px]">
      <div className="bg-[#0E0E0E] p-4 md:p-[30px] rounded-[15px]">
        <div className="flex flex-col lg:flex-row gap-[20px] sm:gap-[30px]">
          {/* Left Column - Get In Touch */}
          <div className="flex-1 sm:w-1/2">
            <p className="text-[30px] md:text-[64px] sm:leading-[1] tracking-[0em] text-white mb-[20px] sm:mb-[30px] font-instrument-italic">
              Get In Touch
            </p>
            <p className="description max-w-[493px]">
              Interested in specific product? Please indicate the subject of
              your inquiry to be forwarded accordingly. This will help us
              process your request more quickly.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[30px]">
              {/* What can we help you with? */}
              <div className="mb-[20px] sm:mb-[30px]">
                <p className="text-white text-[16px] sm:text-[24px]  mb-[25px] font-instrument-italic">
                  What can we help you with?
                </p>
              </div>

              {/* First Row - Full Name and Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block description mb-[10px]"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Full name must be at least 2 characters",
                      },
                    })}
                    className={`w-full bg-[#181818]  rounded-[5px] h-[42px] text-white placeholder:text-[#141414] focus:outline-none transition-colors px-4 ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#333] focus:border-[#E1251B]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-[12px] mt-[4px]">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block description mb-[10px]"
                  >
                    Mobile*
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Please enter exactly 10 digits",
                      },
                    })}
                    className={`w-full bg-[#181818] h-[42px]  rounded-[5px] text-white placeholder:text-[#141414] focus:outline-none transition-colors px-4 ${
                      errors.mobile
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#333] focus:border-[#E1251B]"
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-[12px] mt-[4px]">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Second Row - Email and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="email"
                    className="block description mb-[10px]"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full bg-[#181818] h-[42px]  rounded-[5px] text-white placeholder:text-[#141414] focus:outline-none transition-colors px-4 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#333] focus:border-[#E1251B]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[12px] mt-[4px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="city" className="block description mb-[10px]">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city", {
                      required: "City is required",
                      minLength: {
                        value: 2,
                        message: "City must be at least 2 characters",
                      },
                    })}
                    className={`w-full bg-[#181818] h-[42px]  rounded-[5px] text-white placeholder:text-[#141414] focus:outline-none transition-colors px-4 ${
                      errors.city
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#333] focus:border-[#E1251B]"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-[12px] mt-[4px]">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block description mb-[10px]"
                >
                  Subject*
                </label>
                <textarea
                  id="subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 10,
                      message: "Subject must be at least 10 characters",
                    },
                  })}
                  rows={4}
                  className={`w-full bg-[#181818] h-[90px]  rounded-[5px] text-white placeholder:text-[#141414] focus:outline-none transition-colors resize-vertical px-4 py-2 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#333] focus:border-[#E1251B]"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-[12px] mt-[4px]">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="bg-[#141414] text-[#BCBCBC] py-2  px-[16px]   text-[14px] sm:text-[16px] leading-[22px] tracking-[0] rounded-full hover:bg-[#3A3A3A] transition-colors duration-200 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <p className="text-left description text-[12px]! max-w-[800px]  sm:mt-[30px] mt-[20px] ">
          *You agree to your data being used and stored so that we can deal with
          the matter concerning you. It will not be passed on to third parties.
          Further information and instructions on how to revoke your consent can
          be found in the privacy policy.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
