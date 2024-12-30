/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="grid h-[500px] w-full place-items-center">
      <h1 className="text-3xl mt-2 text-yellow-100 leading-loose">
        Lanre & Tolani
      </h1>

      <h1 className="text-white">Babe swipe the cards!</h1>
      {cards.map((card) => {
        return (
          <>
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          </>
        );
      })}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1735518343/IMG_20241230_003519_826_rijhtw.jpg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1735518344/IMG_20241230_012247_833_j9stai.jpg",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1735518344/IMG_20241230_012244_508_fwxge7.jpg",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1735518344/IMG_20241230_012240_110_xgr84o.jpg",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/drcy6fgto/image/upload/v1735518344/IMG_20241230_003522_653_g3rymh.jpg",
  },
];
