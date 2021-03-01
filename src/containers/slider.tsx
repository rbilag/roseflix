import React, { useState, useEffect } from 'react';
import movieHttp from '../api/movie';
import { Show } from '../components';
import ShowContainer from './show';
import { SectionType } from '../api/movieEndpoints';
import { ShowOverview } from '../constants/types';

type SliderContainerType = {
	section: SectionType;
};
function SliderContainer({ section }: SliderContainerType) {
	const [ shows, setShows ] = useState<Array<ShowOverview>>();

	useEffect(
		() => {
			movieHttp.get(section.endpoint).then((response) => setShows(response.data.results)).catch((e) => console.log(e));
		},
		[ section.endpoint ]
	);

	return shows ? (
		<Show.Container>
			<h2>{section.title}</h2>
			<Show.Row className={`${section.size || 'md'}-container`}>
				{shows.map((show) => {
					return <ShowContainer key={show.id} show={show} section={section} />;
				})}
			</Show.Row>
		</Show.Container>
	) : null;
}

export default SliderContainer;
