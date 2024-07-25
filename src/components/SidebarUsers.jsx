import { Loader } from './UI/loader/Loader';
import { UsersList } from './UsersList';

export const SidebarUsers = ({ users, isLoading, error }) => {
  return (
    <div>
      {error && <p>Возникла ошибка! {error}</p>}
      {isLoading ? <Loader /> : <UsersList users={users}  />}
    </div>
  );
};
