import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Loader } from './components/UI/loader/Loader';
import { ErrorPage } from './pages/ErrorPage';
import { UserIdPage } from './pages/UserIdPage';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: Loader ,
    children: [{ path: '/users/:userId', element: <UserIdPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
