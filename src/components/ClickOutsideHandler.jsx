import { useEffect, useRef } from "react";

const ClickOutsideHandler = ({ onClickOutside, children }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutsideHandler;
