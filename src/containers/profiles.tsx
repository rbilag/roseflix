import React, { useState, useEffect, useRef } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { HeaderContainer } from '.';
import { Form, Profiles } from '../components';
import mainHttp from '../api/mainEndpoints';
import { useUser } from '../context/UserContext';
import { Profile, User } from '../constants/types';

type ProfilesContainerType = {
	userDetails: User | null;
	setProfile: (profile: Profile) => void;
};
type RenderType = {
	type: string;
	args: {
		[x: string]: any;
	};
};
function ProfilesContainer({ userDetails, setProfile }: ProfilesContainerType) {
	const { setUserDetails } = useUser();
	const [ render, setRender ] = useState<RenderType>({ type: 'default', args: {} });
	const [ editingUser, setEditingUser ] = useState<Profile | null>();
	const prevDetails = useRef<Profile>();
	const usedAvatars = userDetails && userDetails.profiles ? userDetails.profiles.map(({ avatar }) => avatar) : [];
	const usedNames = userDetails && userDetails.profiles ? userDetails.profiles.map(({ name }) => name) : [];

	useEffect(
		() => {
			if (userDetails && (!userDetails.profiles || userDetails.profiles.length === 0))
				setRender({ type: 'edit_main', args: {} });
			else setRender({ type: 'default', args: {} });
		},
		[ userDetails ]
	);

	const handleSave = () => {
		mainHttp
			.upsertProfile({ newProfile: editingUser })
			.then(({ user }: any) => {
				localStorage.setItem('roseflix-user', JSON.stringify(user));
				setUserDetails(user);
				setRender({ type: 'default', args: {} });
			})
			.catch(({ response }) => {
				console.log(response);
			});
	};

	const handleDelete = (profileId: string) => {
		mainHttp
			.deleteProfile({ profileId })
			.then(({ user }: any) => {
				localStorage.setItem('roseflix-user', JSON.stringify(user));
				setUserDetails(user);
				setRender({ type: 'default', args: {} });
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
							setEditingUser((prevValue: any) => ({ ...prevValue, avatar: filename }));
							setRender({ type: 'edit_details', args: {} });
						} else return null;
					}}
				/>
			);
		}
		return avatars;
	};

	const renderSwitch = () => {
		switch (render.type) {
			case 'confirm_delete':
				return (
					<React.Fragment>
						<Profiles.Title>Confirm Deletion</Profiles.Title>
						<Profiles.Panel className="button-area">
							<p>Are you sure you want to delete this profile? You will not be able to revert this process.</p>
							<Profiles.Button className="white-btn" onClick={() => handleDelete(render.args.profileId)}>
								YES
							</Profiles.Button>
							<Profiles.Button onClick={() => setRender({ type: 'edit_details', args: {} })}>CANCEL</Profiles.Button>
						</Profiles.Panel>
					</React.Fragment>
				);
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
								<p>{(prevDetails.current && prevDetails.current.name) || (editingUser && editingUser.name)}</p>
								<Profiles.Avatar
									src={(prevDetails.current && prevDetails.current.avatar) || (editingUser && editingUser.avatar)}
								/>
							</Profiles.AvatarHeaderPanel>
						</Profiles.AvatarHeader>
						<Profiles.AvatarGrid>{renderAvatars()}</Profiles.AvatarGrid>
					</React.Fragment>
				);
			case 'edit_details':
				return (
					<React.Fragment>
						<Profiles.Title>Edit Profile</Profiles.Title>
						{editingUser &&
						setEditingUser && (
							<React.Fragment>
								<Profiles.Panel>
									<Profiles.Avatar src={editingUser.avatar} />
									<Profiles.IconButton onClick={() => setRender({ type: 'edit_avatar', args: {} })} />
									<Form.Input
										placeholder="Display Name"
										value={editingUser.name}
										onChange={({ target }: any) => {
											setEditingUser((prevValue: any) => ({ ...prevValue, name: target.value }));
										}}
									/>
									{!editingUser._id &&
									usedNames.includes(editingUser.name) && <Form.Error>Name is already taken.</Form.Error>}
								</Profiles.Panel>
								<Profiles.Panel className="button-area">
									<Profiles.Button
										className="white-btn"
										onClick={() => handleSave()}
										disabled={
											!editingUser.name ||
											editingUser.avatar === 'placeholder.png' ||
											(!editingUser._id && usedNames.includes(editingUser.name))
										}
									>
										SAVE
									</Profiles.Button>
									<Profiles.Button
										onClick={() => {
											setEditingUser(null);
											setRender({ type: 'default', args: {} });
										}}
									>
										CANCEL
									</Profiles.Button>
									{editingUser._id && (
										<Profiles.Button
											onClick={() => setRender({ type: 'confirm_delete', args: { profileId: editingUser._id } })}
										>
											DELETE PROFILE
										</Profiles.Button>
									)}
								</Profiles.Panel>
							</React.Fragment>
						)}
					</React.Fragment>
				);
			default:
				return (
					<React.Fragment>
						<Profiles.Title>{render.type === 'edit_main' ? 'Manage Profiles:' : "Who's watching?"}</Profiles.Title>
						{userDetails &&
						userDetails.profiles && (
							<Profiles.List>
								{userDetails.profiles.map((profile) => (
									<Profiles.User
										key={profile._id}
										onClick={() => {
											if (render.type === 'edit_main') {
												prevDetails.current = profile;
												setEditingUser(profile);
												setRender({ type: 'edit_details', args: {} });
											} else setProfile(profile);
										}}
									>
										{render.type === 'edit_main' && <Profiles.AvatarEditOverlay />}
										<Profiles.Avatar src={profile.avatar} />
										<Profiles.Name>{profile.name}</Profiles.Name>
									</Profiles.User>
								))}
								{render.type === 'edit_main' &&
								userDetails.profiles.length < 5 && (
									<Profiles.User
										className="add-profile"
										onClick={() => {
											setEditingUser({ avatar: 'placeholder.png', name: '' });
											setRender({ type: 'edit_details', args: {} });
										}}
									>
										<Profiles.AvatarEditOverlay isAdd />
										<Profiles.Avatar src="placeholder.png" />
										<Profiles.Name>Add Profile</Profiles.Name>
									</Profiles.User>
								)}
							</Profiles.List>
						)}

						{render.type === 'edit_main' ? (
							<Profiles.Button className="white-btn" onClick={() => setRender({ type: 'default', args: {} })}>
								DONE
							</Profiles.Button>
						) : (
							<Profiles.Button onClick={() => setRender({ type: 'edit_main', args: {} })}>
								MANAGE PROFILES
							</Profiles.Button>
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
