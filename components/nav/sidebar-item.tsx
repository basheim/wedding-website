import styles from '../../styles/sidebar.module.css'

export interface SidebarItemProps {
  element: string;
  text: string;
}

const SidebarItem = ({element, text}: SidebarItemProps) => {

  const onClick = () => {
    const titleElement = document.getElementById(element);
    titleElement?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <p className={styles.itemText}>{text}</p>
    </div>
  )
}

export default SidebarItem;
