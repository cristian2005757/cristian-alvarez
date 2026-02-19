"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const STORAGE_KEY = "portfolio-lang";
const LANGUAGES = ["es", "en", "pt", "ko"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGUAGES.includes(saved)) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (LANGUAGES.includes(newLang)) {
      setLang(newLang);
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
