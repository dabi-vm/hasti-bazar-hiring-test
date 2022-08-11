import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { Settings } from "../../src/components/Settings/Settings";

const SettingsPage = () => {
  return <Settings />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default SettingsPage;
