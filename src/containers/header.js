import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import { useUser } from '../context/UserContext';

function HeaderContainer({ logoOnly, profile, setProfile, category, setCategory }) {
	const { userDetails, setUserDetails } = useUser();
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ isShown, handleShown ] = useState(false);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 100) {
				handleShown(true);
			} else {
				handleShown(false);
			}
		};
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, []);

	const signout = () => {
		localStorage.clear();
		setUserDetails(undefined);
	};

	return (
		<Header className={isShown ? 'opaque' : ''}>
			<Header.Panel>
				<Header.Logo
					className={!userDetails ? 'large' : ''}
					src="/images/branding/Netflix_Logo_RGB.png"
					alt="Roseflix Logo"
					to={ROUTES.HOME.path}
				/>
				{!logoOnly &&
				userDetails && (
					<Header.Nav>
						<Header.NavLink isSelected={category === 'series'} onClick={() => setCategory('series')}>
							TV Shows
						</Header.NavLink>
						<Header.NavLink isSelected={category === 'movies'} onClick={() => setCategory('movies')}>
							Movies
						</Header.NavLink>
					</Header.Nav>
				)}
			</Header.Panel>
			<Header.Panel>
				{!logoOnly &&
					(userDetails ? (
						<React.Fragment>
							<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
							<Header.Dropdown>
								<Header.Avatar src={`/images/avatars/${profile.avatar}`} alt="User Avatar" />
								<Header.Menu>
									{userDetails.profiles.map((profile) => (
										<Header.MenuOption
											key={`${profile._id}_option`}
											profile={profile}
											onClick={() => setProfile(profile)}
										/>
									))}
									<Header.MenuOption className="no-img">Manage Profiles</Header.MenuOption>
									<Header.MenuOption className="no-img" onClick={() => signout()}>
										Sign out of Netflix
									</Header.MenuOption>
								</Header.Menu>
							</Header.Dropdown>
						</React.Fragment>
					) : (
						<Header.Button to={ROUTES.SIGNIN.path}>Sign in</Header.Button>
					))}
			</Header.Panel>
		</Header>
	);
}

export default HeaderContainer;
