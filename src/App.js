import React, { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const App = () => {
  const { width } = useWindowDimensions();

  return <div>
    <h2>width: {width}</h2>
    {
      width <= 768 ? <p>width is less than or equal 768px</p> : <p>width is greater than 768px</p>
    }
  </div>;
};

export default App;
