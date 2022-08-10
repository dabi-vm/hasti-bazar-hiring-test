import { Grid, Button, Collapse, Typography, Link } from "@mui/material";
import { FC, useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridContainer } from "./LinkItemStyle";
import { ILinkItem } from "../../../../models/links";
import { Icons } from "../../../shared/Icons/Icons";
import { ModalContext } from "../../../../context/ModalContext";
import { ModifyLinkForm } from "../../ModifyLinkForm/ModifyLinkForm";
interface IProps {
  item: ILinkItem;
  deleteHandler(id: string): void;
  editHandler(id: string): void;
}
export const LinkItem: FC<IProps> = ({ item, deleteHandler, editHandler }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { showModal, hideModal } = useContext(ModalContext);
  const [editValues, setEditValues] = useState<ILinkItem>();

  const HandleEdit = (v: ILinkItem) => {
    setEditValues(v);
    setIsExpand(!isExpand);
    editHandler(item.id);
  };

  const HandleDeleteModal = (id: string) => {
    showModal({
      title: "حذف مسیر ارتباطی",
      description: "آیا از تصمیم خود مطمئن هستید؟",
      maxWidth: "xs",
      action: (
        <>
          <Button
            children="انصراف"
            variant="outlined"
            onClick={hideModal}
            color="warning"
            size="small"
            sx={{
              margin: 1,
            }}
          />
          <Button
            children="حذف"
            variant="contained"
            onClick={() => {
              deleteHandler(id);
              hideModal();
            }}
            color="warning"
            size="small"
            sx={{
              margin: 1,
            }}
          />
        </>
      ),
    });
  };

  const HandleCancel = () => {
    setIsExpand(false);
  };

  return (
    <GridContainer container item xs={12}>
      <Grid item xs={12} sm={9}>
        <Icons name={item.title} />
        {item.title}&nbsp;
        <Typography variant="caption">لینک: </Typography>
        <Link href={item.link} color="#ffa82e">
          {item.link}
        </Link>
      </Grid>
      <Grid item xs={12} sm={3} container justifyContent="flex-end">
        <Button
          variant="text"
          color="warning"
          onClick={() => HandleEdit(item)}
          disabled={isExpand}
        >
          <EditIcon />
          &nbsp; ویرایش
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={() => HandleDeleteModal(item.id)}
        >
          <DeleteIcon />
          &nbsp; حذف
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={isExpand} timeout="auto" unmountOnExit>
          <ModifyLinkForm
            handleSubmit={editHandler}
            handleCancel={HandleCancel}
            defaultValues={editValues}
          />
        </Collapse>
      </Grid>
    </GridContainer>
  );
};
