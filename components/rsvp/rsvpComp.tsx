import { useState } from 'react';
import { createRsvp, RsvpRequest, User } from '../../lib/firebase';
import RsvpCountDropdown from './rsvpCountDropdown';
import RsvpDropdown from './rsvpDropdown';
import RsvpSimpleDropdown from './rsvpSimpleDropdown';
import { toast } from 'react-toastify';

export interface RsvpProps {
  usersData: User[];
}

const RsvpComp = ({ usersData }: RsvpProps) => {

  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [vaccinated, setVaccinated] = useState<boolean | undefined>(undefined);
  const [acknowledgeParking, setAcknowledgeParking] = useState<boolean | undefined>(undefined);
  const [isJoining, setIsJoining] = useState<boolean | undefined>(undefined);
  const [count, setCount] = useState<number>(0);
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const isDisabled = () => {
    if (isJoining) {
      return !(count > 0 && selectedUser && email.length > 0 && vaccinated !== undefined && acknowledgeParking !== undefined)
    } else {
      return !(selectedUser && isJoining === false);
    }
  }

  const setJoining = (value: boolean) => {
    if (value) {
      setIsJoining(true);
    } else {
      setVaccinated(undefined);
      setAcknowledgeParking(undefined);
      setIsJoining(false);
      setCount(0);
      setDietaryRestrictions("");
      setEmail(""); 
    }
  }

  const submitData = async () => {
    const request: RsvpRequest = {
      doc: {
        email,
        dietaryRestrictions,
        userId: (selectedUser as any).id,
        isJoining: !!isJoining,
        everyoneVaccinated: !!vaccinated,
        acknowledgeParking: !!acknowledgeParking,
        count,
        name: (selectedUser as any).name,
      }
    }

    setSelectedUser(undefined);
    setVaccinated(undefined);
    setAcknowledgeParking(undefined);
    setIsJoining(undefined);
    setCount(0);
    setDietaryRestrictions("");
    setEmail(""); 

    return createRsvp(request);
  }
  
  const handleSubmit = async () => {
    await toast.promise(
      submitData,
      {
        pending: 'Submitting RSVP...',
        error: 'RSVP Submission Failed. Please Try Again.',
        success: 'Submitted RSVP'
      },
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,  
        theme: "light"
      }
    );
  };

  return (
    <div className="rsvp-overall-container">
      <div className="rsvp-container">
        <p className="rsvp-title">
          Will you be
        <span className="joining">Joining us</span>
        <span className="question-mark">?</span>
        </p>
        <div className="vert-line"></div>
        <p className="rsvp-label">First and Last Name</p>
        <RsvpDropdown usersData={usersData} updateUser={setSelectedUser} user={selectedUser}  />
        {selectedUser && <div className="full-width flex-center">
          <div className="joining-container full-width flex-center">
            <p className="rsvp-label">Will you be joining us?</p>
            <RsvpSimpleDropdown updateBoolean={setJoining} />
          </div>
          {isJoining && <div className="full-width flex-center">
            <div className="count-container full-width flex-center">
              <p className="rsvp-label">How many will be joining us?</p>
              <RsvpCountDropdown updateCount={setCount} hasPlusOne={selectedUser?.hasPlusOne} />
            </div>
            <div className="vaccinated-container full-width flex-center">
              <p className="rsvp-label">{selectedUser?.hasPlusOne ? "Are you both vaccinated against COVID-19?" : "Are you vaccinated against COVID-19?"}</p>
              <RsvpSimpleDropdown updateBoolean={setVaccinated} />
            </div>
            <div className="parking-container full-width flex-center">
              <p className="rsvp-label">I understand there is no parking available at the venue.</p>
              <RsvpSimpleDropdown updateBoolean={setAcknowledgeParking} yesText="yes, I have reviewed the parking and lyft information." />
            </div>
            <div className="email-container full-width flex-center">
              <p className="rsvp-label">Email Address:</p>
              <input autoComplete="off" className="rsvp-input no-select" type="text" id="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
            <div className="diet-container full-width flex-center">
              <p className="rsvp-label">Dietary Restrictions:</p>
              <input autoComplete="off" className="rsvp-input no-select" type="text" id="diet" value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.currentTarget.value)} />
            </div>
          </div>}
          <div className="submit-container full-width flex-center">
            <button disabled={isDisabled()} className="rsvp-button" onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default RsvpComp;
