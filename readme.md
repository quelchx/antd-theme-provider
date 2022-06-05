# Antd Theme Toggler

## Content is undergoing construction (better documentation, etc)

This package is intended to be leveraged using `degit`. To grab the files for re-use run (this will grab the javascript variant):

- `npx degit quelchx/antd-theme-provider/js/src/context src/context`

or to fetch the typescript variant:

- `npx degit quelchx/antd-theme-provider/ts/src/context src/context`

Note: `src/context` is the destination path you copy and paste too.

This package gives access to use `ThemeProvider, ThemeToggle, useThemeState and useThemeDispatch`.

useThemeState:

- darkMode: false by default

useThemeDispatch:

- dispatch('light')
- dispatch('dark')

Read into degit for information on how degit specifically works https://www.npmjs.com/package/degit?ref=hackernoon.com

To use this package simple wrap the main.js or main.ts file like so:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

Then we can use the theme provider like so:

```jsx
import React from "react";
import { ThemeToggle } from "./context/ThemeToggle";

const App = () => {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
};

export default App;
```
