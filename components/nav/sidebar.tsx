import type { NextPage } from 'next'
import styles from '../../styles/sidebar.module.css'
import SidebarItem from './sidebar-item';

export interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <SidebarItem text="HOME" element=".home"/>
      <SidebarItem text="THE DAY" element=".the-day"/>
      <SidebarItem text="RSVP" element=".rsvp"/>
      <SidebarItem text="OUR STORY" element=".our-story"/>
    </div>
  )
}

export default Sidebar;
