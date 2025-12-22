import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../data/translations";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ka");

  // ✅ თარგმანები მიმდინარე ენისთვის
  const t = translations[lang];

  // ✅ html lang ატრიბუტის შეცვლა
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

