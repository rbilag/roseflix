import React, { useState } from 'react';
import { Show } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { BACKDROP_PLACEHOLDER, POSTER_PLACEHOLDER, IMAGE_BASE_URL } from '../constants/config';
import { usePlayer } from '../context/PlayerContext';

function ShowContainer({ section, show }) {
	const {
		category: { category },
		detailsTrailer: { setDetailsTrailer },
		trailerDisplayed: { trailerDisplayed, setTrailerDisplayed },
		heroTrailer: { setHeroTrailer },
		genres: { genres }
	} = usePlayer();
	const [ isMuted, setIsMuted ] = useState(true);
	const showPoster =
		(trailerDisplayed.id === show.id && trailerDisplayed.header !== section.title) || trailerDisplayed.id !== show.id;
	const playerRef = React.createRef();
	const [ delayHandler, setDelayHandler ] = useState(null);

	const handleShowHover = async () => {
		setDelayHandler(
			setTimeout(async () => {
				try {
					const endpoint =
						category === 'series'
							? SECTIONS.series.helpers.fetchTVVideos.replace('{{tv_id}}', show.id)
							: SECTIONS.movies.helpers.fetchMovieVideos.replace('{{movie_id}}', show.id);
					const response = await movieHttp.get(endpoint);
					const trailerDetails = response.data.results
						.reverse()
						.find((video) => video.site === 'YouTube' && video.type === 'Trailer');
					if (trailerDetails) {
						setTrailerDisplayed({
							id: show.id,
							header: section.title,
							url: trailerDetails.key,
							isLoaded: false
						});
						setHeroTrailer();
					}
				} catch (e) {
					console.log(e);
				}
			}, 800)
		);
	};

	const onTrailerReady = () => {
		setTrailerDisplayed({ ...trailerDisplayed, isLoaded: true });
	};

	const calculateIfNew = (dateString) => {
		const movieDate = new Date(dateString);
		const currentDate = new Date();
		const difference = currentDate.getTime() - movieDate.getTime();
		return Math.ceil(difference / (1000 * 3600 * 24)) <= 30;
	};

	return (
		<Show>
			<Show.Card
				onMouseEnter={() => handleShowHover()}
				onMouseLeave={() => {
					clearTimeout(delayHandler);
					setTrailerDisplayed({});
				}}
				onClick={() => {
					setDetailsTrailer({
						id: show.id,
						key: trailerDisplayed.url,
						start: playerRef.current ? playerRef.current.getCurrentTime() : 0
					});
				}}
			>
				{!showPoster &&
				trailerDisplayed.url && (
					<Show.Video
						src={trailerDisplayed.url}
						playerRef={playerRef}
						isMuted={isMuted}
						setIsMuted={setIsMuted}
						setTrailerDisplayed={setTrailerDisplayed}
						onTrailerReady={onTrailerReady}
						className={trailerDisplayed.isLoaded ? 'trailer-visible' : ''}
					/>
				)}
				{(showPoster || (trailerDisplayed.id === show.id && !trailerDisplayed.isLoaded)) && (
					<Show.Poster
						src={
							section.size === 'lg' ? show.poster_path ? (
								`${IMAGE_BASE_URL}w342${show.poster_path}`
							) : (
								POSTER_PLACEHOLDER
							) : show.backdrop_path ? (
								`${IMAGE_BASE_URL}w300${show.backdrop_path}`
							) : (
								BACKDROP_PLACEHOLDER
							)
						}
						alt={show.name || show.title}
					/>
				)}

				<Show.Details>
					<Show.Title>{show.name || show.title}</Show.Title>
					<br />
					<Show.Rating>
						{calculateIfNew(show.release_date || show.first_air_date) && <span className="new-badge">New</span>}
						<span className="rating">
							{show.vote_average} by {show.vote_count.toLocaleString()} people
						</span>
					</Show.Rating>
					{section.size !== 'lg' && (
						<React.Fragment>
							<br />
							<p>
								{genres && genres.length > 0 ? (
									show.genre_ids.map((genreId, i) => {
										if (i > 2) return null;
										const genreDetails = genres.find((genre) => genre.id === genreId);
										return (
											<Show.Genre
												key={`${show.id}_${genreId}`}
												genreDetails={genreDetails}
												length={show.genre_ids.length}
												i={i}
											/>
										);
									})
								) : null}
							</p>
						</React.Fragment>
					)}
				</Show.Details>
			</Show.Card>
		</Show>
	);
}

export default ShowContainer;
