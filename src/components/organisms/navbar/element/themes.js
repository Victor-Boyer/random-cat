import { MenuButton } from "../../../atoms/Button";
import { IcRoundArrowBack } from "../../../../helpers/fav.icons";
import {
  IcOutlineRadioButtonChecked,
  IcRoundRadioButtonUnchecked,
} from "../../../../helpers/fav.icons.check";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/theme";

export const Themes = ({ setter }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="w-full">
      <ul>
        <li>
          <MenuButton onClick={() => setter("base")}>
            <IcRoundArrowBack />
            Back
          </MenuButton>
        </li>
        <li>
          <MenuButton
            disabled={theme === "light" ? true : false}
            onClick={() => setTheme()}
          >
            {theme === "light" ? (
              <IcOutlineRadioButtonChecked />
            ) : (
              <IcRoundRadioButtonUnchecked />
            )}
            Light
          </MenuButton>
        </li>
        <li>
          <MenuButton
            disabled={theme === "dark" ? true : false}
            onClick={() => setTheme()}
          >
            {theme === "dark" ? (
              <IcOutlineRadioButtonChecked />
            ) : (
              <IcRoundRadioButtonUnchecked />
            )}
            Dark
          </MenuButton>
        </li>
      </ul>
    </div>
  );
};
