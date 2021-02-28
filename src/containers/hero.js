import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Hero } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';
import { usePlayer } from '../context/PlayerContext';

function HeroContainer({ profile }) {
	const [ banner, setBanner ] = useState({});
	const playerRef = React.createRef();
	const {
		category: { category },
		playing: { setPlaying },
		isMuted: { isMuted, setIsMuted },
		detailsTrailer: { setDetailsTrailer },
		heroTrailer: { heroTrailer, setHeroTrailer }
	} = usePlayer();
	const windowWidth = window.innerWidth;

	useEffect(
		() => {
			async function fetchData() {
				const response = await movieHttp.get(SECTIONS[category].sections[4].endpoint);
				const bannerDetails = response.data.results[Math.floor(Math.random() * response.data.results.length)];
				setBanner(bannerDetails);
				if (windowWidth > 600) {
					const endpoint =
						category === 'series'
							? SECTIONS.series.helpers.fetchTVVideos.replace('{{tv_id}}', bannerDetails.id)
							: SECTIONS.movies.helpers.fetchMovieVideos.replace('{{movie_id}}', bannerDetails.id);
					const trailerResponse = await movieHttp.get(endpoint);
					if (trailerResponse.data.results.length > 0) {
						const trailerDetails = trailerResponse.data.results
							.reverse()
							.find((video) => video.site === 'YouTube' && video.type === 'Trailer');
						if (trailerDetails) setHeroTrailer(trailerDetails.key);
					}
				}
			}
			fetchData();
		},
		[ windowWidth, profile, category, setHeroTrailer ]
	);

	const truncate = (string, length) => {
		return string.length > length ? string.substr(0, length - 1) + '...' : string;
	};

	return (
		<Hero>
			{heroTrailer && (
				<Hero.Video
					playerRef={playerRef}
					isMuted={isMuted}
					setIsMuted={setIsMuted}
					heroTrailer={heroTrailer}
					setHeroTrailer={setHeroTrailer}
				/>
			)}
			{banner.backdrop_path && !heroTrailer && <Hero.Banner src={banner.backdrop_path} windowWidth={windowWidth} />}
			<Hero.Overlay fullOverlay={!heroTrailer} />
			{banner.overview && (
				<Hero.Details className={heroTrailer ? 'no-desc' : ''}>
					<Hero.Title className={!heroTrailer ? 'title-small' : ''}>
						{banner.name || banner.title || banner.original_name}
					</Hero.Title>
					{!heroTrailer && windowWidth > 600 && <Hero.Description>{truncate(banner.overview, 185)}</Hero.Description>}
					<Hero.Button className="white-btn" onClick={() => setPlaying(banner)}>
						<PlayArrowIcon /> <span>Play</span>
					</Hero.Button>
					<Hero.Button
						onClick={() => {
							setDetailsTrailer({
								id: banner.id,
								key: heroTrailer,
								start: playerRef.current ? playerRef.current.getCurrentTime() : 0
							});
						}}
					>
						<InfoOutlinedIcon /> <span>More Info</span>
					</Hero.Button>
				</Hero.Details>
			)}
		</Hero>
	);
}

export default HeroContainer;
