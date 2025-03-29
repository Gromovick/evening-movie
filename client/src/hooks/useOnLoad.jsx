import React, { useState } from "react";
import { useEffect } from "react";
export function useOnLoad() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => setLoad(true));
    return window.removeEventListener("load", () => setLoad(true));
  }, []);
  return load;
}
