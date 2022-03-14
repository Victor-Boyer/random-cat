import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { DefaultBtn, RedBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";
import { NavBar } from "../organisms/NavBar";

export function CatPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  const { id } = useParams();

  const cutString = (str, id) => {
    const index = str.indexOf("says");
    return id + "/" + str.substring(index, str.length);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center dark:bg-dark-smooth overflow-hidden">
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-8 px-[30px] py-10">
        <div className="flex items-center justify-center w-full font-medium dark:text-white">
          It looks like someone sent you a cat 🐈
        </div>
        <DefaultCard className="flex flex-col ">
          {id !== "null" && (
            <img
              className={`w-full max-w-[400px] ${loading ? "block" : "hidden"}`}
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
        </DefaultCard>
        <div className="flex flex-col items-center gap-2 dark:text-white">
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
