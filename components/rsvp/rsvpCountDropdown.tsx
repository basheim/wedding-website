import { useState } from 'react';
import useComponentVisible from '../../lib/use-component-visibile';

export interface RsvpCountDropdownProps {
  updateCount: (value: number) => void;
  hasPlusOne: boolean | undefined;
}

const RsvpCountDropdown = ({ updateCount, hasPlusOne }: RsvpCountDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(undefined);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const updateSelectedValue = (value: number) => {
    setSelectedValue(value);
    updateCount(value);
    setIsComponentVisible(false);
  };

  return (
    <div ref={ref} className="searchable-dropdown-container no-select">
      {!isComponentVisible && <input type="button" className="searchable-dropdown-input no-select" value={selectedValue === undefined ? "Select Option..." : selectedValue} onClick={() => setIsComponentVisible(!isComponentVisible)} />}
      {isComponentVisible && <div className="searchable-dropdown-list-container no-select">
        <ul className="searchable-dropdown-list no-select no-search">
          <li className="top" value="1" key="1" onClick={() => updateSelectedValue(1)}>
            <div className="centering-div">
              <p>1</p>
            </div>
          </li>
          {hasPlusOne && <li value="2" key="2" onClick={() => updateSelectedValue(2)}>
            <div className="centering-div">
              <p>2</p>
            </div>
          </li>}
        </ul>
      </div>}
    </div>
  )
}

export default RsvpCountDropdown;
