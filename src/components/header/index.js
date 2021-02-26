import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {
	Container,
	Panel,
	Nav,
	NavLink,
	Logo,
	Avatar,
	Button,
	Dropdown,
	Menu,
	MenuOption,
	Search,
	SearchInput
} from './styles/header';

function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Panel = function HeaderPanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
	return <Nav {...restProps}>{children}</Nav>;
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
	return <NavLink {...restProps}>{children}</NavLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	const history = useHistory();
	return <Logo onClick={() => history.push(to)} {...restProps} />;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, handleSearch, ...restProps }) {
	const [ searchActive, setSearchActive ] = useState(false);
	return (
		<Search {...restProps}>
			<SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} />
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				onKeyDown={({ code }) => (code === 'Enter' ? handleSearch() : null)}
				isActive={searchActive}
				placeholder="Type film or series title"
			/>
		</Search>
	);
};

Header.Avatar = function HeaderAvatar({ ...restProps }) {
	return <Avatar {...restProps} />;
};

Header.Button = function HeaderButton({ children, to, ...restProps }) {
	const history = useHistory();
	return (
		<Button onClick={() => history.push(to)} {...restProps}>
			{children}
		</Button>
	);
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
	return <NavLink {...restProps}>{children}</NavLink>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuOption = function HeaderMenuOption({ profile, children, ...restProps }) {
	return (
		<MenuOption {...restProps}>
			{profile && profile.avatar ? (
				<React.Fragment>
					<Avatar src={`/images/avatars/${profile.avatar}`} alt={`${profile.name} Avatar`} isOption />
					{profile.name}
				</React.Fragment>
			) : (
				children
			)}
		</MenuOption>
	);
};

export default Header;
