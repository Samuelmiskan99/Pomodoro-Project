import PropTypes from 'prop-types'; // Import prop-types

const Button = ({ title, activeClass, _callback }) => {
   return (
      <button
         onClick={_callback}
         className={`min-w-[120px] h-14 px-8 bg-gradient-to-r from-gray-800 to-blue-900 text-white font-bold rounded-full shadow-lg hover:from-gray-700 hover:to-blue-800 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95 ${activeClass}`}>
         {title}
      </button>
   );
};

// Define prop types for the Button component
Button.propTypes = {
   title: PropTypes.string.isRequired,
   activeClass: PropTypes.string,
   _callback: PropTypes.func.isRequired,
};

export default Button;
