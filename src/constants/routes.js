import { Home, Browse, Signin, Signup } from '../pages';

export const ROUTES = [
	{ path: '/', page: <Home /> },
	{ path: '/browse', page: <Browse /> },
	{ path: '/signup', page: <Signup /> },
	{ path: '/signin', page: <Signin /> }
];
