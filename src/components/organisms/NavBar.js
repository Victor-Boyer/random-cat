import { useState, useContext, useEffect } from "react";
import { DefaultBtn } from "../atoms/Button";
import {
  IcBaselineDriveFileRenameOutline,
  IcRoundMenu,
  IcSharpFilterList,
  TypcnHeartOutline,
  TypcnThMenu,
} from "../../helpers/fav.icons";
import { ThemeContext } from "../../context/theme";
import { MobileMenu } from "./navbar/MobileMenu";
import { useNavigate } from "react-router-dom";
import { IcOutlineHome } from "../../helpers/fav.icons.check";

export function NavBar({ setter, favPage }) {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [location, setLocation] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="w-screen flex justify-center">
      <div className="flex justify-around items-center w-full fixed max-w-[600px] py-3 bg-white dark:bg-dark-smooth z-20 max-w-fit">
        <h1
          className="font-bold text-lg cursor-pointer dark:text-white"
          onClick={() => window.location.reload()}
        >
          {location ? "WatchCats 😻" : "My Favorites"}
        </h1>
        {setter &&
          (!isMobile ? (
            <div className="dark:text-white flex justify-between items-center w-1/3">
              {!location || window.location.pathname !== "/" ? (
                <IcOutlineHome
                  className="cursor-pointer"
                  onClick={() => {
                    setter(!favPage);
                    setLocation(!location);
                    navigate("/");
                  }}
                />
              ) : (
                <TypcnHeartOutline
                  className="cursor-pointer"
                  onClick={() => {
                    setter(!favPage);
                    setLocation(!location);
                  }}
                />
              )}
              <IcSharpFilterList className="cursor-pointer" />
              <IcBaselineDriveFileRenameOutline
                className="cursor-pointer"
                onClick={() => {
                  navigate("/make-a-cat");
                }}
              />
              <span
                className="flex items-center justify-center cursor-pointer dark:text-white bg-dark-smooth rounded-full dark:bg-dark-light w-7 h-7 text-center"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                {theme === "dark" ? " ☀️" : "🌙"}
              </span>
            </div>
          ) : (
            <div className="dark:text-white">
              <IcRoundMenu
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
          ))}
        {/*         {!isMobile && (

        )} */}
        <MobileMenu
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setFav={setter}
          favPage={favPage}
        />
      </div>
    </div>
  );
}
