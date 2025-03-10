import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image1,
  image2,
  image3,
  image4,
  source_code_link,
}) => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="rounded-lg bg-transparent hover:shadow-lg shadow-gray-400 p-4 transition ease-in delay-200"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-[230px] md:h-[300px] overflow-hidden rounded-sm">
        <img
          src={images[currentImageIndex]}
          alt="project_image"
          className="w-full h-full object-cover rounded-sm transition-all duration-500"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-sm hover:bg-opacity-80 cursor-pointer z-10"
        >
            <ChevronLeft className="text-backgroundcolor w-6 h-6" />
            </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-sm hover:bg-opacity-80 cursor-pointer z-10"
        >
            <ChevronRight className="text-#2F3246 w-6 h-6" />
            </button>

        {/* GitHub Icon */}
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={"https://i.ibb.co/KGBzX2v/github.png"}
              alt="source code"
              className="w-[30px] object-contain bg-black rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Project Name & Description */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-primarytext">{name}</h3>
        <p className="text-sm text-primarytext mt-1">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
