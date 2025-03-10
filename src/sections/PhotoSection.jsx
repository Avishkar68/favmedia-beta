import React from "react";
import CircularGallery from "../components/ui/CircularGallery ";

const PhotoSection = () => {
  return (

      <div style={{ height: "600px", position: "relative" }} className="mb-40">
        <CircularGallery bend={3} textColor="#2F3246" borderRadius={0.05} />
      </div>
  );
};

export default PhotoSection;
