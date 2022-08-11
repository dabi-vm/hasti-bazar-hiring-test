import Snackbar from "@mui/material/Snackbar";
import { createContext, useState } from "react";
import MuiAlert, { AlertColor } from "@mui/material/Alert";

interface ISnack {
  type: AlertColor;
  message: string;
}
export interface IProps {
  children: any;
}

export const SnackContext = createContext({
  showAlert: (v: ISnack) => {},
  hideAlert: () => {},
});

const SnackContextProvider = ({ children }: IProps) => {
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState<ISnack>({
    type: "success",
    message: "",
  });

  const showAlert = (dataSnack: ISnack) => {
    setSnack(dataSnack);
    setOpen(true);
  };

  const hideAlert = () => {
    setOpen(false);
  };

  return (
    <SnackContext.Provider value={{ showAlert, hideAlert }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={hideAlert}
        className="dir-ltr"
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={hideAlert}
          severity={snack.type}
          sx={{ width: "100%" }}
        >
          {` ${snack.message} `}
        </MuiAlert>
      </Snackbar>
      {children}
    </SnackContext.Provider>
  );
};

export default SnackContextProvider;
