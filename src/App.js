import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatPage } from "./components/pages/Cat";

/* Import pages */
import { HomePage } from "./components/pages/Home";
import { MakeACat } from "./components/pages/MakeACat";
import { FavoritesPage } from "./components/pages/FavPage";
import { FavContext } from "./context/fav";
import { ThemeContext } from "./context/theme";
import { ToastContainer } from "react-toastify";

function App() {
  const [favorites, setFavorites] = React.useState(
    localStorage.getItem("cat-fav")
      ? JSON.parse(localStorage.getItem("cat-fav"))
      : []
  );
  const [launch, setLaunch] = React.useState(false);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleThemeChange = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else if (theme === "light") {
      localStorage.theme = "dark";
      setTheme("dark");
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
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  /* Router */
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <FavContext.Provider value={{ favorites, setFavorites }}>
          <Routes>
            <>
              <Route exact path="/cat/:id" element={<CatPage />} />
              <Route exact path="/make-a-cat" element={<MakeACat />} />
              <Route exact path="/cat/:id/*" element={<CatPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />

              <Route path="*" element={<HomePage />} />
            </>
            {/*             {launch ? (
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
            )} */}
          </Routes>
        </FavContext.Provider>
      </ThemeContext.Provider>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;
