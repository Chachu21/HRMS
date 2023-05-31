import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
//import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
//import Typography from "@mui/material/Typography";
import ApplicantRegister from "../../pages/Registration/ApplicantRegister";
import { useDispatch, useSelector } from "react-redux";
import { setIsClose, setIsOpen } from "../../redux/reducers/loginReducer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    overflow: "hidden", // set overflow to "hidden" to stop scrolling
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ children }) {
  const isOpen = useSelector((state) => state.login.isOpen);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(setIsOpen());
  };
  const handleClose = () => {
    dispatch(setIsClose());
  };

  return (
    <div>
      <div
        className="w-[80px] h-[35px] flex justify-center items-center bg-blue-500  mx-2 rounded-md text-white"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Sign Up
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <ApplicantRegister />
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </BootstrapDialog>
    </div>
  );
}
