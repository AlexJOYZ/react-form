import { useMemo } from 'react';

export const useUsers = (users, search) => {
  const searchedUsers = useMemo(() => {
    return users.filter((user) =>
      (user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()).includes(
        search.toLowerCase(),
      ),
    );
  }, [search, users]);
  return searchedUsers;
};
