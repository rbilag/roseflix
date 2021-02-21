import React, { useState } from 'react';
import { Subscribe } from '../components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

function SubscribeContainer() {
	const history = useHistory();
	const [ email, setEmail ] = useState('');

	const handleSubscribe = () => {
		if (email) history.push({ pathname: ROUTES.SIGNUP.path, state: email });
	};

	return (
		<Subscribe>
			<Subscribe.Title>Ready to watch? Enter your email to create or restart your membership.</Subscribe.Title>
			<Subscribe.Panel>
				<Subscribe.Input placeholder="Email address" value={email} onChange={({ target }) => setEmail(target.value)} />
				<Subscribe.Button disabled={!email} onClick={handleSubscribe}>
					Get Started
					<ArrowForwardIosIcon />
				</Subscribe.Button>
			</Subscribe.Panel>
		</Subscribe>
	);
}

export default SubscribeContainer;
