import { Grid } from "@mui/material";
import { FC } from "react";
import { ILinkItem } from "../../../models/links";
import { LinkItem } from "./LinkItem/LinkItem";

interface IProps {
  links: ILinkItem[];
  handleDelete(id: string): void;
}
export const LinksList: FC<IProps> = ({ links, handleDelete }) => {
  return (
    <Grid container>
      {links.map((item) => (
        <LinkItem
          key={item.id}
          item={item}
          editHandler={() => console.log()}
          deleteHandler={handleDelete}
        />
      ))}
    </Grid>
  );
};
