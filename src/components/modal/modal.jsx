import styles from './styles.module.css'
import closeIcon from '../../assets/close-icon.svg'
import { createPortal } from 'react-dom'
import PropTypes from "prop-types";

export const Modal = ({ onClose, children }) => {
  return createPortal(
    <>
      <div className={styles.overlay} onMouseDown={onClose} />
      <div className={styles.modal}>
        {children}
        <button className={styles.button} onClick={onClose}>
          <img src={closeIcon} alt="Закрыть" className={styles.image} />
        </button>
      </div>
    </>,
    document.getElementById('modal'),
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
