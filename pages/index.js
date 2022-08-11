import React from "react";
import { Home } from "../src/components/Home/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage = () => {
  return <Home />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default HomePage;
