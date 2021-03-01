import React from 'react';
import { ComponentProp } from '../../constants/types';
import { Container, Item, Inner, Panel, Title, Description, Image } from './styles/feature';

type FeatureProp = {
	children: any;
	direction: string;
	[x: string]: any;
};
function Feature({ children, direction, ...restProps }: FeatureProp) {
	return (
		<Feature.Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Feature.Item>
	);
}

Feature.Container = function FeatureContainer({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
};

Feature.Item = function FeatureItem({ children, ...restProps }: ComponentProp) {
	return <Item {...restProps}>{children}</Item>;
};

Feature.Panel = function FeaturePanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.Description = function FeatureDescription({ children, ...restProps }: ComponentProp) {
	return <Description {...restProps}>{children}</Description>;
};

Feature.Image = function FeatureImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Feature;
