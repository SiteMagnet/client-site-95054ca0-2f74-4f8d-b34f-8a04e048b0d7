"use client"
import { createContext, useContext } from 'react';

const ContentContext = createContext(); // This holds your data

export function useContent() {
  return useContext(ContentContext); // Custom hook to use your content easily
}

export default ContentContext;
