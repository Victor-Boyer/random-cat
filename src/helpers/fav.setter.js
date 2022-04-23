export const addToFavorite = (cat, favorites, setFavorites) => {
  setFavorites([...favorites, cat.id]);
  localStorage.setItem(
    "cat-fav",
    favorites.length ? JSON.stringify(favorites) : JSON.stringify([cat.id])
  );
};

export const removeFromFavorite = (cat, favorites, setFavorites) => {
  const fav = favorites.filter((fav) => fav !== cat.id);
  setFavorites(fav);
  console.log(fav);
  localStorage.setItem("cat-fav", JSON.stringify(fav));
};
