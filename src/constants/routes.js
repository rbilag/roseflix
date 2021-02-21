import { Home, Browse, Signin, Signup } from '../pages';

export const ROUTES = {
	HOME: { path: '/', page: <Home />, isProtected: false },
	BROWSE: { path: '/browse', page: <Browse />, isProtected: true },
	SIGNUP: { path: '/signup', page: <Signup />, isProtected: false },
	SIGNIN: { path: '/signin', page: <Signin />, isProtected: false }
};
