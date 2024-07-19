import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UsersService } from '../API/UsersService';
import { Loader } from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

import { Button } from '../components/UI/button/Button';
import '../styles/userId.css';

export const UserIdPage = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const [fetchUser, isUserLoading, userErr] = useFetching(async () => {
    const response = await UsersService.getUserById(userId);
    setUser(response.data);
  });
  useEffect(() => {
    fetchUser();
  }, [userId]);
  return (
    <article className='user__page'>
      {isUserLoading ? (
        <Loader />
      ) : (
        <div className='user__info'>
          <img src={user.avatar} alt='user avatar' />
          <div className='user__text'>
            <h1>
              {user.firstName} {user.lastName} {user.favorite ? '★' : '☆'}
            </h1>
            {user.twitter && (
              <a target='_blank' href={`https://twitter.com/${user.twitter}`}>
                {user.twitter}
              </a>
            )}
            {user.notes && <p>{user.notes}</p>}
            <form action='edit'>
              <Button type='submit'>Edit</Button>
              <Button type='delete'>Delete</Button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};
