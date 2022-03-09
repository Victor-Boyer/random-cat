import { useState, useContext } from "react";
import { DefaultBtn } from "../atoms/Button";
import { TypcnAdjustContrast } from "../../helpers/fav.icons";
import { ThemeContext } from "../../context/theme";

export function NavBar({ setter, favPage }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [location, setLocation] = useState(true);
  return (
    <div className="w-screen flex justify-center">
      <div className="flex justify-around items-center w-full fixed max-w-[600px] py-3 bg-white dark:bg-dark-smooth z-20 max-w-fit">
        <h1
          className="font-bold text-lg cursor-pointer dark:text-white"
          onClick={() => window.location.reload()}
        >
          {location ? "WatchCats 😻" : "My Favorites"}
        </h1>
        {setter && (
          <DefaultBtn
            text={location ? `My Favorites` : "Back to cats"}
            onClick={() => {
              setter(!favPage);
              setLocation(!location);
            }}
          />
        )}
        <span
          className="flex items-center justify-center cursor-pointer dark:text-white bg-dark-smooth rounded-full dark:bg-dark-light w-7 h-7 text-center"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? " ☀️" : "🌙"}
        </span>
      </div>
    </div>
  );
}
