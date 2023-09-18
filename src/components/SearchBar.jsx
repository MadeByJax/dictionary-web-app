import React, { useEffect, useState } from "react";
import "../App.css";

const SearchBar = ({ apiGet }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [word, setWord] = useState("keyboard");

  useEffect(() => {
    apiGet(word);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    apiGet(word);
    console.log(word);
  };

  const toggleBorder = () => {
    setIsClicked(!isClicked);
  };

  const divStyle = {
    border: isClicked ? "1px solid #a445ed" : "none", // Change the color as needed
  };

  return (
    <div className="">
      <form
        onFocus={toggleBorder}
        onBlur={toggleBorder}
        className="w-full flex items-center justify-between mt-6 bg-app-black-2 h-[48px] rounded-2xl px-6"
        style={divStyle}
        onSubmit={submitHandler}
      >
        <input
          placeholder="Search for any word..."
          className="flex-1 text-white bg-app-black-2 focus:outline-none h-full"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
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
    </div>
  );
};

export default SearchBar;
