import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { HeaderContainer } from '.';
import { Form, Profiles } from '../components';
import mainHttp from '../api/mainEndpoints';
import { useUser } from '../context/UserContext';

function ProfilesContainer({ userDetails, setProfile }) {
	const { setUserDetails } = useUser();
	const [ render, setRender ] = useState('default');
	const [ editingUser, setEditingUser ] = useState();
	const prevDetails = useRef();
	const usedAvatars = userDetails.profiles.map(({ avatar }) => avatar);

	useEffect(
		() => {
			if (!userDetails.profiles || userDetails.profiles.length === 0) setRender('edit_main');
			else setRender('default');
		},
		[ userDetails.profiles ]
	);

	const handleSave = () => {
		mainHttp
			.upsertProfile({ newProfile: editingUser })
			.then((response) => {
				localStorage.setItem('roseflix-user', JSON.stringify(response.user));
				setUserDetails(response.user);
				setRender('default');
			})
			.catch(({ response }) => {
				console.log(response);
			});
	};

	const handleDelete = (profileId) => {
		mainHttp
			.deleteProfile({ profileId })
			.then((response) => {
				localStorage.setItem('roseflix-user', JSON.stringify(response.user));
				setUserDetails(response.user);
				setRender('default');
			})
			.catch(({ response }) => {
				console.log(response);
			});
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
								<p>{(prevDetails.current && prevDetails.current.name) || editingUser.name}</p>
								<Profiles.Avatar src={(prevDetails.current && prevDetails.current.avatar) || editingUser.avatar} />
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
							<Profiles.Button
								className="white-btn"
								onClick={() => handleSave()}
								disabled={!editingUser.name || editingUser.avatar === 'placeholder.png'}
							>
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
							{editingUser._id && (
								<Profiles.Button onClick={() => handleDelete(editingUser._id)}>DELETE PROFILE</Profiles.Button>
							)}
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
								<Profiles.User
									className="add-profile"
									onClick={() => {
										setEditingUser({ avatar: 'placeholder.png', name: '' });
										setRender('edit_details');
									}}
								>
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
