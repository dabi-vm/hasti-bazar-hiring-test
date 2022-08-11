import { Grid } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { CustomPaper } from "./SettingsStyles";
import { LinksList } from "./LinksList/LinksList";
import { useContext, useEffect, useState } from "react";
import { ILinkItem } from "../../models/links";
import { SnackContext } from "../../context/SnackContext";
import { useTranslation } from "react-i18next";
import { AddLink } from "./AddLink/AddLink";
import agent from "../../services/agent";

const breadcrumbs = [
  {
    text: "home",
    to: "/",
  },
  {
    text: "user",
    to: "/",
  },
  {
    text: "setting",
    to: "/profile/settings/",
  },
];

export const Settings = () => {
  const { t } = useTranslation();
  const [linksList, setLinksList] = useState<ILinkItem[]>([]);
  const { showAlert } = useContext(SnackContext);

  const GetLinksList = () => {
    agent.Links.list(100, 1).then((res) => setLinksList(res));
  };

  const AddLinkAPI = (form: ILinkItem) => {
    agent.Links.postLink(form).then(() => GetLinksList());
  };

  const EditLink = (form: ILinkItem) => {
    agent.Links.editLink(form).then(() => GetLinksList());
  };

  const RemoveLink = (id: string) => {
    agent.Links.removeLink(id).then(() => GetLinksList());
  };

  const DuplicateCheck = (v: ILinkItem) => {
    const isDuplicate = linksList.some(
      (item: ILinkItem) => item.link === v.link && item.title === v.title
    );
    return isDuplicate;
  };

  const HandleAddLink = (v: ILinkItem) => {
    if (DuplicateCheck(v)) {
      showAlert({
        type: "warning",
        message: t("duplicateData"),
      });
    } else {
      AddLinkAPI(v);
    }
  };

  const HandleEditLink = (v: ILinkItem) => {
    if (DuplicateCheck(v)) {
      showAlert({
        type: "warning",
        message: t("duplicateData"),
      });
    } else {
      EditLink(v);
    }
  };

  useEffect(() => {
    GetLinksList();
  }, []);

  return (
    <Grid container>
      <Navbar title={t("userSetting")} breadcrumbs={breadcrumbs} />
      <Grid item xs={12}>
        <CustomPaper variant="black90" elevation={1}>
          <p>{t("links")}</p>
          <AddLink handleSubmit={HandleAddLink} />
          <LinksList
            links={linksList}
            handleDelete={RemoveLink}
            handleEdit={HandleEditLink}
          />
        </CustomPaper>
      </Grid>
    </Grid>
  );
};
