import React, { useState } from "react";
import { useEffect } from "react";
export function useOnLoad() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const onLoad = () => setLoad(true);
    if (document.readyState === "complete") onLoad();
    else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);
  return load;
}
