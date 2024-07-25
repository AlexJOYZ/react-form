import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';
import { useState } from 'react';

export const UsersList = ({ users, setUsers }) => {
  if (!users.length) return <i>Users not found!</i>;
  return (
    <div className='users__container'>
      {users.map((user) => (
        <NavLink
          to={`/users/${user.id}`}
          key={user.id}
          className={({ isActive, isPending }) =>
            isActive ? 'active user' : isPending ? 'pending user' : 'user'
          }
        >
          <h3>
            {user.firstName} {user.lastName}
          </h3>
        </NavLink>
      ))}
    </div>
  );
};
