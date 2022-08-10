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

  const HandleEditLink = (v: ILinkItem) => {
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
  };

  return (
    <Grid container>
      <Navbar title="تنظیمات کاربری" breadcrumbs={breadcrumbs} />
      <Grid item xs={12} >
        <CustomPaper variant="black90" elevation={1}>
          <p>مسیرهای ارتباطی</p>
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
