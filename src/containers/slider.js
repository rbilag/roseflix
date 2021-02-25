import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { Show } from '../components';
import ShowContainer from './show';

function SliderContainer({ section, genres, trailerDisplayed, onUpdateTrailer }) {
	const [ shows, setShows ] = useState([]);

	useEffect(
		() => {
			movieHttp.get(section.endpoint).then((response) => setShows(response.data.results)).catch((e) => console.log(e));
		},
		[ section.endpoint ]
	);

	return (
		shows && (
			<Show.Container>
				<h2>{section.title}</h2>
				<Show.Row className={`${section.size || 'md'}-container`}>
					{shows.map((show) => {
						return (
							<ShowContainer
								key={show.id}
								show={show}
								trailerDisplayed={trailerDisplayed}
								section={section}
								genres={genres}
								onUpdateTrailer={onUpdateTrailer}
							/>
						);
					})}
				</Show.Row>
			</Show.Container>
		)
	);
}

export default SliderContainer;
