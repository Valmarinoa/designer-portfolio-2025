"use client";

import { useAtom } from "jotai";
import { languageAtom, Language } from "@/store/languageAtom";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <Select
      value={language}
      onValueChange={(val: Language) => setLanguage(val)}
    >
      <SelectTrigger className="opacity-60">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent className="bg-transparent -ml-2">
        {languages.map(({ code, label }) => (
          <SelectItem key={code} value={code}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
