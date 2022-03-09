import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { DefaultBtn, RedBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";
import { NavBar } from "../organisms/NavBar";

export function CatPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center dark:bg-dark-smooth overflow-hidden">
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-8 px-[30px] py-10">
        <div className="flex items-center justify-center w-full font-medium dark:text-white">
          It looks like someone sent you a cat 🐈
        </div>
        <DefaultCard className="flex flex-col ">
          <img
            className={`w-full ${loading ? "block" : "hidden"}`}
            onLoad={() => {
              setLoading(true);
            }}
            src={`${process.env.REACT_APP_URL}//cat/${id}?type=sq`}
          />
          <div
            className={`w-full h-[300px] animate-pulse bg-grey-dark ${
              loading ? "hidden" : "block"
            }`}
          />
        </DefaultCard>
        <div className="flex flex-col items-center gap-2 dark:text-white">
          <p>Wan't to see more cats?</p>
          <div>
            <DefaultBtn
              text="YES"
              onClick={() => navigate("/")}
              className="mr-2"
            />
            <RedBtn
              text="NO"
              onClick={() => {
                window.alert("HAHAHAHA nice try !");
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
