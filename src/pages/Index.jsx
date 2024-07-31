import '../styles/App.css';
import userIcon from '../assets/user-not-select.webp'

export const Index = () => {
  return (
    <p id='zero-state'>
      <img src={userIcon}/>
      Please select a user to view the information.
    </p>
  );
};
