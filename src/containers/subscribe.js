import React from 'react';
import { Subscribe } from '../components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function SubscribeContainer() {
	return (
		<Subscribe>
			<Subscribe.Title>Ready to watch? Enter your email to create or restart your membership.</Subscribe.Title>
			<Subscribe.Panel>
				<Subscribe.Input placeholder="Email address" />
				<Subscribe.Button>
					Get Started
					<ArrowForwardIosIcon />
				</Subscribe.Button>
			</Subscribe.Panel>
		</Subscribe>
	);
}

export default SubscribeContainer;
