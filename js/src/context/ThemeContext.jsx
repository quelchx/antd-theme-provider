import './index.css';
import { createContext, useContext, useReducer } from "react";

const initialState = {
  darkMode: false,
};

const reducer = (state, { type }) => {
  switch (type) {
    case "light":
      return { ...state, darkMode: false };
    case "dark":
      return { ...state, darkMode: true };
    default:
      throw new Error(`Unknown action type ${type}`);
  }
};

const ThemeState = createContext(initialState);
const ThemeDispatch = createContext(null);

export const ThemeProvider = (props) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    darkMode: false,
  });
  const dispatch = (type) => defaultDispatch({ type });

  return (
    <ThemeDispatch.Provider value={dispatch}>
      <ThemeState.Provider value={state}>
        <div className={`bg-${!state.darkMode ? "light" : "dark"}`}>
          {props.children}
        </div>
      </ThemeState.Provider>
    </ThemeDispatch.Provider>
  );
};

export const useThemeState = () => useContext(ThemeState);
export const useThemeDispatch = () => useContext(ThemeDispatch);