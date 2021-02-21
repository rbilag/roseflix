import React from 'react';
import { Container, Inner, Title, List, User, Avatar, Name, Button } from './styles/profiles';

function Profiles({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <User {...restProps}>{children}</User>;
};

Profiles.Avatar = function ProfilesTitle({ src, ...restProps }) {
	return <Avatar src={`/images/avatars/${src}`} {...restProps} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Profiles.Button = function ProfilesButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Profiles;
