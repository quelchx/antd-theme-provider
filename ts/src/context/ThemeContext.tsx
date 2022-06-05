import { createContext, useContext, useReducer } from "react";
import './theme.css'

interface State {
  darkMode: boolean;
}

interface Action {
  type: string;
}

interface Props {
  children: React.ReactNode;
}

const initialState: State = {
  darkMode: false,
};

const reducer = (state: State, { type }: Action) => {
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

export const ThemeProvider: React.FC<Props> = (props) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);
  const dispatch = (type: string) => defaultDispatch({ type });

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
