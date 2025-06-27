import { atom } from "jotai";

export type Language = "en" | "es" | "pt" | "fr";

// Load initial language from localStorage if available
const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("language");
    if (
      stored === "en" ||
      stored === "es" ||
      stored === "pt" ||
      stored === "fr"
    ) {
      return stored;
    }
  }
  return "en"; // fallback
};

export const languageAtom = atom<Language>(getInitialLanguage());

// Just a simple atom
export const translationsAtom = atom<Record<string, string>>({});
