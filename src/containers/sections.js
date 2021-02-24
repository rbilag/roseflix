import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';

function SectionsContainer({ category }) {
	const [ genres, setGenres ] = useState([]);
	const [ trailerDisplayed, setTrailerDisplayed ] = useState({});
	const [ sectionDisplayed, setSectionDisplayed ] = useState(5);

	React.useEffect(
		() => {
			const handleScroll = () => {
				const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 300;
				if (bottom) {
					setSectionDisplayed((sectionDisplayed) => {
						const newDisplayed = sectionDisplayed + 5;
						return newDisplayed <= SECTIONS[category].sections.length ? newDisplayed : sectionDisplayed;
					});
				}
			};
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		},
		[ category ]
	);

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
		[ category ]
	);
	return (
		<React.Fragment>
			<Show.Sections>
				{SECTIONS[category].sections.map((section, i) => {
					return (
						i < sectionDisplayed && (
							<SliderContainer
								key={section.title}
								section={section}
								category={category}
								genres={genres}
								trailerDisplayed={trailerDisplayed}
								onUpdateTrailer={setTrailerDisplayed}
							/>
						)
					);
				})}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
