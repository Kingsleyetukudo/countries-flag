import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchFilter from "./SearchFilter";

function FlagPage({ darkMode }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch the data
    const fetchData = async () => {
      try {
        // Fetch the data using the fetch API
        const response = await fetch("/data.json"); // Replace 'data.json' with your JSON file or API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON response
        const jsonData = await response.json();
        // Set the fetched data to the state

        setData(jsonData);
        console.log(jsonData[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();

    // fetch("http://localhost:3000/1")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data.name);
    //   });
  }, []);
  return (
    <div>
      <SearchFilter darkMode={darkMode} />
      <div className="grid grid-cols-4 gap-12 px-12 py-10">
        {data.map((country, index) => (
          <div
            key={index}
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
            <div className="p-10">
              <h3 className="mb-5 font-bold">{country.name}</h3>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>

            {/* <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

FlagPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default FlagPage;
