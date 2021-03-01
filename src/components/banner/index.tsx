import React from 'react';
import { ComponentProp } from '../../constants/types';
import { Container, Inner, Title, SubTitle } from './styles/banner';

function Banner({ children, ...restProps }: ComponentProp) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Banner.Title = function BannerTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Banner.SubTitle = function BannerSubTitle({ children, ...restProps }: ComponentProp) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Banner;
