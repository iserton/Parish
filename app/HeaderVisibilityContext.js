// HeaderVisibilityContext.js
'use client';
import { createContext, useState, useContext } from 'react';

const HeaderVisibilityContext = createContext();

export function useHeaderVisibility() {
  return useContext(HeaderVisibilityContext);
}

export function HeaderVisibilityProvider({ children }) {
  const [isHeaderVisible, changeVisibility] = useState(false);
  const toggleMenu = () => {
    changeVisibility(!isHeaderVisible);
  }

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderVisible, toggleMenu }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
}
