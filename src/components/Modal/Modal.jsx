import css from "./Modal.module.css";
import icons from "../../icons/symbol-defs.svg";
import { Button } from "@mui/material";

import { ContactForm } from "../ContactForm/ContactForm";

const Modal = ({ toggleModal }) => {
  return (
    <div className={css.modal}>
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
    </div>
  );
};

export default Modal;
