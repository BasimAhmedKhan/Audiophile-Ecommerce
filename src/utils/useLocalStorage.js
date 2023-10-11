import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      // If window is undefined, we're on the server side, so return the initialValue
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
    const savedValue = localStorage.getItem(key);
    if(savedValue) return JSON.parse(savedValue);

    if(typeof initialValue === "function"){
      return initialValue()
    } else{
      return initialValue;
    }
  }); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
