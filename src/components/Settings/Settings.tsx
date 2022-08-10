import { Grid } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { CustomPaper } from "./SettingsStyles";
import { LinksList } from "./LinksList/LinksList";
import { AddLink } from "./AddLink/AddLink";
import { useState } from "react";
import { ILinkItem } from "../../models/links";

const breadcrumbs = [
  {
    text: "خانه",
    to: "/",
  },
  {
    text: "کاربر",
    to: "/",
  },
  {
    text: "تنظیمات",
    to: "/profile/settings/",
  },
];

export const Settings = () => {
  const [linksList, setLinksList] = useState<ILinkItem[]>([]);

  const HandleAddLink = (v: ILinkItem) => {
    setLinksList((preState) => [...preState, v]);
  };

  const HandleDeleteLink = (id: string) => {
    setLinksList((preState) => preState.filter((el) => el.id !== id));
  };

  return (
    <Grid container>
      <Navbar title="تنظیمات کاربری" breadcrumbs={breadcrumbs} />
      <Grid item xs={12}>
        <CustomPaper>
          <p>مسیرهای ارتباطی</p>
          <AddLink handleSubmit={HandleAddLink} />
          <LinksList links={linksList} handleDelete={HandleDeleteLink} />
        </CustomPaper>
      </Grid>
    </Grid>
  );
};
