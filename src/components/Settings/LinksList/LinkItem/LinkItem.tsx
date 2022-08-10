import { Grid, Button, Collapse, Typography, Link } from "@mui/material";
import { FC, memo, useContext, useState } from "react";
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
  editHandler(v: ILinkItem): void;
}
const LinkItem: FC<IProps> = ({ item, deleteHandler, editHandler }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { showModal, hideModal } = useContext(ModalContext);
  const [editValues, setEditValues] = useState<ILinkItem>();

  const HandleSelectItem = (v: ILinkItem) => {
    setEditValues(v);
    setIsExpand(true);
  };

  const HandleSubmitEdit = (v: ILinkItem) => {
    editHandler(v);
    setEditValues(undefined);
    setIsExpand(false);
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
      <Grid item xs={12} sm={9} container alignItems="center">
        <Icons name={item.title} />
        &nbsp;
        {item.title}&nbsp;
        <Typography variant="caption">لینک: </Typography>&nbsp;
        <Link href={item.link} color="#ffa82e">
          {item.link}
        </Link>
      </Grid>
      <Grid item xs={12} sm={3} container justifyContent="flex-end">
        <Button
          variant="text"
          color="warning"
          onClick={() => HandleSelectItem(item)}
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
            handleSubmit={HandleSubmitEdit}
            handleCancel={HandleCancel}
            defaultValues={editValues}
          />
        </Collapse>
      </Grid>
    </GridContainer>
  );
};

export default memo(LinkItem);