import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onActiveCardChange,
  isPlaying,
  isMuted,
}) {
  const [cards, setCards] = useState(cardsData);
  const videoRefs = useRef([]);
  const [activeReelId, setActiveReelId] = useState(cards[cards.length - 1]?.id);

  useEffect(() => {
    if (onActiveCardChange && cards.length) {
      const newTopCardId = cards[cards.length - 1].id;
      if (newTopCardId !== activeReelId) {
        setActiveReelId(newTopCardId);
        onActiveCardChange(newTopCardId); // ✅ Prevent infinite loop
      }
    }
  }, [cards, onActiveCardChange, activeReelId]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const isTopCard = index === cards.length - 1;
        if (isTopCard) {
          isPlaying ? video.play() : video.pause();
          video.muted = isMuted;
        } else {
          video.pause();
          video.muted = true;
        }
      }
    });
  }, [isPlaying, isMuted, cards]);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden  border-amber-50 border-2"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={card.img}
                className="w-full h-full object-cover pointer-events-none"
                autoPlay={false} // Default to paused
                loop
                playsInline
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
