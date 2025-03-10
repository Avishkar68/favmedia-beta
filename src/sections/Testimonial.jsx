import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "framer-motion/client";

const testimonials = [
    {
      name: "John Doe",
      feedback: "Absolutely amazing video editing! The transitions, effects, and pacing made my content look professional and engaging. Highly recommended!",
      position: "Content Creator",
    },
    {
      name: "Jane Smith",
      feedback: "Incredible work on both graphics and video! The designs were eye-catching, and the edits were smooth and professional. Will definitely work with you again!",
      position: "Marketing Manager",
    },
    {
      name: "Michael Brown",
      feedback: "Exceeded all expectations! The photos were stunning, the video edits were cinematic, and the overall creativity brought my brand to life!",
      position: "Founder",
    },
    {
      name: "Emily White",
      feedback: "Outstanding work in photography, video editing, and content creation! Your creativity and attention to detail truly made my brand stand out.",
      position: "Influencer & Business Owner",
    },
  ];
  
export default function Testimonial() {
  return (
    <div className="text-center mt-40 md:px-20 pb-16">
      <div className="w-full text-[36px] md:text-[64px] font-bold py-2 font-heading text-primarytext">
        Feedbacks from our previous clients
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 w-full md:max-w-4xl mx-auto justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-lg rounded-sm p-6 text-center transition ease-in font-semibold"
          >
            <p className="text-primarytext italic">"{testimonial.feedback}"</p>
            <p className="text-sm text-primarytext font-extrabold">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}