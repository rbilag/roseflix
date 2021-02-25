import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Details } from '../components';
import { LockBody } from '../components/loading/styles/loading';
import EpisodeContainer from './episode';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { usePlayer } from '../context/PlayerContext';
import RecommendationContainer from './recommendation';

function DetailsContainer() {
	const [ details, setDetails ] = useState();
	const [ cast, setCast ] = useState();
	const {
		playing: { setPlaying },
		category: { category },
		detailsTrailer: { detailsTrailer, setDetailsTrailer },
		isMuted: { isMuted, setIsMuted }
	} = usePlayer();
	const [ showBanner, setShowBanner ] = useState(false);

	useEffect(
		() => {
			let detailsEndpoint;
			let creditsEndpoint;
			if (category === 'series') {
				detailsEndpoint = SECTIONS.series.helpers.fetchTVDetails.replace('{{tv_id}}', detailsTrailer.id);
				creditsEndpoint = SECTIONS.series.helpers.fetchTVAggregateCredits.replace('{{tv_id}}', detailsTrailer.id);
			} else {
				detailsEndpoint = SECTIONS.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', detailsTrailer.id);
				detailsEndpoint = SECTIONS.movies.helpers.fetchMovieCredits.replace('{{movie_id}}', detailsTrailer.id);
			}
			movieHttp.get(detailsEndpoint).then((response) => setDetails(response.data)).catch((e) => console.log(e));
			movieHttp.get(creditsEndpoint).then((response) => setCast(response.data.cast)).catch((e) => console.log(e));
		},
		[ detailsTrailer, category ]
	);

	return details ? (
		<Details>
			{!showBanner && (
				<Details.Video
					isMuted={isMuted}
					setIsMuted={setIsMuted}
					detailsTrailer={detailsTrailer}
					setShowBanner={setShowBanner}
				/>
			)}
			{details.backdrop_path && showBanner && <Details.Banner src={details.backdrop_path} />}
			<Details.Overlay fullOverlay={!detailsTrailer} />
			<Details.Title>{details.name || details.title || details.original_name}</Details.Title>
			<Details.Button className="white-btn" onClick={() => setPlaying(details)}>
				<PlayArrowIcon /> <span>Play</span>
			</Details.Button>
			<Details.Summary>
				<Details.Panel className="major-details">
					<p className="air-date">
						<span>{new Date(details.first_air_date).getFullYear()}</span>
						<span>{`${details.number_of_seasons} ${details.number_of_seasons > 1 ? 'Seasons' : 'Season'}`}</span>
					</p>
					{details.popularity < 10 && <p className="popularity">Top {details.popularity} in the world</p>}
					<p className="overview">{details.overview}</p>
				</Details.Panel>
				<Details.Panel className="minor-details">
					{cast && (
						<Details.MinorDetails>
							<span>Cast:</span>{' '}
							{cast.map(({ name }, i) => {
								if (i > 5) return null;
								return i === cast.length - 1 ? name : name + ', ';
							})}
							{cast.length > 6 && <i>more</i>}
						</Details.MinorDetails>
					)}
					<Details.MinorDetails>
						<span>Genres:</span>{' '}
						{details.genres.map(({ name }, i) => (i === details.genres.length - 1 ? name : name + ', '))}
					</Details.MinorDetails>
				</Details.Panel>
			</Details.Summary>
			<EpisodeContainer openId={detailsTrailer.id} seasons={details.seasons} />
			<RecommendationContainer category={category} openId={detailsTrailer.id} />
			<LockBody />
		</Details>
	) : null;
}

export default DetailsContainer;
