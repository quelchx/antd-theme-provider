import React from "react";
import { useThemeDispatch, useThemeState } from "./ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { Button } from "antd";

export const ThemeToggle = (props) => {
  const { rounded } = props
  const { darkMode } = useThemeState();
  const dispatch = useThemeDispatch();

  const toggleTheme = () => {
    if (darkMode) {
      dispatch("light");
    } else {
      dispatch("dark");
    }
  };

  return (
    <Button
      style={{ paddingTop: 5 }}
      icon={!darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
      onClick={toggleTheme}
      shape={rounded ? 'circle' : 'rounded'}
    ></Button>
  );
};

