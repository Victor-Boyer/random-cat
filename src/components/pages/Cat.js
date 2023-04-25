import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { DefaultBtn, RedBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";
import { NavBar } from "../organisms/NavBar";
import { Item } from "../molecules/Item";
import {
  TypcnHeartFullOutline,
  TypcnHeartOutline,
} from "../../helpers/fav.icons";
import { FavContext } from "../../context/fav";
import { addToFavorite, removeFromFavorite } from "../../helpers/fav.setter";

export function CatPage() {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(FavContext);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  const { id } = useParams();

  const cutString = (str, id) => {
    const index = str.indexOf("says");
    return id + "/" + str.substring(index, str.length);
  };

  return (
    <div className="dark:bg-dark-smooth w-full h-screen ">
      <NavBar />
      <div className="flex flex-col items-center">
        {/*         <div className="flex items-center justify-center w-full font-medium dark:text-white">
          It looks like someone sent you a cat 🐈
        </div> */}
        <DefaultCard className="mt-12 max-w-[500px] w-full">
          {id !== "null" && (
            <img
              className={`w-full ${
                loading ? "block" : "hidden"
              } bg-contain  max-h-[600px]`}
              onLoad={() => {
                setLoading(true);
              }}
              src={`${process.env.REACT_APP_URL}/cat/${
                url.includes("says") ? cutString(url, id) : id
              }?type=sq`}
            />
          )}
          <div
            className={`w-full h-[300px] animate-pulse bg-grey-dark ${
              loading || id === "null" ? "hidden" : "block"
            }`}
          />
          <div className="flex items-center gap-3 ml-4 italic text-sm my-3">
            <div
              onClick={() => {
                if (favorites.includes(id)) {
                  removeFromFavorite({ id }, favorites, setFavorites);
                } else {
                  addToFavorite({ _id: id }, favorites, setFavorites);
                }
              }}
            >
              {favorites.includes(id) ? (
                <label className="flex items-center gap-2 cursor-pointer">
                  <TypcnHeartFullOutline />
                </label>
              ) : (
                <label className="flex items-center gap-2 cursor-pointer">
                  <TypcnHeartOutline />
                </label>
              )}
            </div>
          </div>
        </DefaultCard>
        <div className="flex flex-col items-center gap-2 dark:text-white mt-8">
          <p>Wan't to see more cats?</p>
          <div>
            <DefaultBtn onClick={() => navigate("/")} className="mr-2">
              YES
            </DefaultBtn>
            <RedBtn
              onClick={() => {
                window.alert("HAHAHAHA nice try !");
                navigate("/");
              }}
            >
              NO
            </RedBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
