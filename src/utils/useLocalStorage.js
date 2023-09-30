import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  if (typeof window === "undefined") {
    // If window is undefined, we're on the server side, so return the initialValue
    return initialValue instanceof Function ? initialValue() : initialValue;
  }

  const savedVal = localStorage.getItem(key);
  if (savedVal) return savedVal;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue];
}
