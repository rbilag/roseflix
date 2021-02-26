import React from 'react';
import { Container, Row, NoMatch } from './styles/search';

function Search({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Search.Row = function SearchRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Search.NoMatch = function SearchNoMatch({ ...restProps }) {
	return (
		<NoMatch {...restProps}>
			<p>Your search did not have any matches.</p>
			<p>Suggestions:</p>
			<ul>
				<li>Try different keywords</li>
				<li>Looking for a movie? Be sure to have movie tab selected</li>
				<li>Select series if otherwise</li>
			</ul>
		</NoMatch>
	);
};

export default Search;
