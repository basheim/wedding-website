import React from 'react';
import { getUsers, User } from '../lib/firebase';
import RsvpComp from '../components/rsvp/rsvpComp';
import Base from '../components/base';

interface RsvpProps {
  usersData: User[]
}

const Rsvp = ({ usersData }: RsvpProps) => {

  return (
    <Base>
      <RsvpComp usersData={usersData} />
    </Base>
  )
}

export async function getServerSideProps() {
  const usersData = await getUsers();
  return {
      props: {
          usersData
      }
  };
}

export default Rsvp;
