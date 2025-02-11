import PropTypes from "prop-types";

const HairDresser = ({ name, cover }) => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-2">
      <div className="h-40 w-40 overflow-hidden rounded-full md:h-60 md:w-60">
        <img src={cover} alt={name} className="object-cover" />
      </div>
      <h4 className="font-title text-lg md:text-xl">{name}</h4>
    </div>
  );
};

HairDresser.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default HairDresser;
