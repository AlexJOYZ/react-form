import { useEffect, useState } from 'react';
import { UsersService } from '../API/UsersService';
import { useFetching } from '../hooks/useFetching';
import { Loader } from './UI/loader/Loader';
import { UsersList } from './UsersList';

export const SidebarUsers = () => {
  const [users, setUsers] = useState([]);
  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const res = await UsersService.getAll();
    setUsers(res.data);
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {usersError && <p>Возникла ошибка! {usersError}</p>}
      {isUsersLoading ? <Loader /> : <UsersList users={users} />}
    </div>
  );
};
