import React from 'react';
import { HeaderContainer } from '.';
import { Profiles } from '../components';

function ProfilesContainer({ userDetails, setProfile }) {
	return (
		<React.Fragment>
			<HeaderContainer logoOnly />
			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					{userDetails.profiles.map((profile) => (
						<Profiles.User key={profile._id} onClick={() => setProfile(profile)}>
							<Profiles.Avatar src={profile.avatar} />
							<Profiles.Name>{profile.name}</Profiles.Name>
						</Profiles.User>
					))}
				</Profiles.List>
				<Profiles.Button>MANAGE PROFILES</Profiles.Button>
			</Profiles>
		</React.Fragment>
	);
}

export default ProfilesContainer;
