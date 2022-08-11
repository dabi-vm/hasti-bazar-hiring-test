import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { ThemeConfig } from "../../src/components/ThemeConfig/ThemeConfig";

const ThemeConfigPage = () => {
  return <ThemeConfig />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default ThemeConfigPage;
