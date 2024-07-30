import classes from './Button.module.css'
export const Button = ({children,type,...props}) => {
  return (
    <button {...props} className={classes.button + ' '+ classes[type]} type={type}>
      {children}
    </button>
  )
};