import { RouteComponentProps } from '@reach/router';
import React from 'react';

import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';

const Profile = (props: RouteComponentProps) => {
  return (
    <Layout>
      <ProfileIcon
        userName="Renzo Tejada"
        imageUrl="https://pm1.narvii.com/6533/74a6e18c1585abd38dfc1d5c2484ade0da83d79b_00.jpg"
      />
    </Layout>
  );
};

export default Profile;
