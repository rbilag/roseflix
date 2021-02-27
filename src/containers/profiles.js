import React, { useState, useRef } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { HeaderContainer } from '.';
import { Form, Profiles } from '../components';
import { PROFILE_PLACEHOLDER } from '../constants/config';

function ProfilesContainer({ userDetails, setProfile }) {
	const [ render, setRender ] = useState('default');
	const [ editingUser, setEditingUser ] = useState();
	const prevDetails = useRef();
	const usedAvatars = userDetails.profiles.map(({ avatar }) => avatar);

	const handleSave = () => {
		console.log(prevDetails.current);
		console.log(editingUser);
		console.log('to connect to backend');
	};

	const renderAvatars = () => {
		const avatars = [];
		for (let count = 1; count <= 11; count++) {
			const filename = `Avatar_${count < 10 ? '0' + count : count}.png`;
			avatars.push(
				<Profiles.Avatar
					key={`${filename}_grid`}
					src={filename}
					className={usedAvatars.includes(filename) ? 'avatar-used' : ''}
					onClick={() => {
						if (!usedAvatars.includes(filename)) {
							setEditingUser((prevValue) => ({ ...prevValue, avatar: filename }));
							setRender('edit_details');
						} else return null;
					}}
				/>
			);
		}
		return avatars;
	};

	const renderSwitch = () => {
		switch (render) {
			case 'edit_avatar':
				return (
					<React.Fragment>
						<Profiles.AvatarHeader>
							<Profiles.AvatarHeaderPanel className="profile-title">
								<Profiles.AvatarHeaderPanel>
									<ArrowBackIcon />
								</Profiles.AvatarHeaderPanel>
								<Profiles.AvatarHeaderPanel>
									<Profiles.Title>Edit Profile</Profiles.Title>
									<p>Choose a profile icon.</p>
								</Profiles.AvatarHeaderPanel>
							</Profiles.AvatarHeaderPanel>
							<Profiles.AvatarHeaderPanel className="profile-previous">
								<p>{prevDetails.current.name}</p>
								<Profiles.Avatar src={prevDetails.current.avatar} />
							</Profiles.AvatarHeaderPanel>
						</Profiles.AvatarHeader>
						<Profiles.AvatarGrid>{renderAvatars()}</Profiles.AvatarGrid>
					</React.Fragment>
				);
			case 'edit_details':
				return (
					<React.Fragment>
						<Profiles.Title>Edit Profile</Profiles.Title>
						<Profiles.Panel>
							{/* TODO check if may editingUser => dont prefill>? */}
							<Profiles.Avatar src={editingUser.avatar} />
							<Profiles.IconButton onClick={() => setRender('edit_avatar')} />
							<Form.Input
								placeholder="Display Name"
								value={editingUser.name}
								onChange={({ target }) => {
									setEditingUser((prevValue) => ({ ...prevValue, name: target.value }));
								}}
							/>
						</Profiles.Panel>
						<Profiles.Panel className="button-area">
							<Profiles.Button className="white-btn" onClick={() => handleSave()}>
								SAVE
							</Profiles.Button>
							<Profiles.Button
								onClick={() => {
									setEditingUser();
									setRender('default');
								}}
							>
								CANCEL
							</Profiles.Button>
							<Profiles.Button>DELETE PROFILE</Profiles.Button>
						</Profiles.Panel>
					</React.Fragment>
				);
			default:
				return (
					<React.Fragment>
						<Profiles.Title>{render === 'edit_main' ? 'Manage Profiles:' : "Who's watching?"}</Profiles.Title>
						<Profiles.List>
							{userDetails.profiles.map((profile) => (
								<Profiles.User
									key={profile._id}
									onClick={() => {
										if (render === 'edit_main') {
											prevDetails.current = profile;
											setEditingUser(profile);
											setRender('edit_details');
										} else setProfile(profile);
									}}
								>
									{render === 'edit_main' && <Profiles.AvatarEditOverlay />}
									<Profiles.Avatar src={profile.avatar} />
									<Profiles.Name>{profile.name}</Profiles.Name>
								</Profiles.User>
							))}
							{render === 'edit_main' && (
								<Profiles.User className="add-profile" onClick={() => setRender('edit_details')}>
									<Profiles.AvatarEditOverlay isAdd />
									<Profiles.Avatar src="placeholder.png" />
									<Profiles.Name>Add Profile</Profiles.Name>
								</Profiles.User>
							)}
						</Profiles.List>
						{render === 'edit_main' ? (
							<Profiles.Button className="white-btn" onClick={() => setRender('default')}>
								DONE
							</Profiles.Button>
						) : (
							<Profiles.Button onClick={() => setRender('edit_main')}>MANAGE PROFILES</Profiles.Button>
						)}
					</React.Fragment>
				);
		}
	};

	return (
		<React.Fragment>
			<HeaderContainer logoOnly />
			<Profiles>{renderSwitch()}</Profiles>
		</React.Fragment>
	);
}

export default ProfilesContainer;
