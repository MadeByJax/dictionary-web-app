import { useState, useContext, useRef, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./Toggle.css";
import SearchBar from "./SearchBar";
import { Context } from "../App";

const Header = ({ apiGet, handleThemeSwitch }) => {
  const [font, setFont, dropDown, setDropDown] = useContext(Context);
  const [formattedFont, setFormattedFont] = useState("Sans Serif");
  const dropdownRef = useRef(null);
  const [submitError, setSubmitError] = useState("");

  const handleLogoClick = () => {
    apiGet("keyboard");
    setSubmitError("");
  };

  const handleFont = (selectedFont) => {
    setFont(selectedFont);

    const formatted = selectedFont
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setFormattedFont(formatted);
    setDropDown(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <svg
          className="cursor-pointer"
          onClick={handleLogoClick}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="31"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div className="flex relative items-center gap-4">
          <p
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className="cursor-pointer text-black dark:text-white"
          >
            {formattedFont}
          </p>
          <svg
            className="cursor-pointer "
            onClick={() => {
              setDropDown(!dropDown);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="6"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
          <div className="w-[1px] h-[32px] bg-white"></div>
          <label className="switch">
            <input onClick={handleThemeSwitch} type="checkbox" />
            <span className="slider round"></span>
          </label>
          <svg
            className="text-app-purple fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
          {dropDown && (
            <ul
              ref={dropdownRef}
              className="dark:bg-app-black-2 bg-white shadow-custom dark:text-white p-6 rounded-2xl w-[183px] right-[110px] top-[30px]  absolute"
            >
              <li
                onClick={() => handleFont("sans-serif")}
                className="font-bold hover:text-app-purple cursor-pointer"
              >
                Sans Serif
              </li>
              <li
                onClick={() => handleFont("Serif")}
                className="font-bold hover:text-app-purple cursor-pointer"
              >
                Serif
              </li>
              <li
                onClick={() => handleFont("Mono")}
                className="font-bold hover:text-app-purple cursor-pointer"
              >
                Mono
              </li>
            </ul>
          )}
        </div>
      </div>

      <SearchBar
        submitError={submitError}
        setSubmitError={setSubmitError}
        apiGet={apiGet}
      />
    </>
  );
};

export default Header;
