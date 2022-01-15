import SidebarItem from './sidebar-item';

export interface SidebarProps {
  onClickEffect?: () => void;
}

const Sidebar = ({ onClickEffect }: SidebarProps) => {
  return (
    <div className="sidebar">
      <SidebarItem onClickEffect={onClickEffect} text="HOME" elementId="home"/>
      <SidebarItem onClickEffect={onClickEffect} text="THE DAY" elementId="the-day"/>
      <SidebarItem onClickEffect={onClickEffect} text="LOVE STORY" elementId="love-story"/>
      {/* <SidebarItem text="RSVP" element=".rsvp"/>
      <SidebarItem text="OUR STORY" element=".ourStory"/> */}
    </div>
  )
}

export default Sidebar;
