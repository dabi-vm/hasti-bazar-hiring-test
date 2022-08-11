import { createContext, useState } from "react";
import * as locales from "@mui/material/locale";
type SupportedLocales = keyof typeof locales;

interface IProps {
  children: any;
}

interface IStateMultiLanguage {
  lang: SupportedLocales;
  isRTl: boolean;
}

interface IContext {
  multiLang: IStateMultiLanguage;
  changeLang: (lang: IStateMultiLanguage) => void;
}

export const MultiLanguageContext = createContext<IContext>({
  multiLang: {
    isRTl: false,
    lang: "enUS",
  },
  changeLang: (lang: IStateMultiLanguage) => {},
});

const MultiLanguageProvider = ({ children }: IProps) => {
  const [multiLang, setMultiLang] = useState<IStateMultiLanguage>({
    isRTl: false,
    lang: "enUS",
  });

  const changeLang = (v: IStateMultiLanguage) => setMultiLang(v);

  return (
    <MultiLanguageContext.Provider value={{ changeLang, multiLang }}>
      {children}
    </MultiLanguageContext.Provider>
  );
};

export default MultiLanguageProvider;
