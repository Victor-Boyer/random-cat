import { useContext, useEffect, useState } from "react";
import { getFirstCat } from "../../api/first.cat";
import { TypcnAdjustContrast } from "../../helpers/fav.icons";
import { DefaultBtn } from "../atoms/Button";
import { DefaultCard } from "../atoms/Card";
import { ThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export function LaunchPage({ setter }) {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [cat, setCat] = useState({ image: null, fact: null });
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setCat(await getFirstCat());
    const it = setInterval(async () => {
      setCat(await getFirstCat());
    }, 8000);
    return () => clearInterval(it);
  };

  useEffect(() => {
    fetchCat();
    toast.info("This app is still in development, all features are not done!");
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-dark-smooth">
      <div className="w-2/3 h-2/3 flex justify-center flex-col items-center gap-12">
        {/*  <NavBar /> */}
        <h1 className="text-xl font-bold dark:text-white">
          Welcome to WatchCats 🐈
        </h1>
        <img
          src={cat && cat.image}
          className={`rounded-lg max-h-[200px] ${loading ? "block" : "hidden"}`}
          width="200"
          onLoad={() => {
            setLoading(true);
            setFact(cat.fact);
          }}
        />
        <div
          className={`w-[200px] h-[200px] animate-pulse bg-grey-dark rounded-lg ${
            loading ? "hidden" : "block"
          }`}
        />

        <DefaultBtn
          onClick={() => {
            navigate("/");
            setter(true);
          }}
        >
          More cats
        </DefaultBtn>
        <DefaultCard>
          <h2 className="font-bold">Cat fact : </h2>
          <p className="text-blue-navy dark:text-grey">{fact}</p>
        </DefaultCard>
        <div className="flex flex-col items-center italic text-sm text-grey-dark ">
          <p>♾ Scroll to the catfinity ♾</p>
          <span
            className="flex items-center justify-between mt-2 cursor-pointer"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? "Dark 🌙" : "Light ☀️"}
            <TypcnAdjustContrast className="hrv-grow cursor-pointer dark:text-white mx-2 animate-pulse" />
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
