import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Auth from "./Auth/Auth";
const LoginMain = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "",
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          color: "white",
          fontSize: "26px",
          textTransform: "capitalize",
          fontWeight: "700",
          lineHeight: "18.4px",
        }}
      >
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Auth />
        </Box>
      </Modal>
    </div>
  );
};

export default LoginMain;
