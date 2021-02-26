import React from 'react';
import { Search } from '../components';
import { ShowContainer } from './';

function SearchContainer({ searchResult }) {
	return (
		<Search>
			{searchResult.length > 0 ? (
				<Search.Row className="md-container">
					{searchResult.map((result) => (
						<ShowContainer key={result.id} section={{ title: 'Search Result' }} show={result} />
					))}
				</Search.Row>
			) : (
				<Search.NoMatch />
			)}
		</Search>
	);
}

export default SearchContainer;
