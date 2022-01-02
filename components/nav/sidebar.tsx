import styles from '../../styles/Sidebar.module.css'
import SidebarItem from './sidebar-item';

export interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem text="HOME" elementId="home"/>
      <SidebarItem text="THE DAY" elementId="the-day"/>
      {/* <SidebarItem text="RSVP" element=".rsvp"/>
      <SidebarItem text="OUR STORY" element=".ourStory"/> */}
    </div>
  )
}

export default Sidebar;
