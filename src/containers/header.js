import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import { useUser } from '../context/UserContext';

function HeaderContainer({ logoOnly, profile, setProfile }) {
	const { userDetails } = useUser();
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
						<Header.NavLink href="#">Home</Header.NavLink>
						<Header.NavLink href="#">TV Shows</Header.NavLink>
						<Header.NavLink href="#">Movies</Header.NavLink>
						<Header.NavLink href="#">New &amp; Popular</Header.NavLink>
					</Header.Nav>
				)}
			</Header.Panel>
			<Header.Panel>
				{!logoOnly &&
					(userDetails ? (
						<React.Fragment>
							<SearchIcon />
							<Header.Dropdown>
								<Header.Avatar src={`/images/avatars/${profile.avatar}`} alt="User Avatar" />
								<Header.Menu>
									{userDetails.profiles.map((profile) => (
										<Header.MenuOption profile={profile} onClick={() => setProfile(profile)} />
									))}
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
