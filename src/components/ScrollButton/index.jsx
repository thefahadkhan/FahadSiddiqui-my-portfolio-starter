import { useEffect, useState } from "react";
import "./ScrollButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isvisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-button-wrapper">
    <button
    onClick={scrollToTop}
    className={`flex__Center scroll-to-top-button ${isvisible ? "visible" : "hidden"}`}
    aria-label="Scroll to top"
    >
      <FaArrowUp className="arrow__icon" />
    </button>
    </div>
  );
};

export default ScrollButton;
