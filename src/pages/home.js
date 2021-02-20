import React from 'react';
import { BannerContainer, FaqsContainer, FeatureContainer, FooterContainer, HeaderContainer } from '../containers';

function Home() {
	return (
		<React.Fragment>
			<HeaderContainer />
			<BannerContainer />
			<FeatureContainer />
			<FaqsContainer />
			<FooterContainer />
		</React.Fragment>
	);
}

export default Home;
