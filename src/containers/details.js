import React, { useState, useEffect, useRef } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Scrollbar from 'react-scrollbars-custom';
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
		isMuted: { isMuted, setIsMuted },
		heroTrailer: { setHeroTrailer },
		trailerDisplayed: { setTrailerDisplayed }
	} = usePlayer();
	const [ showBanner, setShowBanner ] = useState(false);
	const modalRef = useRef(null);

	useEffect(
		() => {
			setHeroTrailer();
			setTrailerDisplayed({});
		},
		[ setHeroTrailer, setTrailerDisplayed ]
	);

	useEffect(
		() => {
			const handleClickOutside = (e) => {
				if (modalRef.current && !modalRef.current.contains(e.target)) {
					setDetailsTrailer();
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		},
		[ setDetailsTrailer ]
	);

	useEffect(
		() => {
			let detailsEndpoint;
			let creditsEndpoint;
			if (category === 'series') {
				detailsEndpoint = SECTIONS.series.helpers.fetchTVDetails.replace('{{tv_id}}', detailsTrailer.id);
				creditsEndpoint = SECTIONS.series.helpers.fetchTVAggregateCredits.replace('{{tv_id}}', detailsTrailer.id);
			} else {
				detailsEndpoint = SECTIONS.movies.helpers.fetchMovieDetails.replace('{{movie_id}}', detailsTrailer.id);
				creditsEndpoint = SECTIONS.movies.helpers.fetchMovieCredits.replace('{{movie_id}}', detailsTrailer.id);
			}
			movieHttp.get(detailsEndpoint).then((response) => setDetails(response.data)).catch((e) => console.log(e));
			movieHttp.get(creditsEndpoint).then((response) => setCast(response.data.cast)).catch((e) => console.log(e));
		},
		[ detailsTrailer, category ]
	);

	return details && detailsTrailer ? (
		<Details>
			<LockBody />
			<Details.Inner childRef={modalRef}>
				<Scrollbar noDefaultStyles className="main-scrollbar modal-scrollbar">
					{!showBanner &&
					detailsTrailer.key && (
						<Details.Video
							isMuted={isMuted}
							setIsMuted={setIsMuted}
							detailsTrailer={detailsTrailer}
							setShowBanner={setShowBanner}
						/>
					)}
					{details.backdrop_path &&
					(showBanner || !detailsTrailer.key) && <Details.Banner src={details.backdrop_path} />}
					<Details.Close onClick={() => setDetailsTrailer()} />
					<Details.Overlay fullOverlay={!detailsTrailer} />
					<Details.Button
						className="white-btn"
						onClick={() => {
							setDetailsTrailer();
							setPlaying(details);
						}}
					>
						<PlayArrowIcon /> <span>Play</span>
					</Details.Button>
					<Details.Summary>
						<Details.Panel className="major-details">
							<Details.Title>{details.name || details.title || details.original_name}</Details.Title>
							<p className="air-date">
								<span>{new Date(details.first_air_date || details.release_date).getFullYear()}</span>
								{category === 'series' && (
									<span>{`${details.number_of_seasons} ${details.number_of_seasons > 1 ? 'Seasons' : 'Season'}`}</span>
								)}
							</p>
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
					{category === 'series' && <EpisodeContainer openId={detailsTrailer.id} seasons={details.seasons} />}
					<RecommendationContainer category={category} openId={detailsTrailer.id} />
				</Scrollbar>
			</Details.Inner>
		</Details>
	) : null;
}

export default DetailsContainer;
