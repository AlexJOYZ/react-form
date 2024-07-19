import '../styles/sidebar.css';
import { SidebarFilter } from './SidebarFilter';
import { SidebarUsers } from './SidebarUsers';

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <SidebarFilter />
      <SidebarUsers />
    </aside>
  );
};
