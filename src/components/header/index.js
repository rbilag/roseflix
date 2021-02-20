import React from 'react';
import { useHistory } from 'react-router-dom';
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

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	const history = useHistory();
	return <Logo onClick={() => history.push(to)} {...restProps} />;
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

export default Header;
