//CORE IMPORTS
//HOME
import Home from './pages/Home';
//PROFILE
import Profile from './pages/Profile';

const ROUTES = [
  {
    path: '/Home',
    component: Home,
    name: 'Home',
  },
  {
    path: '/Profile/:profileId',
    component: Profile,
    name: 'Profile',
  },
];

export default ROUTES;
