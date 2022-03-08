import React from "react";

export const FavContext = React.createContext({
  favorites: [],
  setFavorites: () => {},
});
