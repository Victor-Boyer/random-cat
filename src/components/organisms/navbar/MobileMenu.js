import { useState } from "react";
import {
  IcOutlineColorLens,
  IcRoundMinus,
  IcSharpFilterList,
  TypcnHeartOutline,
  IcBaselineDriveFileRenameOutline,
} from "../../../helpers/fav.icons";
import { MenuButton } from "../../atoms/Button";
import { Themes } from "./element/themes";
import { useNavigate } from "react-router";

export const MobileMenu = ({ setIsOpen, isOpen, setFav, favPage }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("base");
  return (
    <div
      className={`w-screen transition-opacity absolute top-0  ${
        isOpen ? "h-screen" : "h-0"
      }`}
    >
      <div
        className={`h-full bg-opacity transition-opacity`}
        onClick={() => {
          setIsOpen(false);
          setLocation("base");
        }}
      />
      <div
        className={`flex flex-col transition-all items-center w-full rounded-t-lg bg-white dark:bg-dark-light dark:text-white w-screen fixed bottom-0 px-5 py-2 ${
          isOpen ? "h-1/3" : "h-0"
        }`}
      >
        <IcRoundMinus
          onClick={() => {
            setIsOpen(false);
            setLocation("base");
          }}
        />
        {location === "base" && (
          <ul className="w-full">
            <li>
              <MenuButton
                onClick={() => {
                  if (window.location.href.includes("make-a-cat")) {
                    navigate("/");
                  } else {
                    setFav(!favPage);
                    setIsOpen(false);
                    setLocation("base");
                  }
                }}
              >
                <TypcnHeartOutline />
                {!favPage ? "My Favorites" : "Back to cats"}
              </MenuButton>
            </li>
            <li>
              <MenuButton>
                <IcSharpFilterList />
                Filters
              </MenuButton>
            </li>
            <li>
              <MenuButton
                onClick={() => {
                  navigate("/make-a-cat");
                  /*  setIsOpen(false);
                  setLocation("base"); */
                }}
              >
                <IcBaselineDriveFileRenameOutline />
                Make a cat
              </MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => setLocation("themes")}>
                <IcOutlineColorLens />
                Themes
              </MenuButton>
            </li>
          </ul>
        )}
        {location === "themes" && <Themes setter={setLocation} />}
      </div>
    </div>
  );
};
