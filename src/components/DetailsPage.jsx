import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function DeatilsPage({ darkMode }) {
  const [country, setCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/.netlify/functions/getCountries/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setCountry(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/.netlify/functions/getCountries");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setCountries(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-12 sm:px-6 flex flex-col">
      <Link
        to="/"
        className={
          darkMode
            ? "rounded-md mb-12 px-8 py-2 shadow-3xl bg-dme text-lmtne w-fit"
            : "rounded-md mb-12 px-8 py-2 shadow-3xl bg-lmbg text-lmt w-fit"
        }
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back
      </Link>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-6 items-center">
        <div className="w-full">
          <img
            src={country.flag && country.flag}
            alt={country.name}
            className="w-full"
          />
        </div>
        <div
          className={darkMode ? "text-lmtne sm:w-full" : "text-lmt sm:w-full"}
        >
          <h1 className="text-3xl font-extrabold pb-6 sm:p">{country.name}</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population && country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain &&
                  country.topLevelDomain.map((domain, index) => (
                    <span key={index}>{domain}</span>
                  ))}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {country.currencies &&
                  country.currencies.map((cur, index) => (
                    <span key={index}>
                      {index > 0 && ", "}
                      {cur.name}
                    </span>
                  ))}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {country.languages &&
                  country.languages.map((lang, index) => (
                    <span key={index}>
                      {index > 0 && ", "}
                      {lang.name}
                    </span>
                  ))}
              </p>
            </div>
          </div>
          <div className="flex lg:items-center sm:flex-col mt-12 sm:mt-8 gap-2">
            <p className="font-semibold lg:w-1/3">Border Countries:</p>
            <div className=" flex lg:flex-wrap gap-2 sm:flex-wrap">
              {country.borders &&
                country.borders.map((border) =>
                  countries.map((t) =>
                    t.alpha3Code === border ? (
                      <div key={t.id}>
                        <Link
                          to={`/countryDetails/${t.id}`}
                          className={
                            darkMode
                              ? "text-lmtne shadow-md px-2 py-1 rounded-md bg-dme"
                              : "text-lmt shadow-md px-2 py-1 rounded-md bg-lmtne"
                          }
                        >
                          <span>{t.name}</span>
                        </Link>
                      </div>
                    ) : (
                      ""
                    )
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DeatilsPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default DeatilsPage;
