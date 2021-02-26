import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';

function SectionsContainer({ category, sectionDisplayed, setSectionDisplayed }) {
	const [ genres, setGenres ] = useState([]);

	useEffect(
		() => {
			try {
				const endpoint =
					category === 'series' ? SECTIONS.series.helpers.fetchTVGenres : SECTIONS.movies.helpers.fetchMovieGenres;
				movieHttp.get(endpoint).then((response) => setGenres(() => response.data.genres));
				setSectionDisplayed(5);
			} catch ({ response }) {
				console.log(response);
			}
		},
		[ category, setSectionDisplayed ]
	);
	return (
		<React.Fragment>
			<Show.Sections>
				{SECTIONS[category].sections.map((section, i) => {
					return i < sectionDisplayed && <SliderContainer key={section.title} section={section} genres={genres} />;
				})}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
