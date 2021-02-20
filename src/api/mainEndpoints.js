import axios from './main';

const signup = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('/signup', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const signin = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('/signin', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const mainHttp = {
	signup,
	signin
};

export default mainHttp;
