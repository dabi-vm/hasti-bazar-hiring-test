import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { Settings } from "../../src/components/Settings/Settings";
import agent from "../../src/services/agent";

const SettingsPage = (props) => {
  return <Settings list={props.linksList} />;
};

export const getStaticProps = async ({ locale }) => {
  let res;
  await agent.Links.list(100, 1).then((r) => (res = r));

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      linksList: res,
    },
  };
};
export default SettingsPage;
