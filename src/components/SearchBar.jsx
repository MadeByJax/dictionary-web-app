import React, { useEffect, useState } from "react";
import "../App.css";

const SearchBar = ({ apiGet, submitError, setSubmitError }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [word, setWord] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!word) {
      setSubmitError("Whoops, can't be empty...");
      return;
    }
    apiGet(word);
    setWord("");
  };

  const toggleBorder = () => {
    setIsClicked(!isClicked);
  };

  const divStyle = {
    border: submitError
      ? "1px solid #ff0000"
      : isClicked
      ? "1px solid #a445ed"
      : "none",
  };

  return (
    <>
      <form
        onFocus={toggleBorder}
        onBlur={toggleBorder}
        className="w-full flex items-center justify-between mt-6 bg-app-grey-3 dark:bg-app-black-2 h-[48px] rounded-2xl px-6"
        style={divStyle}
        onSubmit={submitHandler}
      >
        <input
          placeholder="Search for any word..."
          className="flex-1 text-app-black-3 dark:text-white bg-app-grey-3 dark:bg-app-black-2 focus:outline-none h-full"
          type="text"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
            setSubmitError("");
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={submitHandler}
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </form>
      {submitError && (
        <div className="text-app-red text-lg mt-1">{submitError}</div>
      )}
    </>
  );
};

export default SearchBar;
