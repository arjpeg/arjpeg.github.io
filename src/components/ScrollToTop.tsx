import { useEffect, useState } from "react";
import UpIcon from "../assets/icons/UpIcon.svg";

import "../css/scrolltotop.css";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <button
      style={{ display: showButton ? "block" : "none" }}
      onClick={handleClick}
      className="scrolltotop"
    >
      <img src={UpIcon} alt="Scroll to top" />
    </button>
  );
}
