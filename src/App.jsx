import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

import './styles/App.css'

export const App = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Outlet />
    </div>
  );
};
