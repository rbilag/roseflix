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

const checkAvailability = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('/users/checkAvailability', data);
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

const upsertProfile = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('/users/upsertProfile', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const deleteProfile = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post('/users/deleteProfile', data);
			resolve(response.data);
		} catch (error) {
			reject(error);
		}
	});
};

const mainHttp = {
	signup,
	signin,
	checkAvailability,
	upsertProfile,
	deleteProfile
};

export default mainHttp;
