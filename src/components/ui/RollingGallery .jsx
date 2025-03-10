import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import thumbnail333_00108058 from "../../assets/thumbnail333_00108058.jpg";
import jothpur from "../../assets/jothpurThumbnail.png"
import health from "../../assets/health.jpg"
import woods from "../../assets/woods.jpg"
import clothes from "../../assets/clothes.jpg"
import yoga from "../../assets/yoga.jpg"
const IMGS = [
  thumbnail333_00108058,
  jothpur,
  health,
  woods,
  clothes,
  yoga,
  thumbnail333_00108058,
  jothpur,
  health,
  woods,
  clothes,
  
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust cylinder width based on screen size
  const cylinderWidth = screenWidth <= 640 ? 800 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.8;
  const radius = cylinderWidth / (2 * Math.PI);

 

  // Framer Motion
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) {
      startInfiniteSpin(rotation.get());
    } else {
      controls.stop();
    }
  }, [autoplay]); // eslint-disable-line react-hooks/exhaustive-deps

  const translateZValue = screenWidth <= 640 ? radius + 124 : radius + 140;
   const imgWidth = screenWidth <= 640 ? 200 : 240; // 200px on mobile, 320px on larger screens
   const imgHeight = screenWidth <= 640 ? 112 : 140; // Maintain 16:9 ratio

  return (
    <div className="relative h-[240px] md:h-[400px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={(_, info) => {
            controls.stop();
            rotation.set(rotation.get() + info.offset.x * dragFactor);
          }}
          onDragEnd={(_, info) => {
            const finalAngle = rotation.get() + info.velocity.x * dragFactor;
            rotation.set(finalAngle);
            if (autoplay) startInfiniteSpin(finalAngle);
          }}
          onMouseEnter={() => autoplay && pauseOnHover && controls.stop()}
          onMouseLeave={() => autoplay && pauseOnHover && startInfiniteSpin(rotation.get())}
          animate={controls}
          onUpdate={(latest) => typeof latest.rotateY === "number" && rotation.set(latest.rotateY)}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
         {images.map((url, i) => (
  <div
    key={i}
    className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]"
    style={{
      width: `${faceWidth}px`,
      transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${translateZValue}px)`,
    }}
  >
    <img
      src={url}
      alt="gallery"
      className="pointer-events-none rounded-[10px] border-[2px] border-white object-cover 
                 transition-transform duration-300 ease-out group-hover:scale-105"
      style={{
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
      }}
    />
  </div>
))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
