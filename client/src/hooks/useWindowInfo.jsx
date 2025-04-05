import { useEffect, useState } from "react";

const useWindowInfo = () => {
  const [windowInfo, setWindowInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    device: getComputedStyle(document.documentElement)
      .getPropertyValue("--device")
      .trim()
      .split('"')[1],
  });

  useEffect(() => {
    const updateWindowInfo = () => {
      setWindowInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        device: getComputedStyle(document.documentElement)
          .getPropertyValue("--device")
          .trim()
          .split('"')[1],
      });
    };

    updateWindowInfo(); // Run once on mount
    window.addEventListener("resize", updateWindowInfo);

    return () => {
      window.removeEventListener("resize", updateWindowInfo);
    };
  }, []);

  return windowInfo;
};

export default useWindowInfo;
