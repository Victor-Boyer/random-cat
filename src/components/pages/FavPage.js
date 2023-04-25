import { useState, useContext } from "react";
import { FavContext } from "../../context/fav";

import { Item } from "../molecules/Item";
import { NavBar } from "../organisms/NavBar";

export const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(FavContext);

  return (
    <div className="dark:bg-dark-smooth">
      <NavBar />
      <div className="w-full h-screen">
        <div className="w-full h-full flex flex-col items-center">
          <ul className="flex flex-col items-center w-full h-full overflow-scroll gap-8 overflow-x-hidden">
            {favorites &&
              favorites.map((cat) => (
                <Item
                  key={cat + Date.now()}
                  cat={{ id: cat, url: `/cat/${cat}?type=sq` }}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
