import { useState, useContext, useEffect } from "react";
import { DefaultBtn } from "../atoms/Button";
import {
  IcBaselineContactSupport,
  IcBaselineDriveFileRenameOutline,
  IcRoundMenu,
  IcSharpFilterList,
  MoonIc,
  SunIc,
  TypcnHeartFullOutline,
} from "../../helpers/fav.icons";
import { ThemeContext } from "../../context/theme";
import { MobileMenu } from "./navbar/MobileMenu";
import { useNavigate } from "react-router-dom";
import { HomeFullFilled } from "../../helpers/fav.icons.check";
import { toast } from "react-toastify";

export function NavBar() {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [location, setLocation] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  useEffect(() => {
    if (width < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const itemNavDesktop =
    "flex gap-4 items-center cursor-pointer dark:hover:bg-[#0c0f21] hover:bg-grey rounded-md p-3 transition-all";
  const itemTextNav = "hidden lg:block transition-all";
  return (
    <div
      className={`transition-all fixed flex w-full bottom-0 py-0 bg-white dark:bg-dark-smooth z-20 justify-center lg:w-1/5 lg:max-w-[350px] md:w-[80px] md:ml-3 md:border-r md:border-[#262626] md:h-full md:flex-col md:justify-start`}
    >
      <h1 class="hidden md:block font-bold tracking-tighter text-2xl text-[#7AA5D2] py-10 px-3">
        <a href="/">
          <span className="hidden lg:block">
            WatchCats <span class="font-light tracking-normal">.fr</span>
          </span>
          <span className="block lg:hidden">
            W<span class="font-light tracking-normal">.fr</span>
          </span>
        </a>
      </h1>

      <div className="text-gray dark:text-white flex md:flex-col gap-3 sm:gap-7 items-left md:w-3/4">
        <div
          className={itemNavDesktop}
          onClick={() => {
            setLocation(!location);
            navigate("/");
          }}
        >
          <HomeFullFilled />
          <span className={itemTextNav}>Home</span>
        </div>
        <div
          className={itemNavDesktop}
          onClick={() => {
            setLocation(!location);
            navigate("/favorites");
          }}
        >
          <TypcnHeartFullOutline />
          <span className={itemTextNav}>Favorites</span>
        </div>

        <div
          className={itemNavDesktop}
          onClick={() => {
            navigate("/make-a-cat");
          }}
        >
          <IcBaselineDriveFileRenameOutline />
          <span className={itemTextNav}>Write a cat</span>
        </div>
        <div
          className={itemNavDesktop + " opacity-40 cursor-not-allowed"}
          onClick={() => toast("Not ready yet!")}
        >
          <IcSharpFilterList />
          <span className={itemTextNav}>Filters</span>
        </div>
        <div
          className={itemNavDesktop}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? <MoonIc /> : <SunIc />}
          <span className={itemTextNav}>Switch theme</span>
        </div>
      </div>
    </div>
  );
}
