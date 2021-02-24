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
	const [ category, setCategory ] = useState('series');
	const [ playing, setPlaying ] = useState();
	const [ openId, setOpenId ] = useState();

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
		<PlayerContext.Provider value={{ playing, setPlaying }}>
			{loading ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
			<HeaderContainer profile={profile} setProfile={setProfile} category={category} setCategory={setCategory} />
			<HeroContainer profile={profile} category={category} setOpenId={setOpenId} />
			<SectionsContainer category={category} />
			{playing && <PlayerContainer />}
			{openId && <DetailsContainer openId={openId} category={category} />}
		</PlayerContext.Provider>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default Browse;
