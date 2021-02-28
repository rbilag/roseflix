import React, { useState, useEffect } from 'react';
import { Episode } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { IMAGE_BASE_URL, IMAGE_SIZES, STILL_PLACEHOLDER } from '../constants/config';

function EpisodeContainer({ openId, seasons }) {
	const [ season, setSeason ] = useState(1);
	const [ episodes, setEpisodes ] = useState();
	const [ showAll, setShowAll ] = useState(false);

	useEffect(
		() => {
			movieHttp
				.get(SECTIONS.series.helpers.fetchTVSeason.replace('{{tv_id}}', openId).replace('{{season_number}}', season))
				.then((response) => setEpisodes(response.data.episodes))
				.catch((e) => console.log(e));
		},
		[ season, openId ]
	);

	const truncate = (string, length) => {
		return string.length > length ? string.substr(0, length - 1) + '...' : string;
	};

	return (
		<Episode.Container>
			<Episode.Header>
				<Episode.Title>Episodes</Episode.Title>
				<Episode.Dropdown seasons={seasons} setSeason={setSeason} season={season} />
			</Episode.Header>
			{episodes && (
				<Episode.List>
					{episodes.map(
						({ id, episode_number, name, overview, still_path }, i) =>
							(showAll || (!showAll && i < 10)) && (
								<Episode key={id}>
									<Episode.Panel className="episode-number">{episode_number}</Episode.Panel>
									<Episode.Panel className="episode-image">
										<img
											src={still_path ? `${IMAGE_BASE_URL + IMAGE_SIZES.still.small + still_path}` : STILL_PLACEHOLDER}
											alt={`Episode ${episode_number} Still`}
										/>
									</Episode.Panel>
									<Episode.Panel className="episode-details">
										<Episode.ListItemTitle>{name}</Episode.ListItemTitle>
										<Episode.Overview>{truncate(overview, 185)}</Episode.Overview>
									</Episode.Panel>
								</Episode>
							)
					)}
					{episodes.length > 10 && (
						<Episode.ShowMore onClick={() => setShowAll((showAll) => !showAll)} showAll={showAll} />
					)}
				</Episode.List>
			)}
		</Episode.Container>
	);
}

export default EpisodeContainer;
