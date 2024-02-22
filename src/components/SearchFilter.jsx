import { Search } from "react-ionicons";

function SearchFilter() {
  return (
    <div className="flex justify-between px-12 pt-10">
      <div className="shadow-md flex items-center gap-4 py-3 px-5">
        <span className="text-lmbg">
          <Search size="small" />
        </span>
        <input
          type="text"
          placeholder="Search for a country"
          className="outline-none bg-transparent"
        />
      </div>

      <select className="shadow-md w-60 p-2 outline-none bg-transparent">
        <option className="text-white bg-black hover:bg-red">
          Filter by Region
        </option>
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

export default SearchFilter;
