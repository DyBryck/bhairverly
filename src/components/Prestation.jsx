import PropTypes from "prop-types";

const Prestation = ({ image, name, price }) => {
  return (
    <article
      className={`border-secondary h-60 w-5/6 border-4 bg-cover bg-center bg-no-repeat md:h-60 md:max-w-1/3`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center p-2 text-center text-slate-50 uppercase backdrop-blur-[2px] backdrop-brightness-[60%]">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-xl">
          {typeof price === "number" ? price + "€" : price}
        </p>
      </div>
    </article>
  );
};

Prestation.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Prestation;
