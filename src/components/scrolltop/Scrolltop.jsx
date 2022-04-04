import React, { useState, useEffect } from "react";
import "./scrolltop.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Scrolltop = () => {
  const [isVisible, setIsVisible] = useState(false);

  {
    /*Check is the page offset greater 300*/
  }
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  {
    /*the window is searching for a scroll event*/
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <BsFillArrowUpCircleFill
          className="scroll-icon"
          onClick={scrollToTop}
        />
      )}
    </div>
  );
};

export default Scrolltop;
