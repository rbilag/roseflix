import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';

function SectionsContainer() {
	const [ tvGenres, setTVGenres ] = useState([]);
	const [ movieGenres, setMovieGenres ] = useState([]);
	const [ trailerDisplayed, setTrailerDisplayed ] = useState({});

	useEffect(() => {
		try {
			movieHttp.get(SECTIONS.movies.helpers.fetchMovieGenres).then((response) => {
				setMovieGenres(() => response.data.genres);
				movieHttp.get(SECTIONS.series.helpers.fetchTVGenres).then((response) => {
					setTVGenres(() => response.data.genres);
				});
			});
		} catch ({ response }) {
			console.log(response);
		}
	}, []);
	return (
		<React.Fragment>
			<Show.Sections>
				{SECTIONS.movies.genres.map((section) => {
					const mediaType = 'movie';
					return (
						<SliderContainer
							key={section.title}
							section={section}
							mediaType={mediaType}
							genres={mediaType === 'movie' ? movieGenres : tvGenres}
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
