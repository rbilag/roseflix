import axios from 'axios';

const instance = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v1`
});

instance.interceptors.request.use((req) => {
	console.log(`${req.method} ${req.url}`);
	if (req.url !== '/' && req.url !== '/signin' && req.url !== '/signup') {
		req.headers = { ...req.headers, Authorization: `Basic ${localStorage.getItem('roseflix-auth')}` };
	}
	return req;
});

export default instance;
