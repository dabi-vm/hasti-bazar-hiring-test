import { Grid } from "@mui/material";
import { FC } from "react";
import { ILinkItem } from "../../../models/links";
import LinkItem from "./LinkItem/LinkItem";

interface IProps {
  links: ILinkItem[];
  handleDelete(id: string): void;
  handleEdit(v: ILinkItem): void;
}
export const LinksList: FC<IProps> = ({ links, handleDelete, handleEdit }) => {
  return (
    <Grid container >
      {links.map((item) => (
        <LinkItem
          key={item.id}
          item={item}
          editHandler={handleEdit}
          deleteHandler={handleDelete}
        />
      ))}
    </Grid>
  );
};
