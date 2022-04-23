import {
  IcRoundShare,
  TypcnHeartFullOutline,
  TypcnHeartOutline,
} from "../../helpers/fav.icons";
import { DefaultCard } from "../atoms/Card";
import { FavContext } from "../../context/fav";
import { useContext, useState } from "react";
import { addToFavorite, removeFromFavorite } from "../../helpers/fav.setter";
import { toast } from "react-toastify";

export const Item = ({ cat }) => {
  const { favorites, setFavorites } = useContext(FavContext);
  const [loading, setLoading] = useState(false);

  const cutString = (str, id) => {
    const index = str.indexOf("says");
    return id + "/" + str.substring(index, str.length);
  };

  const copyToClipboard = async (cat) => {
    navigator.clipboard.writeText(
      `https://watchcats.fr/cat/${
        cat.url.includes("says") ? cutString(cat.url, cat.id) : cat.id
      }`
    );
    toast.success("Link copied !");
  };

  return (
    <li className="w-full">
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
          <div className="flex items-center justify-between italic text-sm mt-4">
            <label className="flex items-center gap-2">
              <TypcnHeartFullOutline
                className="cursor-pointer hrv-grow"
                onClick={() => {
                  removeFromFavorite(cat, favorites, setFavorites);
                }}
              />
            </label>
            <label
              className="flex items-center gap-2 cursor-pointer hrv-grow"
              onClick={() => copyToClipboard(cat)}
            >
              share the cat
              <IcRoundShare className={`hrv-grow `} />
            </label>
          </div>
        ) : (
          <div className="flex items-center justify-between italic text-sm mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <TypcnHeartOutline
                onClick={() => {
                  addToFavorite(cat, favorites, setFavorites);
                }}
              />
              add to favorites
            </label>
            <label
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => copyToClipboard(cat)}
            >
              share the cat
              <IcRoundShare />
            </label>
          </div>
        )}
      </DefaultCard>
    </li>
  );
};
