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
    <div className="item-container" onClick={onClick}>
      <p className="item-text">{text}</p>
    </div>
  )
}

export default SidebarItem;
