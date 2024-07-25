import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useState } from 'react';
import { Layout } from './components/Layout';
import { Loader } from './components/UI/loader/Loader';
import { UsersContext } from './context';
import { ErrorPage } from './pages/ErrorPage';
import { UserEdit } from './pages/UserEdit';
import { UserIdPage } from './pages/UserIdPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: Loader,
    children: [
      { path: '/users/:userId', element: <UserIdPage /> },
      { path: '/edit', element: <UserEdit /> },
      { path: '/users/edit/:id', element: <UserEdit /> },
    ],
  },
]);

export const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <RouterProvider router={router} />
    </UsersContext.Provider>
  );
};
