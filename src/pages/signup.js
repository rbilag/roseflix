import React, { useState } from 'react';
import { debounce } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { FooterContainer, HeaderContainer } from '../containers';
import mainHttp from '../api/mainEndpoints';

function Signup() {
	const history = useHistory();
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isTouched, setIsTouched ] = useState({ email: false, phone: false, password: false, name: false });
	const [ isAvailable, setIsAvailable ] = useState({ email: true, phone: true });
	const [ isLoading, setIsLoading ] = useState(false);
	const emailInvalid = isTouched.email && email === '';
	const nameInvalid = isTouched.name && name === '';
	const phoneInvalid = isTouched.phone && phone.length !== 11;
	const passwordInvalid = isTouched.password && (password.length < 4 || password.length > 60);
	const canProceed =
		password && email && phone && name && !passwordInvalid && !emailInvalid && !phoneInvalid && !nameInvalid;

	const handleSignup = (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (canProceed) {
			mainHttp
				.signup({ email, phone, password, profiles: [ { name } ] })
				.then(({ success }) => {
					// TODO prompt account succesfully created!
					setIsLoading(false);
					if (success) history.push(ROUTES.SIGNIN.path);
				})
				.catch(({ response }) => {
					setIsLoading(false);
					console.log(response.data);
				});
		}
	};

	const checkAvailability = async (value, type) => {
		mainHttp
			.checkAvailability({ value, type })
			.then((resp) => {
				if (type === 'email') setIsAvailable({ ...isAvailable, email: resp.isAvailable });
				else setIsAvailable({ ...isAvailable, phone: resp.isAvailable });
			})
			.catch(({ response }) => {
				console.log(response.data);
			});
	};

	return (
		<React.Fragment>
			<HeaderContainer logoOnly />
			<Form>
				<Form.Title>Sign Up</Form.Title>
				<Form.FormGroup onSubmit={handleSignup} method="POST">
					<Form.Input
						placeholder="Email"
						value={email}
						onChange={({ target }) => {
							if (!isTouched.email)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, email: true };
								});
							debounce(checkAvailability(target.value, 'email'));
							setEmail(target.value);
						}}
						className={emailInvalid ? 'has-error' : ''}
					/>
					{emailInvalid && <Form.Error>Please enter an email address.</Form.Error>}
					{!isAvailable.email && <Form.Error>{email} already taken, please try another email.</Form.Error>}
					<Form.Input
						placeholder="Phone"
						value={phone}
						onChange={({ target }) => {
							if (!isTouched.phone)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, phone: true };
								});
							debounce(checkAvailability(target.value, 'phone'));
							setPhone(target.value);
						}}
						className={phoneInvalid ? 'has-error' : ''}
					/>
					{phoneInvalid && <Form.Error>Please enter an 11-digit phone number.</Form.Error>}
					{!isAvailable.phone && <Form.Error>{phone} already taken, please try another number.</Form.Error>}
					<Form.Input
						placeholder="Display Name"
						value={name}
						onChange={({ target }) => {
							if (!isTouched.name)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, name: true };
								});
							setName(target.value);
						}}
						className={nameInvalid ? 'has-error' : ''}
					/>
					{nameInvalid && <Form.Error>Please enter your preferred display name.</Form.Error>}
					<Form.Input
						type="password"
						placeholder="Password"
						autoComplete="off"
						value={password}
						onChange={({ target }) => {
							if (!isTouched.password)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, password: true };
								});
							setPassword(target.value);
						}}
						className={passwordInvalid ? 'has-error' : ''}
					/>
					{passwordInvalid && <Form.Error>Your password must contain between 4 and 60 characters.</Form.Error>}
					<Form.Button disabled={!canProceed || isLoading} type="submit">
						{isLoading ? 'Signing up...' : 'Sign Up'}
					</Form.Button>
				</Form.FormGroup>
				<Form.Text>
					Already a user? <Form.Link to={ROUTES.SIGNIN.path}>Sign in now</Form.Link>.
				</Form.Text>
				<Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
			</Form>
			<FooterContainer />
		</React.Fragment>
	);
}

export default Signup;
