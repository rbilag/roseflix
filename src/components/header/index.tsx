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
	NavDropdown,
	Menu,
	MenuOption,
	Search,
	SearchInput
} from './styles/header';
import { ComponentProp } from '../../constants/types';

type LogoProp = {
	to: string;
	[x: string]: any;
};
type HeaderSearchProp = {
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
	handleSearch: () => void;
	[x: string]: any;
};
type HeaderNavLinkProp = {
	isSelected: boolean;
	children: any;
	[x: string]: any;
};
type DropdownOption = {
	title: string;
	value: string;
};
function Header({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Panel = function HeaderPanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: ComponentProp) {
	return <Nav {...restProps}>{children}</Nav>;
};

Header.NavLink = function HeaderNavLink({ children, isSelected, ...restProps }: HeaderNavLinkProp) {
	return (
		<NavLink isSelected={isSelected} {...restProps}>
			{children}
		</NavLink>
	);
};

Header.Logo = function HeaderLogo({ to, ...restProps }: LogoProp) {
	const history = useHistory();
	return <Logo onClick={() => history.push(to)} {...restProps} />;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, handleSearch, ...restProps }: HeaderSearchProp) {
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

Header.Avatar = function HeaderAvatar({ ...restProps }: ComponentProp) {
	return <Avatar {...restProps} />;
};

Header.Button = function HeaderButton({ children, to, ...restProps }: ComponentProp) {
	const history = useHistory();
	return (
		<Button onClick={() => history.push(to)} {...restProps}>
			{children}
		</Button>
	);
};
Header.NavDropdown = function EpisodeDropdown({ options, category, setCategory, ...restProps }: ComponentProp) {
	return (
		<NavDropdown {...restProps} onChange={(e) => setCategory(e.target.value)} value={category}>
			{options.map(({ title, value }: DropdownOption) => (
				<option key={`${value}_option`} value={value}>
					{title}
				</option>
			))}
		</NavDropdown>
	);
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }: ComponentProp) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }: ComponentProp) {
	return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuOption = function HeaderMenuOption({ profile, children, ...restProps }: ComponentProp) {
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
