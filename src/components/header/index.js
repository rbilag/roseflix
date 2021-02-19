import React from 'react';
import { Container, Panel, Nav, NavLink, Logo, Avatar, Button } from './styles/header';

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

Header.Logo = function HeaderLogo({ ...restProps }) {
	return <Logo {...restProps} />;
};

Header.Avatar = function HeaderAvatar({ ...restProps }) {
	return <Avatar {...restProps} />;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
	return <NavLink {...restProps}>{children}</NavLink>;
};

export default Header;
