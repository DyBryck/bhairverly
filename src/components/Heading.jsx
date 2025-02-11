import PropTypes from "prop-types";

const Heading = ({ title, borderColor }) => {
  return (
    <div className="-mt-[1px] flex flex-col items-center justify-center gap-4 pt-4 md:gap-8">
      <div className={`h-0.5 w-1/2 ${borderColor}`}></div>
      <h2 className="font-title text-center text-xl font-bold uppercase md:text-2xl">
        {title}
      </h2>
      <div className={`h-0.5 w-1/2 ${borderColor}`}></div>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default Heading;
