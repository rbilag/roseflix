import React, { useState, useRef } from 'react';
import { HeaderContainer } from '.';
import { Form, Profiles } from '../components';

function ProfilesContainer({ userDetails, setProfile }) {
	const [ render, setRender ] = useState('default');
	const [ editingUser, setEditingUser ] = useState();
	const prevDetails = useRef();

	const handleSave = () => {
		console.log('to connect to backend');
	};

	const renderSwitch = () => {
		switch (render) {
			case 'confirm_edit':
				return <React.Fragment>CONFIRM EDIT</React.Fragment>;
			case 'edit_avatar':
				return (
					<React.Fragment>
						<Profiles.Title>Edit Profile</Profiles.Title>
						<p>Choose a profile icon</p>
						<p>{prevDetails.current.name}</p>
						<Profiles.Avatar src={prevDetails.current.avatar} />
						{/* TODO render avatar options here */}
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
