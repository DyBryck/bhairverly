import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const Carousel = ({ product }) => {
  const array = product.pictures;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = droite, -1 = gauche

  const nextImage = () => {
    setDirection(1);
    setIndex((prev) => (prev === array.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? array.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-[200px] w-[300px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index} // Change l'image quand l'index change
            src={array[index]}
            alt=""
            className="absolute h-full w-full object-cover"
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-12">
        <button onClick={previousImage} className="cursor-pointer">
          Précédent
        </button>
        <button onClick={nextImage} className="cursor-pointer">
          Suivant
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Carousel;
