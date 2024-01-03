import { useState, useEffect } from "react";


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: width,
    height: undefined
  });

  useEffect(() => {

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    const cleanUp = () => {
      console.log('run if a useEffect dep changes');
      window.removeEventListener('resize', handleResize);
    }

    return cleanUp;

  },[]);
}