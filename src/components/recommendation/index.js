import React from 'react';
import { Container, Grid, Card, Banner, Header, Title, Year, Details, ShowMoreWrapper } from './styles/recommendation';

function Recommendation({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
}

Recommendation.Container = function RecommendationContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
Recommendation.Grid = function RecommendationGrid({ children, ...restProps }) {
	return <Grid {...restProps}>{children}</Grid>;
};
Recommendation.Banner = function RecommendationBanner({ src, ...restProps }) {
	return <Banner src={`https://image.tmdb.org/t/p/w300/${src}`} {...restProps} />;
};
Recommendation.Header = function RecommendationHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};
Recommendation.Title = function RecommendationTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Recommendation.Year = function RecommendationYear({ children, ...restProps }) {
	return <Year {...restProps}>{children}</Year>;
};
Recommendation.Details = function RecommendationDetails({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};
Recommendation.ShowMoreWrapper = function RecommendationShowMoreWrapper({ children, ...restProps }) {
	return <ShowMoreWrapper {...restProps}>{children}</ShowMoreWrapper>;
};

export default Recommendation;