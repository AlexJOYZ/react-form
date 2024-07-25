import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Input.module.css';

export const Input = ({ type,titleLabel,anotherPlaceholder,anotherValue,anotherOnChange, ...props }) => {
  return (
    <div className={classes.input__container + ' ' + classes[type]}>
      <label htmlFor={classes.input}>{titleLabel}</label>
      <input className={classes.input} {...props}  />
      <input className={classes.input2} {...props} placeholder={anotherPlaceholder} value={anotherValue} onChange={anotherOnChange}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} size='xs' style={{ color: '#999' }} />
    </div>
  );
};
