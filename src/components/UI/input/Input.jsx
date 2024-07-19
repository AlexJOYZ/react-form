import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Input.module.css';

export const Input = ({ type, ...props }) => {
  return (
    <div
      className={
        type === 'search'
          ? classes.input__container + ' ' + classes.search
          : classes.input__container
      }
    >
      <input className={classes.input} {...props} />
      <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' style={{ color: '#999' }} />
    </div>
  );
};
