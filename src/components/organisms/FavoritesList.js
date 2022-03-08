import { useState, useContext } from "react";
import { FavContext } from "../../context/fav";
import { TypcnHeartFullOutline } from "../../helpers/fav.icons";
import { removeFromFavorite } from "../../helpers/fav.setter";
import { DefaultBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";

export const FavoritesList = ({ setter }) => {
  const { favorites, setFavorites } = useContext(FavContext);
  const [loading, setLoading] = useState(false);
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
                  <label className="flex items-center mt-2 gap-2">
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
                </DefaultCard>
              </li>
            ))}
        </ul>
      </div>
    </div>
    /*     <div className="w-full h-screen">
      <div className="w-full h-full">
        <div className="flex items-center justify-around py-5">
          <h1 className="font-bold text-lg">My Favorites</h1>
          <DefaultBtn text="Back to cats" onClick={() => setter(false)} />
        </div>
        <ul className="flex flex-col items-center overflow-scroll gap-8">
          {favorites &&
            favorites.map((cat) => (
              <li key={cat.id}>
                <DefaultCard className="flex flex-col justify-around">
                  <img
                    className="w-full"
                    src={`${process.env.REACT_APP_URL}//cat/${cat}?type=sq`}
                  />
                  <TypcnHeartFullOutline
                    className="cursor-pointer mt-2"
                    onClick={() => {
                      removeFromFavorite(
                        (cat = { id: cat }),
                        favorites,
                        setFavorites
                      );
                    }}
                  />
                </DefaultCard>
              </li>
            ))}
        </ul>
      </div>
    </div> */
  );
};
