"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LangWrapper({ children }) {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return children;
}
