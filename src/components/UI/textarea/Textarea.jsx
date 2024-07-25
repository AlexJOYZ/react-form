import cl from './Textarea.module.css';

export const Textarea = ({ type, textLabel, ...props }) => {
  return (
    <div className={cl[type]}>
      <label htmlFor={cl.textarea}>{textLabel}</label>
      <textarea {...props} className={cl.textarea} />
    </div>
  );
};
