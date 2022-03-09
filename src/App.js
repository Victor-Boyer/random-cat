import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CatPage } from "./components/pages/Cat";

/* Import pages */
import { HomePage } from "./components/pages/Home";
import { LaunchPage } from "./components/pages/Launch";

import { FavContext } from "./context/fav";

function App() {
  const [favorites, setFavorites] = React.useState(
    localStorage.getItem("cat-fav")
      ? JSON.parse(localStorage.getItem("cat-fav"))
      : []
  );
  const [launch, setLaunch] = React.useState(false);

  /* Router */
  return (
    <Router>
      <FavContext.Provider value={{ favorites, setFavorites }}>
        <Routes>
          {launch ? (
            <>
              <Route exact path="/cat/:id" element={<CatPage />} />
              <Route exact path="/" element={<HomePage />} />
            </>
          ) : (
            <>
              <Route exact path="/cat/:id" element={<CatPage />} />
              <Route path="/" element={<LaunchPage setter={setLaunch} />} />
            </>
          )}
        </Routes>
      </FavContext.Provider>
    </Router>
  );
}

export default App;
