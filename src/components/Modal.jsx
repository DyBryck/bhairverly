import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import Carousel from "./Carousel";

const Modal = ({ product, onClose }) => {
  const closeModal = useCallback(() => {
    setTimeout(onClose, 0);
  }, [onClose]);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return (
    <div
      id="modal-background"
      className="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center backdrop-brightness-50"
      onClick={closeModal}
    >
      <div
        className="font-title relative flex h-96 w-96 flex-col items-center justify-center bg-white uppercase"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center">{product.name}</p>
        <Carousel product={product} />
        <button
          className="absolute top-2 right-2 cursor-pointer rounded px-3 py-1"
          onClick={closeModal}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
