import NavBar from "./components/Navbar";
import FlagPage from "./components/FlagPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import DeatilsPage from "./components/DetailsPage";

library.add(fas, faTwitter, faFontAwesome);
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<FlagPage darkMode={darkMode} />} />
        <Route
          path="/countryDetails/:id"
          element={<DeatilsPage darkMode={darkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
