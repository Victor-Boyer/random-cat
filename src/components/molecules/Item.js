import {
  TypcnArrowForward,
  TypcnHeartFullOutline,
  TypcnHeartOutline,
} from "../../helpers/fav.icons";
import { DefaultCard } from "../atoms/Card";
import { FavContext } from "../../context/fav";
import { useContext, useState } from "react";
import { addToFavorite, removeFromFavorite } from "../../helpers/fav.setter";

export const Item = ({ cat }) => {
  const { favorites, setFavorites } = useContext(FavContext);
  const [copy, setCopy] = useState(false);
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
          <div className="flex items-center justify-around italic text-sm mt-4">
            <label className="flex items-center gap-2">
              <TypcnHeartFullOutline
                className="cursor-pointer"
                onClick={() => {
                  removeFromFavorite(cat, favorites, setFavorites);
                }}
              />
            </label>
            <label className="flex items-center gap-2">
              share the cat
              <TypcnArrowForward />
            </label>
          </div>
        ) : (
          <div className="flex items-center justify-between italic text-sm mt-4">
            <label className="flex items-center gap-2">
              <TypcnHeartOutline
                className="cursor-pointer"
                onClick={() => {
                  addToFavorite(cat, favorites, setFavorites);
                }}
              />
              add to favorites
            </label>
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://watchcats.pages.dev/cat/${cat.id}`
                );
                setCopy(true);
                setTimeout(() => setCopy(false), 4000);
              }}
            >
              share the cat
              <TypcnArrowForward className="hvr-grow" />
              <span className="bg-green text-grey font-bold px-2 rounded">
                {copy && "Copied!"}
              </span>
            </label>
          </div>
        )}
      </DefaultCard>
    </li>
  );
};
