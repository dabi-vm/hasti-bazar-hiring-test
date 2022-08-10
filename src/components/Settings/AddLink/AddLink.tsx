import { Button, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC, useState } from "react";
import { CustomPaper } from "./AddLinkStyles";
import { ModifyLinkForm } from "../ModifyLinkForm/ModifyLinkForm";
import { ILinkItem } from "../../../models/links";

interface IProps {
  handleSubmit(v: ILinkItem): void;
}

export const AddLink: FC<IProps> = ({ handleSubmit }) => {
  const [isExpand, setIsExpand] = useState(false);

  const HandleAdd = () => {
    setIsExpand(true);
  };

  const HandleSubmit = (v: ILinkItem) => {
    handleSubmit(v);
    setIsExpand(false);
  };
  const HandleCancel = () => {
    setIsExpand(false);
  };

  return (
    <CustomPaper elevation={0}>
      <Button variant="text" color="warning" size="small" onClick={HandleAdd}>
        <AddIcon fontSize="small" />
        &nbsp; افزودن مسیر ارتباطی
      </Button>
      <Collapse in={isExpand} timeout="auto" unmountOnExit>
        <ModifyLinkForm
          handleSubmit={HandleSubmit}
          handleCancel={HandleCancel}
        />
      </Collapse>
    </CustomPaper>
  );
};
