import { useRouter } from 'next/router';

export interface SidebarItemProps {
  elementId: string;
  text: string;
  onClickEffect?: () => void;
}

const SidebarItem = ({elementId, text, onClickEffect}: SidebarItemProps) => {
  const router = useRouter();

  const onClick = async () => {
    onClickEffect && onClickEffect();
    if (router.pathname && !router.pathname.includes("home")) {
      await router.push("/home");
    }
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className="item-container no-select" onClick={onClick}>
      <p className="item-text no-select">{text}</p>
    </div>
  )
}

export default SidebarItem;
