import PropTypes from "prop-types";

const NavLink = ({ content, link, isForDesktop }) => {
  return (
    <li>
      <a
        href={link}
        className={
          isForDesktop
            ? "underline-offset-4 transition-all duration-300 hover:text-white hover:underline"
            : ""
        }
      >
        {content}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isForDesktop: PropTypes.bool,
};

export default NavLink;
