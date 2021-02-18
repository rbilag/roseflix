import React from 'react';
import { Container, Menu, MenuItem, Title, Link, Text } from './styles/footer';

function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Footer.Menu = function FooterMenu({ children, ...restProps }) {
	return <Menu {...restProps}>{children}</Menu>;
};
Footer.MenuItem = function FooterMenuItem({ children, ...restProps }) {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

export default Footer;
