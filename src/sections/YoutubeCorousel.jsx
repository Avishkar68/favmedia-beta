import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    videoUrl: "https://www.youtube.com/embed/7LnJCwj5FN0",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    videoUrl: "https://www.youtube.com/embed/5yXGw3Qh5YE",
  },
  
];

const YoutubeCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="md:h-screen text-center flex flex-col items-center justify-center bg-backgroundcolor">
      <div className="w-full text-[36px] md:text-[64px] font-bold py-2 font-heading text-primarytext">
        Youtube videos
      </div>
      <div className="relative w-[90%] max-w-4xl bg-backgroundcolor p-6 rounded-xl shadow-lg">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src={testimonials[index].videoUrl}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-primarytext rounded-full hover:cursor-pointer"
          >
            <ChevronLeft className="text-backgroundcolor w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-primarytext rounded-full hover:cursor-pointer"
          >
            <ChevronRight className="text-#2F3246 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCarousel;
