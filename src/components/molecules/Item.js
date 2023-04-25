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
        cat.url.includes("says") ? cutString(cat.url, cat.id) : cat._id
      }`
    );
    toast.success("Link copied !");
  };

  return (
    <li className="w-full max-w-[500px] mt-8 md:mt-12">
      <DefaultCard className="flex flex-col justify-around">
        <img
          className={`w-full ${
            loading ? "block" : "hidden"
          } bg-contain  max-h-[600px]`}
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
        <div className="flex items-center gap-3 ml-4 italic text-sm my-3">
          <div
            onClick={() => {
              if (favorites.includes(cat._id || cat.id)) {
                removeFromFavorite(cat, favorites, setFavorites);
              } else {
                addToFavorite(cat, favorites, setFavorites);
              }
            }}
          >
            {favorites.includes(cat._id || cat.id) ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <TypcnHeartFullOutline />
              </label>
            ) : (
              <label className="flex items-center gap-2 cursor-pointer">
                <TypcnHeartOutline />
              </label>
            )}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              copyToClipboard(cat);
            }}
          >
            <IcRoundShare />
          </div>
        </div>
      </DefaultCard>
    </li>
  );
};
