import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import '../styles/App.css';

export const Layout = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Outlet />
    </div>
  );
};
