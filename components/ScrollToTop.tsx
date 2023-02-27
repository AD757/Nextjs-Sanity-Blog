import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-2 z-50">
      {isVisible && (
        <ArrowUpCircleIcon
          onClick={scrollToTop}
          className="h-8 w-8 cursor-pointer text-gray-900 dark:text-white"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
