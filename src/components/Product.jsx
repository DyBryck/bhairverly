import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";

const Product = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article
      onClick={() => setModalOpen(true)}
      className={`border-secondary font-corps flex w-full bg-white ${modalOpen ? "" : "cursor-pointer"} items-center border-4 lg:w-2/5`}
    >
      <img src={product.cover} alt={product.name} className="w-1/4" />
      <div className="w-3/4 p-2">
        <h4 className="truncate text-xl md:text-lg">{product.name}</h4>
        <p className="md:text-lg">{product.price}€</p>
      </div>
      {modalOpen && (
        <Modal product={product} closeModal={() => setModalOpen(false)} />
      )}
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
