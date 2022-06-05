import React from "react";
import { useThemeDispatch, useThemeState } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { Button } from "antd";

type Props = {
  circle?: boolean;
};

const ThemeToggle: React.FC<Props> = (props) => {
  const { circle } = props;
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
      icon={!darkMode ? <BsSun size={20} /> : <BsMoon size={18} />}
      onClick={toggleTheme}
      shape={circle ? "circle" : "default"}
    ></Button>
  );
};

export default ThemeToggle;
