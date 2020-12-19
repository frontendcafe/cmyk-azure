import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileIcon from '../components/ProfileIcon';
import User from '../models/User';
import { getUserById } from '../services/spotify/user';

const Profile = () => {
  const { profileId }: { profileId: string } = useParams();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    getUserById(profileId).then((u: User | null) => setUser(u));
  }, []);

  return (
    <>
      <ProfileIcon
        imageUrl={user?.imageUrl ?? ''}
        userName={user?.name ?? ''}
      />
    </>
  );
};

export default Profile;
