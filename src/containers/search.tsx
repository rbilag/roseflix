import React from 'react';
import { Search } from '../components';
import { ShowContainer } from '.';
import { ShowOverview } from '../constants/types';

type SearchContainerType = {
	searchResult: Array<ShowOverview>;
};
function SearchContainer({ searchResult }: SearchContainerType) {
	return (
		<Search>
			{searchResult.length > 0 ? (
				<Search.Row className="md-container">
					{searchResult.map((result) => (
						<ShowContainer key={result.id} section={{ title: 'Search Result', endpoint: '' }} show={result} />
					))}
				</Search.Row>
			) : (
				<Search.NoMatch />
			)}
		</Search>
	);
}

export default SearchContainer;
