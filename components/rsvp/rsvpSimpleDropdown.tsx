import { useState } from 'react';
import useComponentVisible from '../../lib/use-component-visibile';

export interface RsvpSimpleDropdownProps {
  updateBoolean: (value: boolean) => void;
  yesText?: string;
}

const RsvpSimpleDropdown = ({ updateBoolean, yesText = "yes" }: RsvpSimpleDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<boolean | undefined>(undefined);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  
  const updateSelectedValue = (value: string) => {
    setSelectedValue(value === yesText);
    updateBoolean(value === yesText);
    setIsComponentVisible(false);
  };

  const getString = () => {
    return selectedValue ? "yes" : "no";
  }

  return (
    <div ref={ref} className="searchable-dropdown-container no-select">
      {!isComponentVisible && <input type="button" className="searchable-dropdown-input no-select" value={selectedValue === undefined ? "Select Option..." : getString()} onClick={() => setIsComponentVisible(!isComponentVisible)}/>}
      {isComponentVisible && <div className="searchable-dropdown-list-container no-select" >
        <ul className="searchable-dropdown-list no-select no-search">
        <li className="top" value={yesText} key="yes" onClick={() => updateSelectedValue(yesText)}>
            <div className="centering-div">
              <p>{yesText}</p>
            </div>
          </li>
          <li value="no" key="no" onClick={() => updateSelectedValue("no")}>
            <div className="centering-div">
              <p>no</p>
            </div>
          </li>
        </ul>
      </div>}
    </div>
  )
}

export default RsvpSimpleDropdown;
