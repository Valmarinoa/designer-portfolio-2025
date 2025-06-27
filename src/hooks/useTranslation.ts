import { useAtom } from "jotai";
import { languageAtom, translationsAtom } from "@/store/languageAtom";

export function useTranslation() {
  const [language] = useAtom(languageAtom);
  const [translations] = useAtom(translationsAtom);

  const t = (key: string) => translations[key] ?? key;

  return { t, language };
}
