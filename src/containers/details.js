import React, { useState, useEffect } from 'react';
import { Details } from '../components';
import { LockBody } from '../components/loading/styles/loading';
import EpisodeContainer from './episode';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';

function DetailsContainer({ openId, category }) {
	const [ details, setDetails ] = useState();

	useEffect(
		() => {
			const endpoint =
				category === 'series'
					? SECTIONS.series.helpers.fetchTVDetails.replace('{{tv_id}}', openId)
					: SECTIONS.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', openId);
			movieHttp.get(endpoint).then((response) => setDetails(response.data)).catch((e) => console.log(e));
		},
		[ openId, category ]
	);

	console.log(details);

	return details ? (
		<Details>
			<EpisodeContainer openId={openId} seasons={details.seasons} />
			<LockBody />
		</Details>
	) : null;
}

export default DetailsContainer;
