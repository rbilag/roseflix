import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';

function SectionsContainer({ category }) {
	const [ genres, setGenres ] = useState([]);
	const [ trailerDisplayed, setTrailerDisplayed ] = useState({});

	useEffect(
		() => {
			try {
				const endpoint =
					category === 'series' ? SECTIONS.series.helpers.fetchTVGenres : SECTIONS.movies.helpers.fetchMovieGenres;
				movieHttp.get(endpoint).then((response) => setGenres(() => response.data.genres));
			} catch ({ response }) {
				console.log(response);
			}
		},
		[ category ]
	);
	return (
		<React.Fragment>
			<Show.Sections>
				{SECTIONS[category].sections.map((section) => {
					return (
						<SliderContainer
							key={section.title}
							section={section}
							category={category}
							genres={genres}
							trailerDisplayed={trailerDisplayed}
							onUpdateTrailer={setTrailerDisplayed}
						/>
					);
				})}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
