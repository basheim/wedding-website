import { useRouter } from 'next/router';

export interface SidebarItemNavProps {
  page: string;
  text: string;
  onClickEffect?: () => void;
}

const SidebarItemNav = ({page, text, onClickEffect}: SidebarItemNavProps) => {
  const router = useRouter();

  const onClick = async () => {
    onClickEffect && onClickEffect();
    await router.push(page);
  };

  return (
    <div className="item-container no-select" onClick={onClick}>
      <p className="item-text no-select">{text}</p>
    </div>
  )
}

export default SidebarItemNav;
