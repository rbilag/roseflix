import React from 'react';
import { ComponentProp } from '../../constants/types';
import { Container, Inner, Title, Panel, Input, Button } from './styles/subscribe';

function Subscribe({ children, ...restProps }: ComponentProp) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Subscribe.Title = function SubscribeTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Subscribe.Panel = function SubscribePanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};

Subscribe.Input = function SubscribeInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Subscribe.Button = function SubscribeButton({ children, ...restProps }: ComponentProp) {
	return <Button {...restProps}>{children}</Button>;
};

export default Subscribe;
