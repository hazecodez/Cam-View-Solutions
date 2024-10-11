import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ link, name }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      data-aos="flip-up"
      className="px-5 py-3 border border-blue-500 text-blue-500 font-medium my-14 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
