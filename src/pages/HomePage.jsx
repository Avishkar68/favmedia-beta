import RotatingText from "../components/ui/RotatingText";
import PhotoSection from "../sections/PhotoSection";
import ReelsSection from "../sections/ReelsSection";
import Testimonial from "../sections/Testimonial";
import ThumbnailSection from "../sections/ThumbnailSection";
import YoutubeCarousel from "../sections/YoutubeCorousel";
import ProjectCard from "../sections/WebsitesSection";
import projects from "../data/project.js";
import { motion } from "framer-motion";
import webvid3 from "../assets/webvid3.mp4";

const HomePage = () => {
  return (
    <div>
      <div className="w-full md:h-screen flex items-center justify-center  mb-[80px]">
        <video
          src={webvid3}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <ReelsSection />
      <ThumbnailSection />
      <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold text-primarytext ">
        Our Clicks
      </div>
      <PhotoSection />
      <YoutubeCarousel />
      <div className="mt-40">
        <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold text-primarytext ">
          Websites we build
        </div>
        <div className="min-h-[80vh] w-[90vw] mx-auto p-[3vw] flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      <Testimonial />
    </div>
  );
};

export default HomePage;
