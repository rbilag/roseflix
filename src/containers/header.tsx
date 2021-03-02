import React, { useState } from 'react';
import { SECTIONS } from '../api/movieEndpoints';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
import { useUser } from '../context/UserContext';
import { HEADER_LINKS } from '../constants/constants';
import movieHttp from '../api/movie';
import { Profile, ShowOverview } from '../constants/types';

type HeaderContainerType = {
	logoOnly?: boolean;
	profile?: Profile;
	setProfile?: (profile?: Profile) => void;
	category?: string;
	setCategory?: (category: string) => void;
	isHeaderShown?: boolean;
	setSearchResult?: (results?: Array<ShowOverview> | null) => void;
	setHeroTrailer?: (heroTrailer?: string | null | undefined) => void;
};
function HeaderContainer({
	logoOnly,
	profile,
	setProfile,
	isHeaderShown,
	setSearchResult,
	setHeroTrailer,
	category,
	setCategory
}: HeaderContainerType) {
	const { userDetails, setUserDetails } = useUser();
	const [ searchTerm, setSearchTerm ] = useState('');

	const handleSearch = () => {
		if (setSearchResult) {
			if (searchTerm) {
				const endpoint =
					category === 'series'
						? SECTIONS.series.helpers.searchTV.replace('{{query}}', searchTerm)
						: SECTIONS.movies.helpers.searchMovie.replace('{{query}}', searchTerm);
				movieHttp
					.get(endpoint)
					.then(({ data }) => {
						data.results.sort(
							(a: ShowOverview, b: ShowOverview) =>
								a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
						);
						setSearchResult(data.results);
					})
					.catch((e) => console.log(e));
			} else {
				setSearchResult();
			}
		}
	};

	const signout = () => {
		localStorage.clear();
		setUserDetails(undefined);
	};

	const renderNavLinks = () => {
		return window.innerWidth <= 600 ? (
			<React.Fragment>
				<Header.NavDropdown options={HEADER_LINKS} setCategory={setCategory} category={category} />
			</React.Fragment>
		) : (
			HEADER_LINKS.map(({ title, value }) => (
				<Header.NavLink
					key={`${value}_navlink`}
					isSelected={category === value}
					onClick={() => setCategory && setCategory(value)}
				>
					{title}
				</Header.NavLink>
			))
		);
	};

	const handleChangeProfile = () => {
		setSearchResult && setSearchResult();
		setHeroTrailer && setHeroTrailer();
		setProfile && setProfile();
	};

	return (
		<Header className={isHeaderShown ? 'opaque' : ''}>
			<Header.Panel>
				<Header.Logo
					className={!userDetails ? 'large' : ''}
					src="/images/branding/Roseflix_Logo.png"
					alt="Roseflix Logo"
					to={ROUTES.HOME.path}
				/>
				{!logoOnly && userDetails && <Header.Nav>{renderNavLinks()}</Header.Nav>}
			</Header.Panel>
			<Header.Panel>
				{!logoOnly &&
					(userDetails ? (
						<React.Fragment>
							<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
							<Header.Dropdown>
								{profile && <Header.Avatar src={`/images/avatars/${profile.avatar}`} alt="User Avatar" />}
								<Header.Menu>
									{userDetails.profiles &&
										userDetails.profiles.map((profile) => (
											<Header.MenuOption
												key={`${profile._id}_option`}
												profile={profile}
												onClick={() => handleChangeProfile()}
											/>
										))}
									<Header.MenuOption className="no-img" onClick={() => handleChangeProfile()}>
										Manage Profiles
									</Header.MenuOption>
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
