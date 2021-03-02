import React, { useState, useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import movieHttp from '../api/movie';
import { Loading } from '../components';
import {
	HeaderContainer,
	HeroContainer,
	SectionsContainer,
	ProfilesContainer,
	PlayerContainer,
	SearchContainer
} from '../containers';
import { useUser } from '../context/UserContext';
import { PlayerContext } from '../context/PlayerContext';
import { DetailsContainer } from '../containers';
import { SECTIONS } from '../api/movieEndpoints';
import { Genre, Profile, ShowOverview, TrailerDisplayed } from '../constants/types';

function Browse() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState<Profile>();
	const [ loading, setLoading ] = useState(true);
	const [ playing, setPlaying ] = useState<ShowOverview | null | undefined>();
	const [ detailsTrailer, setDetailsTrailer ] = useState();
	const [ heroTrailer, setHeroTrailer ] = useState<string | null | undefined>();
	const [ trailerDisplayed, setTrailerDisplayed ] = useState<TrailerDisplayed | null | undefined>();
	const [ isMuted, setIsMuted ] = useState(true);
	const [ category, setCategory ] = useState('series');
	const [ isHeaderShown, setHeaderShown ] = useState(false);
	const [ sectionDisplayed, setSectionDisplayed ] = useState(5);
	const [ searchResult, setSearchResult ] = useState<Array<ShowOverview> | null>();
	const [ genres, setGenres ] = useState<Array<Genre> | undefined | null>();

	useEffect(
		() => {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
			return () => {
				clearTimeout();
			};
		},
		[ profile ]
	);

	useEffect(
		() => {
			try {
				const endpoint =
					category === 'series' ? SECTIONS.series.helpers.fetchTVGenres : SECTIONS.movies.helpers.fetchMovieGenres;
				movieHttp.get(endpoint).then((response) => setGenres(() => response.data.genres));
				setSectionDisplayed(5);
			} catch ({ response }) {
				console.log(response);
			}
		},
		[ category, setSectionDisplayed ]
	);

	const handleOnScroll = ({ clientHeight, scrollTop, scrollHeight }: any) => {
		const bottom = Math.ceil(clientHeight + scrollTop) >= scrollHeight - 300;
		if (bottom) {
			setSectionDisplayed((sectionDisplayed) => {
				const newDisplayed = sectionDisplayed + 5;
				return newDisplayed <= SECTIONS[category].sections.length ? newDisplayed : sectionDisplayed;
			});
		}
		if (scrollTop > 100 && !isHeaderShown) {
			setHeaderShown(true);
		} else if (scrollTop <= 100 && isHeaderShown) {
			setHeaderShown(false);
		}
	};

	return profile ? (
		<PlayerContext.Provider
			value={{
				playing: { playing, setPlaying },
				detailsTrailer: { detailsTrailer, setDetailsTrailer },
				isMuted: { isMuted, setIsMuted },
				category: { category, setCategory },
				heroTrailer: { heroTrailer, setHeroTrailer },
				trailerDisplayed: { trailerDisplayed, setTrailerDisplayed },
				genres: { genres, setGenres }
			}}
		>
			<Scrollbar noDefaultStyles className="main-scrollbar" onScroll={(e: any) => handleOnScroll(e)}>
				<div className="browse">
					{loading && profile ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
					{detailsTrailer && <DetailsContainer />}
					<HeaderContainer
						profile={profile}
						setProfile={setProfile}
						isHeaderShown={isHeaderShown}
						category={category}
						setCategory={setCategory}
						setSearchResult={setSearchResult}
						setHeroTrailer={setHeroTrailer}
					/>
					{searchResult ? (
						<SearchContainer searchResult={searchResult} />
					) : (
						<React.Fragment>
							<HeroContainer profile={profile} />
							<SectionsContainer category={category} sectionDisplayed={sectionDisplayed} />
						</React.Fragment>
					)}

					{playing && <PlayerContainer playing={playing} setPlaying={setPlaying} />}
				</div>
			</Scrollbar>
		</PlayerContext.Provider>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default Browse;
