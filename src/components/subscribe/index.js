import React from 'react';
import { Container, Inner, Title, Panel, Input, Button } from './styles/subscribe';

function Subscribe({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Subscribe.Title = function SubscribeTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Subscribe.Panel = function SubscribePanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};

Subscribe.Input = function SubscribeInput({ ...restProps }) {
	return <Input {...restProps} />;
};

Subscribe.Button = function SubscribeButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Subscribe;
