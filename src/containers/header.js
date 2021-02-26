import React, { useState } from 'react';
import { SECTIONS } from '../api/movieEndpoints';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import { useUser } from '../context/UserContext';
import movieHttp from '../api/movie';

function HeaderContainer({ logoOnly, profile, setProfile, category, setCategory, isHeaderShown, setSearchResult }) {
	const { userDetails, setUserDetails } = useUser();
	const [ searchTerm, setSearchTerm ] = useState('');

	const handleSearch = () => {
		if (searchTerm) {
			const endpoint =
				category === 'series'
					? SECTIONS.series.helpers.searchTV.replace('{{query}}', searchTerm)
					: SECTIONS.movies.helpers.searchMovie.replace('{{query}}', searchTerm);
			movieHttp
				.get(endpoint)
				.then(({ data }) => {
					console.log(data.results);
					data.results.sort((a, b) => (a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0));
					setSearchResult(data.results);
				})
				.catch((e) => console.log(e));
		} else {
			setSearchResult();
		}
	};

	const signout = () => {
		localStorage.clear();
		setUserDetails(undefined);
	};

	return (
		<Header className={isHeaderShown ? 'opaque' : ''}>
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
							<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
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
										Sign out of Roseflix
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
