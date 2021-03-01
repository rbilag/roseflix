import React from 'react';
import { BACKDROP_PLACEHOLDER, IMAGE_BASE_URL, IMAGE_SIZES } from '../../constants/constants';
import { ComponentProp } from '../../constants/types';
import { Container, Grid, Card, Banner, Header, Title, Year, Details, ShowMoreWrapper } from './styles/recommendation';

function Recommendation({ children, ...restProps }: ComponentProp) {
	return <Card {...restProps}>{children}</Card>;
}

Recommendation.Container = function RecommendationContainer({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
};
Recommendation.Grid = function RecommendationGrid({ children, ...restProps }: ComponentProp) {
	return <Grid {...restProps}>{children}</Grid>;
};
Recommendation.Banner = function RecommendationBanner({ src, ...restProps }: ComponentProp) {
	return (
		<Banner src={src ? `${IMAGE_BASE_URL + IMAGE_SIZES.backdrop.small + src}` : BACKDROP_PLACEHOLDER} {...restProps} />
	);
};
Recommendation.Header = function RecommendationHeader({ children, ...restProps }: ComponentProp) {
	return <Header {...restProps}>{children}</Header>;
};
Recommendation.Title = function RecommendationTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};
Recommendation.Year = function RecommendationYear({ children, ...restProps }: ComponentProp) {
	return <Year {...restProps}>{children}</Year>;
};
Recommendation.Details = function RecommendationDetails({ children, ...restProps }: ComponentProp) {
	return <Details {...restProps}>{children}</Details>;
};
Recommendation.ShowMoreWrapper = function RecommendationShowMoreWrapper({ children, ...restProps }: ComponentProp) {
	return <ShowMoreWrapper {...restProps}>{children}</ShowMoreWrapper>;
};

export default Recommendation;
