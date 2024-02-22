import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Moon } from "react-ionicons";

function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={
        darkMode
          ? "shadow-md px-12 py-5 font-newFont bg-dme text-lmtne"
          : "shadow-md px-12 py-5 font-newFont bg-lmtne text-lmt"
      }
    >
      <div className="flex justify-between items-center">
        <p
          className={
            darkMode ? "text-xl font-extrabold" : "text-lg font-extrabold"
          }
        >
          Where in the world?
        </p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon="fa-solid fa-moon" />
          {/* <Moon /> */}

          <p className="font-semibold ">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
