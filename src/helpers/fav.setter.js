export const addToFavorite = (cat, favorites, setFavorites) => {
  setFavorites([...favorites, cat.id]);
  localStorage.setItem("cat-fav", JSON.stringify(favorites));
};

export const removeFromFavorite = (cat, favorites, setFavorites) => {
  const fav = favorites.filter((fav) => fav !== cat.id);
  setFavorites(fav);
  localStorage.setItem("cat-fav", JSON.stringify(fav));
};
