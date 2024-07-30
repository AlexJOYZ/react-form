import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Modal.module.css';

export const Modal = ({ title, description, setIsModal }) => {
  return (
    <div className={classes.modal} onClick={() => setIsModal(false)}>
      <div className={classes.modal__content} onClick={(event)=> event.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <FontAwesomeIcon
          icon={faXmark}
          size='2xl'
          className={classes.close__btn}
          onClick={() => setIsModal(false)}
        />
      </div>
    </div>
  );
};
