import { Grid } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { CustomPaper } from "./SettingsStyles";
import { LinksList } from "./LinksList/LinksList";
import { AddLink } from "./AddLink/AddLink";
import { useContext, useState } from "react";
import { ILinkItem } from "../../models/links";
import { SnackContext } from "../../context/SnackContext";
import { useTranslation } from "react-i18next";

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

  const DuplicateCheck = (v: ILinkItem) => {
    const isDuplicate = linksList.some(
      (item) => item.link === v.link && item.title === v.title
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
      setLinksList((preState) => [...preState, v]);
    }
  };

  const HandleDeleteLink = (id: string) => {
    setLinksList((preState) => preState.filter((el) => el.id !== id));
  };

  const HandleEditLink = (v: ILinkItem) => {
    if (DuplicateCheck(v)) {
      showAlert({
        type: "warning",
        message: t("duplicateData"),
      });
    } else {
      // find item and replace new item data
      setLinksList((preState) =>
        preState.map((el) => {
          if (el.id === v.id) {
            el.link = v.link;
            el.title = v.title;
          }
          return el;
        })
      );
    }
  };

  return (
    <Grid container>
      <Navbar title={t("userSetting")} breadcrumbs={breadcrumbs} />
      <Grid item xs={12}>
        <CustomPaper variant="black90" elevation={1}>
          <p>{t("links")}</p>
          <AddLink handleSubmit={HandleAddLink} />
          <LinksList
            links={linksList}
            handleDelete={HandleDeleteLink}
            handleEdit={HandleEditLink}
          />
        </CustomPaper>
      </Grid>
    </Grid>
  );
};
