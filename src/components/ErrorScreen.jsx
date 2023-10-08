import { React } from "react";

const ErrorScreen = ({ error }) => {
  return (
    <div
      onClick={() => {
        if (dropDown) {
          setDropDown(false);
        }
      }}
      className="flex flex-col items-center text-center mt-36  "
    >
      <span className="text-7xl">😕</span>
      <h5 className="mt-11 text-2xl  dark:text-white text-app-black-3 font-bold">
        {error.title}
      </h5>
      <p className="mt-6 text-app-grey-1">
        {error.message + " " + error.resolution}
      </p>
    </div>
  );
};

export default ErrorScreen;
