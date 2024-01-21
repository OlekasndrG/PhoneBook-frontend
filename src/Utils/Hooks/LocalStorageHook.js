import { useState, useRef, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const getinitialValue = (key, initialValue) => {
    const result = JSON.parse(localStorage.getItem(key));
    console.log(initialValue);
    return result || initialValue;
  };

  const [state, setState] = useState(() => getinitialValue(key, initialValue));
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
// setState(prevState => [...prevState, newItem]);
