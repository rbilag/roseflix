import React, { useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { BannerContainer, FaqsContainer, FeatureContainer, FooterContainer, HeaderContainer } from '../containers';

function Home() {
	const [ isHeaderShown, setHeaderShown ] = useState(false);

	const handleOnScroll = (scrollTop) => {
		if (scrollTop > 100 && !isHeaderShown) {
			setHeaderShown(true);
		} else if (scrollTop <= 100 && isHeaderShown) {
			setHeaderShown(false);
		}
	};
	return (
		<Scrollbar noDefaultStyles className="main-scrollbar" onScroll={({ scrollTop }) => handleOnScroll(scrollTop)}>
			<HeaderContainer isHeaderShown={isHeaderShown} />
			<BannerContainer />
			<FeatureContainer />
			<FaqsContainer />
			<FooterContainer />
		</Scrollbar>
	);
}

export default Home;
