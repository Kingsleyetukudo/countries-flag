import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={
        darkMode
          ? "shadow-md px-12 py-5 sm:px-4 font-newFont bg-dme text-lmtne"
          : "shadow-md px-12 py-5 sm:px-4 font-newFont bg-lmtne text-lmt"
      }
    >
      <div className="flex justify-between items-center">
        <p
          className={
            darkMode
              ? "text-xl sm:text-base sm:font-medium font-extrabold"
              : "text-xl sm:text-base sm:font-medium font-extrabold"
          }
        >
          Where in the world?
        </p>
        <div
          className="flex items-center gap-2 sm:text-xs cursor-pointer"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon="fa-solid fa-moon" />

          <p className="font-semibold ">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default NavBar;
