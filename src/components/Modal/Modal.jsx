import css from './Modal.module.css'

import { ContactForm } from '../ContactForm/ContactForm';

const Modal = ({ toggleModal }) => {
  return (
    <div className={css.modal}>
      <div onClick={toggleModal} className={css.overlay}></div>
      <div className={css.modalContent}>
        <h2>Hello Modal</h2>
      <ContactForm></ContactForm>
        <button className={css.closeButton} onClick={toggleModal}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;