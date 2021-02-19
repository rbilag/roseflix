import React, { useState, useEffect } from 'react';
import { Header } from '../components';

function HeaderContainer() {
	// TODO make context
	const isLoggedIn = false;
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
					className={!isLoggedIn ? 'large' : ''}
					src="/images/branding/Netflix_Logo_RGB.png"
					alt="Roseflix Logo"
				/>
				{isLoggedIn && (
					<Header.Nav>
						<Header.NavLink href="#">Home</Header.NavLink>
						<Header.NavLink href="#">Browse</Header.NavLink>
						<Header.NavLink href="#">My List</Header.NavLink>
						<Header.NavLink href="#">Browse</Header.NavLink>
					</Header.Nav>
				)}
			</Header.Panel>

			{isLoggedIn ? (
				<Header.Avatar src="/images/avatars/User_Avatar.png" alt="Roseflix Logo" />
			) : (
				<Header.Button>Sign in</Header.Button>
			)}
		</Header>
	);
}

export default HeaderContainer;
