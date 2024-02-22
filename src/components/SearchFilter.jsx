import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function SearchFilter({ darkMode }) {
  return (
    <div className="flex justify-between px-12 pt-10">
      <div
        className={
          darkMode
            ? " flex items-center gap-4 shadow-md px-5 py-3 font-newFont bg-dme text-lmtne w-1/3 rounded-md"
            : "flex items-center gap-4 shadow-md px-5 py-3 font-newFont bg-lmtne text-lmt w-1/3 rounded-md"
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

        <input
          type="text"
          placeholder="Search for a country"
          className="outline-none bg-transparent w-full"
        />
      </div>

      <select
        className={
          darkMode
            ? " shadow-md w-60 p-2 outline-none font-newFont bg-dme text-lmtne  rounded-md border-none"
            : " shadow-md p-2 outline-none font-newFont bg-lmtne text-lmt w-60 rounded-md"
        }
      >
        <option>Filter by Region</option>
        <option value="africa" className="bg-transparent">
          Africa
        </option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

SearchFilter.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default SearchFilter;
