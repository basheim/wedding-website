import { useState, useEffect, useRef } from 'react';
import { User } from '../../lib/firebase';
import useComponentVisible from '../../lib/use-component-visibile';

export interface RsvpDropdownProps {
  usersData: User[];
  user: User | undefined;
  updateUser: (user: User) => void;
}

const RsvpDropdown = ({ usersData, user, updateUser }: RsvpDropdownProps) => {
  const [selectedUser, setSelectedUser] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<string>("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  
  const getUserList = () => {
    const items = [];
    for (const user of usersData.sort((a, b) => a.name.toLowerCase().charAt(0).localeCompare(b.name.toLowerCase().charAt(0)))) {
      let nameString = user.name;
      if (user.hasPlusOne) {
        nameString = `${user.name} & ${user.plusOne}`;
      }
      if (nameString.toLowerCase().includes(filter.toLowerCase())) {
        items.push(
          <li value={nameString} key={user.id} onClick={() => updateSelectedUser(user, nameString)}>
            <div className="centering-div">
              <p>{nameString}</p>
            </div>
          </li>
        );
      }
    }
    return items;
  };

  const [userList, setUserList] = useState<JSX.Element[]>(getUserList());

  useEffect(() => {
    setUserList(getUserList());
  }, [filter]);

  const updateSelectedUser = (user: User, name: string) => {
    setSelectedUser(name);
    updateUser(user);
    setFilter("");
    setIsComponentVisible(false);
  };

  return (
    <div ref={ref} className="searchable-dropdown-container no-select">
      {!isComponentVisible && <input type="button" className="searchable-dropdown-input no-select" value={ user ?  selectedUser :  "Select Name..."} onClick={() => setIsComponentVisible(!isComponentVisible)}/>}
      {isComponentVisible && <input className="search-bar no-select" type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} placeholder="Search..." />}
      {isComponentVisible && <div className="searchable-dropdown-list-container no-select">
        <ul className="searchable-dropdown-list no-select">
          {userList}
        </ul>
      </div>}
    </div>
  )
}

export default RsvpDropdown;
