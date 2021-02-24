import React, { useState, useEffect } from 'react';
import { Episode } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { IMAGE_BASE_URL } from '../constants/config';

function EpisodeContainer({ openId, seasons }) {
	const [ season, setSeason ] = useState(1);
	const [ episodes, setEpisodes ] = useState();

	useEffect(
		() => {
			movieHttp
				.get(SECTIONS.series.helpers.fetchTVSeason.replace('{{tv_id}}', openId).replace('{{season_number}}', season))
				.then((response) => setEpisodes(response.data.episodes))
				.catch((e) => console.log(e));
		},
		[ season, openId ]
	);
	return (
		<Episode.Container>
			<Episode.Header>
				<Episode.Title>Episodes</Episode.Title>
				<Episode.Dropdown seasons={seasons} setSeason={setSeason} />
			</Episode.Header>
			{episodes && (
				<Episode.List>
					{episodes.map(({ id, episode_number, name, overview, still_path }) => (
						<Episode key={id}>
							<Episode.Panel className="episode-number">{episode_number}</Episode.Panel>
							<Episode.Panel className="episode-image">
								<img src={`${IMAGE_BASE_URL}w185${still_path}`} alt={`Episode ${episode_number} Still`} />
							</Episode.Panel>
							<Episode.Panel className="episode-details">
								<Episode.ListItemTitle>{name}</Episode.ListItemTitle>
								<Episode.Overview>{overview}</Episode.Overview>
							</Episode.Panel>
						</Episode>
					))}
					{episodes.length > 10 && <Episode.ShowMore />}
				</Episode.List>
			)}
		</Episode.Container>
	);
}

export default EpisodeContainer;
