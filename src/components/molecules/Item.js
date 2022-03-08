import {
  TypcnHeartFullOutline,
  TypcnHeartOutline,
} from "../../helpers/fav.icons";
import { DefaultCard } from "../atoms/Card";
import { FavContext } from "../../context/fav";
import { useContext, useState } from "react";
import { addToFavorite, removeFromFavorite } from "../../helpers/fav.setter";

export const Item = ({ cat }) => {
  const { favorites, setFavorites } = useContext(FavContext);
  const [loading, setLoading] = useState(false);
  return (
    <li key={cat.id} className="w-full">
      <DefaultCard className="flex flex-col justify-around">
        <img
          className={`w-full ${loading ? "block" : "hidden"}`}
          onLoad={() => {
            setLoading(true);
          }}
          src={`${process.env.REACT_APP_URL}/${cat && cat.url}`}
        />

        <div
          className={`w-full h-[300px] animate-pulse bg-grey-dark ${
            loading ? "hidden" : "block"
          }`}
        />

        {favorites.includes(cat.id) ? (
          <label className="flex items-center italic text-sm mt-4">
            <TypcnHeartFullOutline
              className="cursor-pointer"
              onClick={() => {
                removeFromFavorite(cat, favorites, setFavorites);
              }}
            />
            added to favorites
          </label>
        ) : (
          <label className="flex items-center italic text-sm mt-4">
            <TypcnHeartOutline
              className="cursor-pointer"
              onClick={() => {
                addToFavorite(cat, favorites, setFavorites);
              }}
            />
            add to favorites
          </label>
        )}
      </DefaultCard>
    </li>
  );
};
