import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { IModalProps } from "../../../models/modal";

const Modal: React.FC<IModalProps> = ({
  title,
  description,
  body,
  action,
  open,
  handleClose,
  maxWidth,
  dividers,
}) => {
  const scroll: DialogProps["scroll"] = "paper";

  return (
    <Dialog
      open={!!open}
      onClose={() => handleClose && handleClose(false)}
      scroll={scroll}
      aria-labelledby="form-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
      maxWidth={maxWidth}
    >
      {title && (
        <>
          <DialogTitle
            id="scroll-dialog-title"
            component={Typography}
            variant="h6"
          >
            {title}
          </DialogTitle>
          <Divider />
        </>
      )}
      <DialogContent dividers={dividers}>
        {description && (
          <DialogContentText component={Typography} variant="body1">
            {description}
          </DialogContentText>
        )}
        {body}
      </DialogContent>
      <DialogActions>{action}</DialogActions>
    </Dialog>
  );
};

export default Modal;
