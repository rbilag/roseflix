import { Home, Browse, Signin, Signup } from '../pages';

export const ROUTES = {
	HOME: { path: '/', page: <Home /> },
	BROWSE: { path: '/browse', page: <Browse /> },
	SIGNUP: { path: '/signup', page: <Signup /> },
	SIGNIN: { path: '/signin', page: <Signin /> }
};
