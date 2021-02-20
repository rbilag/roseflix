import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { FooterContainer, HeaderContainer } from '../containers';
import mainHttp from '../api/mainEndpoints';

function Signin() {
	const history = useHistory();
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const [ errorMsg, setErrorMsg ] = useState('');
	const passwordInvalid = password === '' || (password && password.length < 4);
	const emailInvalid = email === '';

	const handleSignin = (e) => {
		e.preventDefault();
		if (!passwordInvalid && !emailInvalid) {
			mainHttp
				.signin({ email, password })
				.then(({ authorization, data }) => {
					localStorage.setItem('roseflix-auth', authorization);
					localStorage.setItem('roseflix-user', JSON.stringify(data.userDetails));
					history.push(ROUTES.BROWSE.path);
				})
				.catch(({ response }) => {
					console.log(response.data);
					setErrorMsg(response.data.message);
				});
		}
	};

	return (
		<React.Fragment>
			<HeaderContainer logoOnly />
			<Form>
				<Form.Title>Sign In</Form.Title>
				<Form.FormGroup onSubmit={handleSignin} method="POST">
					{errorMsg && <Form.Error className="boxed">{errorMsg}</Form.Error>}
					<Form.Input
						placeholder="Email or phone number"
						value={email}
						onChange={({ target }) => setEmail(target.value)}
						className={emailInvalid ? 'has-error' : ''}
					/>
					{emailInvalid && <Form.Error>Please enter a valid email.</Form.Error>}
					<Form.Input
						type="password"
						placeholder="Password"
						autoComplete="off"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
						className={passwordInvalid ? 'has-error' : ''}
					/>
					{passwordInvalid && <Form.Error>Your password must contain between 4 and 60 characters.</Form.Error>}
					<Form.Button disabled={!password || !email || passwordInvalid || emailInvalid} type="submit">
						Sign In
					</Form.Button>
				</Form.FormGroup>
				<Form.Text>
					New to Netflix? <Form.Link to={ROUTES.SIGNUP.path}>Sign up now</Form.Link>.
				</Form.Text>
				<Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
			</Form>
			<FooterContainer />
		</React.Fragment>
	);
}

export default Signin;
