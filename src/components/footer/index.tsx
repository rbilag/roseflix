import React from 'react';
import { ComponentProp } from '../../constants/types';
import { Container, Menu, MenuItem, Title, Link, Text } from './styles/footer';

function Footer({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};
Footer.Menu = function FooterMenu({ children, ...restProps }: ComponentProp) {
	return <Menu {...restProps}>{children}</Menu>;
};
Footer.MenuItem = function FooterMenuItem({ children, ...restProps }: ComponentProp) {
	return <MenuItem {...restProps}>{children}</MenuItem>;
};
Footer.Link = function FooterLink({ children, ...restProps }: ComponentProp) {
	return <Link {...restProps}>{children}</Link>;
};
Footer.Text = function FooterText({ children, ...restProps }: ComponentProp) {
	return <Text {...restProps}>{children}</Text>;
};

export default Footer;
