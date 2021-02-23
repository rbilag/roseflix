import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import { useUser } from '../context/UserContext';
import HeaderContainer from './header';
import HeroContainer from './hero';
import ProfilesContainer from './profiles';
import SectionsContainer from './sections';

function BrowseContainer() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState();
	const [ loading, setLoading ] = useState(true);
	const [ category, setCategory ] = useState('series');

	useEffect(
		() => {
			setLoading(true);
			console.log(profile);
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
		<React.Fragment>
			{loading ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
			<HeaderContainer profile={profile} setProfile={setProfile} category={category} setCategory={setCategory} />
			<HeroContainer profile={profile} category={category} />
			<SectionsContainer category={category} />
		</React.Fragment>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default BrowseContainer;
