import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

export const UsersList = ({ users }) => {
  if (!users.length) return <i>Users not found!</i>;
  return (
    <div className='users__container'>
      {users.map((user) => (
        <NavLink to={`/users/${user.id}`}  key={user.id} className='user'>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        </NavLink>
      ))}
    </div>
  );
};
