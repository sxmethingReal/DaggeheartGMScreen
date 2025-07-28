import { useTranslation } from "react-i18next";

export function useCDefault() {
  console.log("CDefault renderizou");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return {
    t,
    i18n,
    changeLanguage,
  };
}
