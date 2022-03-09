import { useState, useContext } from "react";
import { FavContext } from "../../context/fav";
import {
  TypcnArrowForward,
  TypcnHeartFullOutline,
} from "../../helpers/fav.icons";
import { removeFromFavorite } from "../../helpers/fav.setter";
import { DefaultBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";

export const FavoritesList = ({ setter }) => {
  const { favorites, setFavorites } = useContext(FavContext);
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex items-center justify-around py-5 w-full">
          <h1 className="font-bold text-lg">My Favorites</h1>
          <DefaultBtn text="Back To Cats" onClick={() => setter(false)} />
        </div>
        <ul className="flex flex-col items-center w-5/6 h-full overflow-scroll gap-8 px-[30px] overflow-x-hidden py-10">
          {favorites &&
            favorites.map((cat) => (
              <li key={cat.id} className="w-full">
                <DefaultCard className="flex flex-col justify-around">
                  <img
                    className={`w-full ${loading ? "block" : "hidden"}`}
                    src={`${process.env.REACT_APP_URL}//cat/${cat}?type=sq`}
                    onLoad={() => setLoading(true)}
                  />
                  <div
                    className={`w-full h-[300px] animate-pulse bg-grey-dark ${
                      loading ? "hidden" : "block"
                    }`}
                  />
                  <div className="flex items-center justify-between mt-4 gap-2">
                    <label className="flex items-center gap-2">
                      <TypcnHeartFullOutline
                        className="cursor-pointer"
                        onClick={() => {
                          removeFromFavorite(
                            (cat = { id: cat }),
                            favorites,
                            setFavorites
                          );
                        }}
                      />
                      Love it !
                    </label>
                    <label
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `https://watchcats.pages.dev/cat/${cat}`
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
                </DefaultCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
