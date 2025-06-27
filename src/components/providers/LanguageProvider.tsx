"use client";

import { ReactNode, useEffect } from "react";
import { Provider as JotaiProvider, useAtom } from "jotai";
import { languageAtom, translationsAtom } from "@/store/languageAtom";

interface LanguageProviderProps {
  children: ReactNode;
}

function LanguageLoader() {
  const [language] = useAtom(languageAtom);
  const [, setTranslations] = useAtom(translationsAtom);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/locales/${language}/common.json`);
      const data = await res.json();
      setTranslations(data);
    };
    load();
  }, [language, setTranslations]);

  return null;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  return (
    <JotaiProvider>
      <LanguageLoader /> {/* Loader fetches translations */}
      {children}
    </JotaiProvider>
  );
}
