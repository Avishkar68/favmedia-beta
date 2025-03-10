import React, { useState } from "react";
import Stack from "../components/ui/Stack";
import chodudharyfinalll from "../assets/chodudharyfinalll.mp4";
import free from "../assets/free.mp4";
import Mumbai from "../assets/Mumbai.mp4";
import laptopFinal from "../assets/laptopvalafinallll.mp4";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { GoMute, GoUnmute } from "react-icons/go";

const ReelsSection = () => {
  const reels = [
    {
      id: 1,
      img: chodudharyfinalll,
      title: "Capturing the beauty of rajasthan",
      description: "A glimpse of days spent well in rajanthan ",
      software: "DaVinci Resolve",
      engagement: { views: "2K", likes: "74", engagementRate: "10%" },
    },
    {
      id: 2,
      img: free,
      title: "The urge to leave everything behind...",
      description: "This portrays the urge to leave. ",
      software: "DaVinci Resolve",
      engagement: { views: "355", likes: "16", engagementRate: "11%" },
    },
    {
      id: 3,
      img: laptopFinal,
      title: "The transition we all need ",
      description: "Showcasing the transition from work life to peace.",
      software: "Premere pro ,DaVinci Resolve ",
      engagement: { views: "980", likes: "51", engagementRate: "13%" },
    },
    {
      id: 4,
      img: Mumbai,
      title: "Life of Mumbaikars",
      description: "Portrays the strange but fun life of mumbai",
      software: "DaVinci Resolve , Premere pro",
      engagement: { views: "314", likes: "12", engagementRate: "9%" },
    },
  ];

  const [activeReel, setActiveReel] = useState(reels[reels.length - 1]); // Last reel is initially top
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleActiveReelChange = (topReelId) => {
    const newActiveReel = reels.find((reel) => reel.id === topReelId);
    if (newActiveReel) setActiveReel(newActiveReel);
  };

  return (
    <div className="w-screen min-h-screen md:px-36 mb-60 md:mb-0">
      <div className=" w-screen md:w-full h-screen text-center">
        <div className="w-full text-primarytext text-[36px] md:text-[64px] font-bold py-2 font-heading">
          Short Form Content
        </div>
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around">
          <div >
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 270, height: 480 }}
              cardsData={reels}
              onActiveCardChange={handleActiveReelChange} // Update active reel
              isPlaying={isPlaying} // Pass state to control playback
              isMuted={isMuted} // Pass mute state
            />
            <div className=" h-[50px] rounded-lg mt-4 flex items-center justify-center space-x-4">
              <button
                className="px-4 py-1 text-2xl font-extrabold text-primarytext rounded-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <IoMdPause /> : <IoMdPlay /> }
              </button>
              <button
                className="px-4 py-1 text-2xl font-extrabold text-primarytext rounded-lg"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <GoUnmute /> : <GoMute />}
              </button>
            </div>
          </div>
          <div className="font-basicfont p-4  flex flex-col gap-10 text-left">
            <span>
              <h6 className="text-sm text-primarytext">TITLE</h6>
              <h2 className="text-2xl text-primarytext ">{activeReel.title}</h2>
            </span>
            <span>
              <h6 className="text-sm text-primarytext">DESCREPTION</h6>
              <p className="text-2xl text-primarytext">{activeReel.description}</p>
            </span>

            <span>
              <h6 className="text-sm text-primarytext ">SOFTWARE</h6>
              <p className="text-2xl text-primarytext">{activeReel.software}</p>
            </span>

            {/* <p className="text-xl text-gray-600">{activeReel.engagement.engagementRate}</p> */}
            <span>
              <h6 className="text-sm text-primarytext">VIEWS</h6>
              <p className="text-2xl text-primarytext">
                {activeReel.engagement.views}
              </p>
            </span>

            <span>
              <h6 className="text-sm text-primarytext">LIKES</h6>
              <p className="text-2xl text-primarytext">
                {activeReel.engagement.likes}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
