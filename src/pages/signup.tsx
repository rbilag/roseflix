import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';
import { Form } from '../components';
import { ROUTES } from '../constants/routes';
import { FooterContainer, HeaderContainer } from '../containers';
import mainHttp from '../api/mainEndpoints';

function Signup() {
	const history = useHistory();
	const location = useLocation();
	const [ email, setEmail ] = useState(location.state || '');
	const [ phone, setPhone ] = useState('');
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isTouched, setIsTouched ] = useState({ email: false, phone: false, password: false, name: false });
	const [ isAvailable, setIsAvailable ] = useState({ email: true, phone: true });
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isHeaderShown, setHeaderShown ] = useState(false);
	const emailInvalid = isTouched.email && email === '';
	const nameInvalid = isTouched.name && name === '';
	const phoneInvalid = isTouched.phone && phone.length !== 11;
	const passwordInvalid = isTouched.password && (password.length < 4 || password.length > 60);
	const canProceed =
		password && email && phone && name && !passwordInvalid && !emailInvalid && !phoneInvalid && !nameInvalid;

	const handleSignup = (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		if (canProceed) {
			mainHttp
				.signup({ email, phone, password, profiles: [ { name } ] })
				.then(({ success }: any) => {
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

	const checkAvailability = async (value: string, type: string) => {
		mainHttp
			.checkAvailability({ value, type })
			.then((resp: any) => {
				if (type === 'email') setIsAvailable({ ...isAvailable, email: resp.isAvailable });
				else setIsAvailable({ ...isAvailable, phone: resp.isAvailable });
			})
			.catch(({ response }) => {
				console.log(response.data);
			});
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
				<Form.Title>Sign Up</Form.Title>
				<Form.FormGroup onSubmit={handleSignup} method="POST">
					<Form.Input
						placeholder="Email"
						value={email}
						onChange={({ target }: any) => {
							if (!isTouched.email)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, email: true };
								});
							checkAvailability(target.value, 'email');
							setEmail(target.value);
						}}
						className={emailInvalid ? 'has-error' : ''}
					/>
					{emailInvalid && <Form.Error>Please enter an email address.</Form.Error>}
					{!isAvailable.email && <Form.Error>{email} already taken, please try another email.</Form.Error>}
					<Form.Input
						placeholder="Phone"
						value={phone}
						onChange={({ target }: any) => {
							if (!isTouched.phone)
								setIsTouched((prevIsTouched) => {
									return { ...prevIsTouched, phone: true };
								});
							checkAvailability(target.value, 'phone');
							setPhone(target.value);
						}}
						className={phoneInvalid ? 'has-error' : ''}
					/>
					{phoneInvalid && <Form.Error>Please enter an 11-digit phone number.</Form.Error>}
					{!isAvailable.phone && <Form.Error>{phone} already taken, please try another number.</Form.Error>}
					<Form.Input
						placeholder="Display Name"
						value={name}
						onChange={({ target }: any) => {
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
						onChange={({ target }: any) => {
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
						{isLoading ? (
							<React.Fragment>
								<Form.Spinner />Signing up...
							</React.Fragment>
						) : (
							'Sign Up'
						)}
					</Form.Button>
				</Form.FormGroup>
				<Form.Text>
					Already a user? <Form.Link to={ROUTES.SIGNIN.path}>Sign in now</Form.Link>.
				</Form.Text>
				<Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
			</Form>
			<FooterContainer />
		</Scrollbar>
	);
}

export default Signup;
