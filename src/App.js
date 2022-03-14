import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatPage } from "./components/pages/Cat";

/* Import pages */
import { HomePage } from "./components/pages/Home";
import { LaunchPage } from "./components/pages/Launch";
import { MakeACat } from "./components/pages/MakeACat";

import { FavContext } from "./context/fav";
import { ThemeContext } from "./context/theme";

function App() {
  const [favorites, setFavorites] = React.useState(
    localStorage.getItem("cat-fav")
      ? JSON.parse(localStorage.getItem("cat-fav"))
      : []
  );
  const [launch, setLaunch] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : null
  );

  const handleThemeChange = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else if (theme === "light") {
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");
      setTheme(null);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  /* Router */
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <FavContext.Provider value={{ favorites, setFavorites }}>
          <Routes>
            {launch ? (
              <>
                <Route exact path="/cat/:id" element={<CatPage />} />
                <Route exact path="/make-a-cat" element={<MakeACat />} />
                <Route path="*" element={<HomePage />} />
              </>
            ) : (
              <>
                <Route exact path="/cat/:id/*" element={<CatPage />} />
                <Route path="*" element={<LaunchPage setter={setLaunch} />} />
              </>
            )}
          </Routes>
        </FavContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
