import React, { useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { FooterContainer, HeaderContainer } from '../containers';
import mainHttp from '../api/mainEndpoints';
import { useUser } from '../context/UserContext';

function Signin() {
	const { setUserDetails } = useUser();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMsg, setErrorMsg ] = useState('');
	const [ isTouched, setIsTouched ] = useState({ email: false, password: false });
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isHeaderShown, setHeaderShown ] = useState(false);
	const emailInvalid = isTouched.email && email === '';
	const passwordInvalid = isTouched.password && password === '';
	const canProceed = password && email && !passwordInvalid && !emailInvalid;

	const handleSignin = (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		if (canProceed) {
			mainHttp
				.signin({ email, password })
				.then(({ authorization, data }: any) => {
					setIsLoading(false);
					localStorage.setItem('roseflix-auth', authorization);
					localStorage.setItem('roseflix-user', JSON.stringify(data.userDetails));
					setUserDetails(data.userDetails);
				})
				.catch(({ response }) => {
					setIsLoading(false);
					setErrorMsg(response.data.message);
				});
		}
	};

	const handleOnScroll = (scrollTop: number) => {
		if (scrollTop > 100 && !isHeaderShown) {
			setHeaderShown(true);
		} else if (scrollTop <= 100 && isHeaderShown) {
			setHeaderShown(false);
		}
	};

	return (
		<Scrollbar noDefaultStyles className="main-scrollbar" onScroll={({ scrollTop }: any) => handleOnScroll(scrollTop)}>
			<HeaderContainer logoOnly isHeaderShown={isHeaderShown} />
			<Form>
				<Form.Title>Sign In</Form.Title>
				<Form.FormGroup onSubmit={handleSignin} method="POST">
					{errorMsg && <Form.Error className="boxed">{errorMsg}</Form.Error>}
					<Form.Input
						placeholder="Email or phone number"
						value={email}
						onChange={({ target }: any) => {
							if (!isTouched.email)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, email: true };
								});
							setEmail(target.value);
						}}
						className={emailInvalid ? 'has-error' : ''}
					/>
					{emailInvalid && <Form.Error>Please enter your email or phone number.</Form.Error>}
					<Form.Input
						type="password"
						placeholder="Password"
						autoComplete="off"
						value={password}
						onChange={({ target }: any) => {
							if (!isTouched.password)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, password: true };
								});
							setPassword(target.value);
						}}
						className={passwordInvalid ? 'has-error' : ''}
					/>
					{passwordInvalid && <Form.Error>Please enter your password.</Form.Error>}
					<Form.Button disabled={!canProceed || isLoading} type="submit">
						{isLoading ? (
							<React.Fragment>
								<Form.Spinner />Signing in...
							</React.Fragment>
						) : (
							'Sign In'
						)}
					</Form.Button>
				</Form.FormGroup>
				<Form.Text>
					New to Roseflix? <Form.Link to={ROUTES.SIGNUP.path}>Sign up now</Form.Link>.
				</Form.Text>
				<Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
			</Form>
			<FooterContainer />
		</Scrollbar>
	);
}

export default Signin;
