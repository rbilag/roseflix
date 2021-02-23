import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Hero } from '../components';
import movieHttp from '../api/movie';
import { SECTIONS } from '../api/movieEndpoints';

function HeroContainer({ profile, category }) {
	const [ banner, setBanner ] = useState({});
	const [ heroTrailer, setHeroTrailer ] = useState();
	const [ isMuted, setIsMuted ] = useState(true);
	const isMobile = window.innerWidth <= 600;

	useEffect(
		() => {
			async function fetchData() {
				const response = await movieHttp.get(SECTIONS[category].sections[4].endpoint);
				const bannerDetails = response.data.results[Math.floor(Math.random() * response.data.results.length)];
				setBanner(bannerDetails);
				if (!isMobile) {
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
		[ isMobile, profile, category ]
	);

	const truncate = (string, length) => {
		return string.length > length ? string.substr(0, length - 1) + '...' : string;
	};

	return (
		<Hero>
			{heroTrailer && (
				<Hero.Video
					isMuted={isMuted}
					setIsMuted={setIsMuted}
					heroTrailer={heroTrailer}
					setHeroTrailer={setHeroTrailer}
				/>
			)}
			{banner.backdrop_path && !heroTrailer && <Hero.Banner src={banner.backdrop_path} />}
			<Hero.Overlay fullOverlay={!heroTrailer} />
			{banner.overview && (
				<Hero.Details className={heroTrailer ? 'no-desc' : ''}>
					<Hero.Title className={!heroTrailer ? 'title-small' : ''}>
						{banner.name || banner.title || banner.original_name}
					</Hero.Title>
					{!heroTrailer && !isMobile && <Hero.Description>{truncate(banner.overview, 185)}</Hero.Description>}
					<Hero.Button className="white-btn">
						<PlayArrowIcon /> <span>Play</span>
					</Hero.Button>
					<Hero.Button>
						<InfoOutlinedIcon /> <span>More Info</span>
					</Hero.Button>
				</Hero.Details>
			)}
		</Hero>
	);
}

export default HeroContainer;
