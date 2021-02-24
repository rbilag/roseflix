import React from 'react';
import { Container, Inner } from './styles/details';

function Details({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

export default Details;
