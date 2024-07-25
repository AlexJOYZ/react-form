import { useContext, useEffect, useState } from 'react';
import { UsersService } from '../API/UsersService';
import { UsersContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useUsers } from '../hooks/useUsers';
import '../styles/sidebar.css';
import { SidebarFilter } from './SidebarFilter';
import { SidebarUsers } from './SidebarUsers';

export const Sidebar = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [search, setSearch] = useState('');
  const [fetchUsers, isUsersLoading, usersError] = useFetching(async () => {
    const res = await UsersService.getAll();
    setUsers(res.data);
  });


  const searchedUsers = useUsers(users, search);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <aside className='sidebar'>
      <SidebarFilter
        search={search}
        setSearch={setSearch}
      />
      <SidebarUsers
        users={searchedUsers}
        isLoading={isUsersLoading}
        error={usersError}
      />
    </aside>
  );
};
