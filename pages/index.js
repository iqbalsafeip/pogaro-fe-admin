import Detail from './Detail';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Reviews from './Reviews';

const pages = [
    {
        name: 'Home',
        component: Home
    },
    {
        name : 'Detail',
        component: Detail
    },
    {
        name : 'Reviews',
        component: Reviews
    },
    {
        name : 'Login',
        component : Login
    },
    {
        name : 'Register',
        component : Register
    }
]

export default pages;