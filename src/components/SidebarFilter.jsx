import { useNavigate } from "react-router-dom";
import { Button } from "./UI/button/Button";
import { Input } from "./UI/input/Input";

export const SidebarFilter = ({search,setSearch}) => {
  const navigation = useNavigate()
  return (
    <div className="sidebar__filter">
      <Input placeholder="Search" type='search' value={search} onChange={(event)=> setSearch(event.target.value)} />
      <Button type='submit' onClick={()=>navigation('/edit')}>New</Button>
    </div>
  )
};