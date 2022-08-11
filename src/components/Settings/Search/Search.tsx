import { Grid, TextField } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { ILinkItem } from "../../../models/links";

interface IProps {
  linksList: ILinkItem[];
  setList(v: ILinkItem[]): void;
}
export const Search: FC<IProps> = ({ linksList, setList }) => {
  const { t } = useTranslation("common");
  
  const HandleSearch = (e: any) => {
    if (e.key === "Enter") {
      const arr = linksList.filter((item) =>
        item.link.includes(e.target.value)
      );
      setList(arr);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          fullWidth
          placeholder={t("search")}
          helperText={t("pressEnterToSearchLink")}
          onKeyDown={(e: any) => HandleSearch(e)}
        />
      </Grid>
    </Grid>
  );
};
