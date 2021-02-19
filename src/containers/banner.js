import React from 'react';
import { Banner } from '../components';
import SubscribeContainer from './subscribe';

function BannerContainer() {
	return (
		<Banner>
			<Banner.Title>Unlimited movies, TV shows, and more.</Banner.Title>
			<Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
			<SubscribeContainer />
		</Banner>
	);
}

export default BannerContainer;
