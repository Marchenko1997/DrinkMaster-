import {
  SwitchThemeBtnDesktop,
  ThemeBtnIcon,
  ThemeBtnBall,
} from "./ToggleDesktop.styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import sprite from "/src/assets/icons/icons.svg";

const ToggleDesktop = ({ isOpenMenu }) => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme"));
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const toggleThemeChange = () => {
    if (isDark === "dark") {
      setIsDark("light");
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    } else {
      setIsDark("dark");
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    } else {
      setIsDark("dark");
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <SwitchThemeBtnDesktop
      onClick={toggleThemeChange}
      style={
        isOpenMenu
          ? { display: "flex" }
          : isDesktop
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <ThemeBtnIcon>
        <use xlinkHref={`${sprite}#icon-Rectangle`}></use>
      </ThemeBtnIcon>
      <ThemeBtnBall isDark={isDark}>
        <use xlinkHref={`${sprite}#icon-knob`}></use>
      </ThemeBtnBall>
    </SwitchThemeBtnDesktop>
  );
};

export default ToggleDesktop;
