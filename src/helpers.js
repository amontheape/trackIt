import { useState } from 'react';

export default function useSessionStorage( key, initialValue ) {
  const [storedValue, setStoredValue] = useState( () => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } );

  function setValue(value) {
    setStoredValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}