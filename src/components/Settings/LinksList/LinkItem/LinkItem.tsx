import { Grid, Button, Collapse, Typography, Link, Paper } from "@mui/material";
import { FC, memo, useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ILinkItem } from "../../../../models/links";
import { Icons } from "../../../shared/Icons/Icons";
import { ModalContext } from "../../../../context/ModalContext";
import { ModifyLinkForm } from "../../ModifyLinkForm/ModifyLinkForm";
import "./LinkItemStyles.css";
import { useTranslation } from "react-i18next";
interface IProps {
  item: ILinkItem;
  deleteHandler(id: string): void;
  editHandler(v: ILinkItem): void;
}
const LinkItem: FC<IProps> = ({ item, deleteHandler, editHandler }) => {
  const { t } = useTranslation();
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
      title: t("removeLink"),
      description: t("areYouSureToRemoveThisItem"),
      maxWidth: "xs",
      action: (
        <>
          <Button
            children={t("cancel")}
            variant="outlined"
            onClick={hideModal}
            color="warning"
            size="small"
            sx={{
              margin: 1,
            }}
          />
          <Button
            children={t("remove")}
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
    <Grid
      container
      item
      xs={12}
      component={Paper}
      variant="black80"
      className="root"
    >
      <Grid item xs={12} sm={9} container alignItems="center">
        <Icons name={item.title} />
        &nbsp;
        {item.title}&nbsp;
        <Typography variant="caption">{t("link")}: </Typography>&nbsp;
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
          &nbsp; {t("edit")}
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={() => HandleDeleteModal(item.id)}
        >
          <DeleteIcon />
          &nbsp; {t("remove")}
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
    </Grid>
  );
};

export default memo(LinkItem);
