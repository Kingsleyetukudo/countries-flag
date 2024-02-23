import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DeatilsPage() {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // Function to fetch the data
    const fetchData = async () => {
      try {
        // Fetch the data using the fetch API
        const response = await fetch(`http://localhost:3000/${id}`); // Replace 'data.json' with your JSON file or API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON response
        const jsonData = await response.json();
        // Set the fetched data to the state

        setCountry(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <div className="p-12 flex flex-col">
      <Link
        to="/"
        className="rounded-md mb-12 px-8 py-2 shadow-3xl bg-lmbg w-fit"
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back
      </Link>
      <div className=" grid grid-cols-2 gap-20 items-center">
        <div>
          <img src={country.flag} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold pb-6">{country.name}</h1>
          <div className="grid grid-cols-2">
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
            <div>
              <p className="font-semibold pt-12">Border Countries:</p>
              <div className="w-1/3 flex justify-between gap-2">
                {country.borders &&
                  country.borders.map((border, index) => (
                    <div key={index}>
                      <span>{border}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeatilsPage;
