import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import { HeaderContainer, HeroContainer, SectionsContainer, ProfilesContainer, PlayerContainer } from '../containers';
import { useUser } from '../context/UserContext';
import { PlayerContext } from '../context/PlayerContext';
import { DetailsContainer } from '../containers';

function Browse() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ playing, setPlaying ] = useState();
	const [ detailsTrailer, setDetailsTrailer ] = useState();
	const [ isMuted, setIsMuted ] = useState(true);
	const [ category, setCategory ] = useState('series');

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

	return profile ? (
		<PlayerContext.Provider
			value={{
				playing: { playing, setPlaying },
				detailsTrailer: { detailsTrailer, setDetailsTrailer },
				isMuted: { isMuted, setIsMuted },
				category: { category, setCategory }
			}}
		>
			{loading ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
			<HeaderContainer profile={profile} setProfile={setProfile} category={category} setCategory={setCategory} />
			<HeroContainer profile={profile} />
			<SectionsContainer category={category} />
			{playing && <PlayerContainer playing={playing} setPlaying={setPlaying} />}
			{detailsTrailer && <DetailsContainer />}
		</PlayerContext.Provider>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default Browse;
