import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import ErrorScreen from "./components/ErrorScreen";
import ClickOutsideHandler from "./components/ClickOutsideHandler";

export const Context = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(null);
  const [error, setError] = useState(null);
  const [font, setFont] = useState("sans-serif");
  const [dropdown, setDropDown] = useState(false);

  const appStyles = {
    fontFamily: `var(--font-${font.toLowerCase()})`,
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const apiGet = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const json = await response.json();

      if (response.status === 200) {
        setData(json);
        setError(null);
      } else if (response.status === 404) {
        setError(json);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    apiGet("keyboard");
  }, []);

  return (
    <Context.Provider value={[font, setFont, dropdown, setDropDown]}>
      <ClickOutsideHandler onClickOutside={() => setDropDown(false)}>
        <div
          className="min-h-screen w-full bg-white dark:bg-app-black-1"
          style={appStyles}
        >
          <div className="p-6 md:w-1/2 mx-auto">
            <Header handleThemeSwitch={handleThemeSwitch} apiGet={apiGet} />
            {!error ? (
              <Dictionary data={data} />
            ) : (
              <ErrorScreen error={error} />
            )}
          </div>
        </div>
      </ClickOutsideHandler>
    </Context.Provider>
  );
}

export default App;
