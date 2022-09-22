import Dashboard from '../components/users/Dashboard';
import Profile from '../components/users/Profile';

const routes = [
    { path: '/users', exact: true, name: 'Users'},
    { path: '/users/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    { path: '/users/profile', exact: true, name: 'Profile', component: Profile},
];

export default routes;