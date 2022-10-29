import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
/**
 * @function useWindowSize
 * @returns {array} [width, height]
 * @description
 * Returns the current window size as an array of [width, height]
 * @example
 * const [width, height] = useWindowSize();
 */

export const useWindowHeight = () => {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
/**
 * @function useWindowHeight
 * @returns {array} [height]
 * @description
 * Returns the current window height as an array of [height]
 * @example
 * const [height] = useWindowHeight();
 */
