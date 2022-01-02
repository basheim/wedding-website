import styles from '../../styles/Sidebar.module.css'

export interface SidebarItemProps {
  elementId: string;
  text: string;
}

const SidebarItem = ({elementId, text}: SidebarItemProps) => {

  const onClick = () => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <p className={styles.itemText}>{text}</p>
    </div>
  )
}

export default SidebarItem;
