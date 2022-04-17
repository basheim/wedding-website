import SidebarItem from './sidebar-item';
import SidebarItemNav from './sidebar-item-nav';

export interface SidebarProps {
  onClickEffect?: () => void;
}

const Sidebar = ({ onClickEffect }: SidebarProps) => {
  return (
    <div className="sidebar">
      <SidebarItem onClickEffect={onClickEffect} text="HOME" elementId="home"/>
      <SidebarItemNav onClickEffect={onClickEffect} text="THE DAY" page="/the-day"/>
      <SidebarItemNav onClickEffect={onClickEffect} text="RSVP" page="/rsvp"/>
      <SidebarItemNav onClickEffect={onClickEffect} text="GETTING THERE" page="/parking"/>
      <SidebarItemNav onClickEffect={onClickEffect} text="GIFTS" page="/gifts"/>
    </div>
  )
}

export default Sidebar;
