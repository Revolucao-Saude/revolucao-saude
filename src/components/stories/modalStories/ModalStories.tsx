import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Avatar, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import revolucao from "../../../assets/images/revolucao-saude.png";
import ButtonBases from "../complexButton/ComplexButton";
import "./ModalStories.css"
import CadastroStories from "../cadastroStories/CadastroStories";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "50%",
      height:"50%",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      padding: theme.spacing(2, 4, 3),
      borderRadius: "20px",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "saturate(600%) blur(10px);", 
      
      // backgroundColor: "#fff",
      //  opacity: 0.9,
      
    },
  })
);

function ModalStories() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose} />
      </Box>

      <CadastroStories />
    </div>
  );

  return (
    <div>
        
        <img className="width" onClick={handleOpen} src={revolucao} />
        {/* <Avatar className="center" sx={{ width: 110, height: 110 }}>
              <img width={100} height={100} src={revolucao}/>
        </Avatar>  */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export { ModalStories }