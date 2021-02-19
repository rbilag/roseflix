import React from 'react';
import BannerContainer from '../containers/banner';
import FaqsContainer from '../containers/faqs';
import FeatureContainer from '../containers/feature';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';

function Home() {
	return (
		<div className="home">
			<HeaderContainer />
			<BannerContainer />
			<FeatureContainer />
			<FaqsContainer />
			<FooterContainer />
		</div>
	);
}

export default Home;
