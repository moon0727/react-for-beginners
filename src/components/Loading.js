import { useState, useEffect, useRef } from "react";
function Loading() {
  const [loading, setLoading] = useState("");
  let word = "loading...";
  const indexRef = useRef(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (word.length > indexRef.current) {
        setLoading((state) => {
          const newState = (state += word[indexRef.current]);
          indexRef.current += 1;
          return newState;
        });
      } else {
        indexRef.current = 0;
        setLoading("");
      }
    }, 100);

    return () => clearTimeout(timerId);
  }, [word]);

  return <div>{loading}</div>;
}

export default Loading;
