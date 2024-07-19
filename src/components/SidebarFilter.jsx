import { Button } from "./UI/button/Button";
import { Input } from "./UI/input/Input";

export const SidebarFilter = () => {
  return (
    <div className="sidebar__filter">
      <Input placeholder="Search" type='search'/>
      <Button type='submit'>New</Button>
    </div>
  )
};