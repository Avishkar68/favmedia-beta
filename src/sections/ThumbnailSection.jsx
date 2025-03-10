import React from "react";
import RollingGallery from "../components/ui/RollingGallery ";

const ThumbnailSection = () => {
  return (
    <div className="w-screen h-[500px] md:min-h-screen  md:px-36">
      <div className=" w-screen md:w-full h-screen">
        <div className="w-full h-[500px] md:min-h-screen flex flex-col items-center justify-center">
          <div className="text-[36px] md:text-[64px] text-primarytext font-bold font-heading">Youtube Thumbnails</div>
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
      </div>
    </div>
  );
};

export default ThumbnailSection;
