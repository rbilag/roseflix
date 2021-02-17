import React from 'react';
import { Container, Item, Inner, Panel, Title, Description, Image } from './styles/feature';

function Feature({ children, direction = 'row', ...restProps }) {
	return (
		<Feature.Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Feature.Item>
	);
}

Feature.Container = function FeatureContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Feature.Item = function FeatureItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Feature.Panel = function FeaturePanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.Description = function FeatureDescription({ children, ...restProps }) {
	return <Description {...restProps}>{children}</Description>;
};

Feature.Image = function FeatureImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Feature;
