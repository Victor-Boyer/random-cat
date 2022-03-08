import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

  return (
    <Router>
      <FavContext.Provider value={{ favorites, setFavorites }}>
        <Routes>
          {launch ? (
            <Route path="/" element={<HomePage />} />
          ) : (
            <Route exact path="/" element={<LaunchPage setter={setLaunch} />} />
          )}
        </Routes>
      </FavContext.Provider>
    </Router>
  );
}

export default App;
