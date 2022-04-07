import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return { width };
};

export default useWidth;
