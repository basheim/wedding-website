export interface SidebarItemProps {
  elementId: string;
  text: string;
  onClickEffect?: () => void;
}

const SidebarItem = ({elementId, text, onClickEffect}: SidebarItemProps) => {

  const onClick = () => {
    onClickEffect && onClickEffect();
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
