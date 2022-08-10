import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { FC } from "react";
import { IBreadcrumbs } from "../../../models/breadcrumbs";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface IProps {
  links: IBreadcrumbs[];
}

export const GenericBreadcrumbs: FC<IProps> = ({ links }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<FiberManualRecordIcon fontSize="small" />}
    >
      {links.map((item) => (
        <Link key={item.to} underline="hover" color="inherit" href={item.to}>
          {item.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
};