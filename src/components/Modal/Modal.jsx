import css from "./Modal.module.css";
import icons from "../../icons/symbol-defs.svg";
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { ContactForm } from "../ContactForm/ContactForm";

const Modal1 = ({ toggleModal, modal }) => {
  
  return (
/*     <div className={css.modal}>
      <div onClick={toggleModal} className={css.overlay}></div>
      <div className={css.modalContent}>
        <ContactForm></ContactForm>
        <Button
          onClick={toggleModal}
          variant="contained"
          sx={{
            padding: "0px",
            minHeight: "0px",
            minWidth: "0px",
            width: "30px",
            height: "30px",
            position: "absolute",
            right: '10px',
            top: '10px',
          }}
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-menu-close`}></use>
          </svg>
        </Button>
      </div>
    </div> */
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={toggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modal}>
          <Box className={css.modalContent}>
          <ContactForm></ContactForm>
        <Button
          onClick={toggleModal}
          variant="contained"
          sx={{
            padding: "0px",
            minHeight: "0px",
            minWidth: "0px",
            width: "30px",
            height: "30px",
            position: "absolute",
            right: '10px',
            top: '10px',
          }}
        >
          <svg className={css.icon}>
            <use href={`${icons}#icon-menu-close`}></use>
          </svg>
        </Button>
          </Box>
        </Fade>
      </Modal>
  );
};

export default Modal1;
