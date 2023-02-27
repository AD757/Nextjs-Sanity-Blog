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
    <div className="fixed bottom-3 right-0 z-50">
      {isVisible && (
        <ArrowUpCircleIcon
          onClick={scrollToTop}
          className="w-10 cursor-pointer text-gray-900 dark:text-white hover:text-[#8F00FF] dark:hover:text-[#483248] "
        />
      )}
    </div>
  );
};

export default ScrollToTop;
