import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import ProfilesContainer from './profiles';

function BrowseContainer() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState();
	console.log(profile);

	if (profile) {
		return <p>BROWSE</p>;
	} else {
		return <ProfilesContainer userDetails={userDetails} setProfile={setProfile} />;
	}
}

export default BrowseContainer;
