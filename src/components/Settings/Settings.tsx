import { Grid } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { CustomPaper } from "./SettingsStyles";
import { LinksList } from "./LinksList/LinksList";
import { FC, useContext, useEffect, useState } from "react";
import { ILinkItem } from "../../models/links";
import { SnackContext } from "../../context/SnackContext";
import { useTranslation } from "next-i18next";
import { AddLink } from "./AddLink/AddLink";
import agent from "../../services/agent";
import { Search } from "./Search/Search";

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

interface IProps {
  list: ILinkItem[];
}
export const Settings: FC<IProps> = ({ list }) => {
  const { t } = useTranslation("common");
  const { showAlert } = useContext(SnackContext);
  const [linksList, setLinksList] = useState(list);

  const AddLinkAPI = (form: ILinkItem) => {
    agent.Links.postLink(form).then(() => location.reload());
  };

  const EditLink = (form: ILinkItem) => {
    agent.Links.editLink(form).then(() => location.reload());
  };

  const RemoveLink = (id: string) => {
    agent.Links.removeLink(id).then(() => location.reload());
  };

  const DuplicateCheck = (v: ILinkItem) => {
    const isDuplicate = list.some(
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

  return (
    <Grid container>
      <Navbar title={t("userSetting")} breadcrumbs={breadcrumbs} />
      <Search linksList={list} setList={setLinksList} />
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
