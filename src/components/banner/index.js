import React from 'react';
import { Container, Inner, Title, SubTitle } from './styles/banner';

function Banner({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Banner.Title = function BannerTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Banner.SubTitle = function BannerSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Banner;
