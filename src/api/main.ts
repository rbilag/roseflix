import axios from 'axios';
import { ROUTES } from '../constants/routes';

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v1`
});

instance.interceptors.request.use((req) => {
	if (req.url !== ROUTES.HOME.path && req.url !== ROUTES.SIGNIN.path && req.url !== ROUTES.SIGNUP.path) {
		req.headers = { ...req.headers, Authorization: `Basic ${localStorage.getItem('roseflix-auth')}` };
	}
	return req;
});

export default instance;
