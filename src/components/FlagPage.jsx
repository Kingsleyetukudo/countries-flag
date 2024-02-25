import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
// import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";

function FlagPage({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCountries = countries.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchCountry.toLowerCase());
    const categoryMatch = selectedCategory
      ? item.region.toLowerCase() === selectedCategory
      : true;
    return searchMatch && categoryMatch;
  });
  useEffect(() => {
    localStorage.setItem("myData", filteredCountries);
    console.log(filteredCountries);
  }, [filteredCountries]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setCountries(jsonData);
        console.log(jsonData[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <SearchFilter darkMode={darkMode} /> */}
      <div className="flex justify-between sm:flex-col gap-8 px-12 sm:px-4 pt-10">
        <div
          className={
            darkMode
              ? "flex items-center gap-4 shadow-md px-5 py-3 font-newFont bg-dme text-lmtne w-1/3 sm:w-full rounded-md"
              : "flex items-center gap-4 shadow-md px-5 py-3 font-newFont bg-lmtne text-lmt w-1/3 sm:w-full rounded-md"
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

          <input
            type="text"
            placeholder="Search for a country"
            className="outline-none bg-transparent w-full"
            value={searchCountry}
            onChange={handleSearchChange}
            // onKeyDown={sortItems}
          />
        </div>

        <select
          className={
            darkMode
              ? " shadow-md w-60 sm:w-fit p-2 outline-none font-newFont bg-dme text-lmtne  rounded-md border-none"
              : " shadow-md p-2 outline-none font-newFont bg-lmtne text-lmt w-60 sm:w-fit rounded-md"
          }
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Filter by Region</option>
          <option value="africa" className="bg-transparent">
            Africa
          </option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-12 px-12 py-10">
        {filteredCountries.map((country, index) => (
          <Link key={index} to={`/countryDetails/${index}`}>
            <div
              className={
                darkMode
                  ? "grid grid-rows-2 bg-dme text-lmtne shadow-md rounded-md"
                  : "grid grid-rows-2 bg-lmtne text-lmt shadow-md rounded-md"
              }
            >
              <div className=" rounded-md">
                <img
                  src={country.flag}
                  alt=""
                  className="object-cover h-full w-full rounded-t-md"
                />
              </div>
              <div className="p-10 sm:p-5">
                <h3 className="mb-5 font-bold">{country.name}</h3>
                <p>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

FlagPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default FlagPage;
