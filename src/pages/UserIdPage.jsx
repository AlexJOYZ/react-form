import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UsersService } from '../API/UsersService';
import { Loader } from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

import { Button } from '../components/UI/button/Button';
import { UsersContext } from '../context';
import '../styles/userId.css';

export const UserIdPage = () => {
  const { users, setUsers } = useContext(UsersContext);

  const { userId } = useParams();
  const navigation = useNavigate();
  const [user, setUser] = useState({});

  const [fetchUser, isUserLoading, userErr] = useFetching(async () => {
    const response = await UsersService.getUserById(userId);
    setUser(response.data);
  });
  useEffect(() => {
    fetchUser();
  }, [userId]);

  

  const deleteUser = (event) => {
    event.preventDefault();
    setUsers(users.filter((user) => userId !== user.id));
    UsersService.deleteUserData(userId);
    navigation('/');
  };

  const toggleFavorite = () => {
    setUser({ ...user, favorite: !user.favorite });
    UsersService.updateUserDataById({ ...user, favorite: !user.favorite },userId);

  };


  if (userErr) return <p>{userErr}</p>

  return (
    <article className='user__page'>
      {isUserLoading ? (
        <Loader />
      ) : (
        <div className='user__info'>
          <img src={user.avatar} alt='user avatar' />
          <div className='user__text'>
            <h1>
              {user.firstName} {user.lastName}{' '}
              <span onClick={toggleFavorite}>{user.favorite ? '★' : '☆'}</span>
            </h1>
            {user.twitter && (
              <a target='_blank' href={`https://twitter.com/${user.twitter}`}>
                {user.twitter}
              </a>
            )}
            {user.notes && <p>{user.notes}</p>}
            <form className='user__form' action='edit'>
              <Button
                type='submit'
                onClick={() => navigation('/users/edit/' + userId, { replace: true })}
              >
                Edit
              </Button>
              <Button type='delete' onClick={(e) => deleteUser(e)}>
                Delete
              </Button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};
