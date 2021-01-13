//CORE IMPORTS
//HOME
import Home from './pages/Home';
//PROFILE
import Profile from './pages/Profile';
//ABOUT US
import AboutUs from './pages/AboutUs';

const ROUTES = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    path: '/Profile/:profileId',
    component: Profile,
    name: 'Profile',
  },
  {
    path: '/aboutus',
    component: AboutUs,
  },
];

export default ROUTES;
