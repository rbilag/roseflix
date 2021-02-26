import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import {
	Container,
	Inner,
	Title,
	List,
	User,
	Avatar,
	AvatarEditOverlay,
	Name,
	Button,
	Panel,
	IconButton
} from './styles/profiles';

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

Profiles.Avatar = function ProfilesAvatar({ src, ...restProps }) {
	return <Avatar src={`/images/avatars/${src}`} {...restProps} />;
};

Profiles.AvatarEditOverlay = function ProfilesAvatarEditOverlay({ ...restProps }) {
	return (
		<AvatarEditOverlay {...restProps}>
			<EditIcon />
		</AvatarEditOverlay>
	);
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Profiles.IconButton = function ProfilesIconButton({ onClick, ...restProps }) {
	return (
		<IconButton {...restProps}>
			<EditIcon onClick={onClick} />
		</IconButton>
	);
};

Profiles.Button = function ProfilesButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Profiles.Panel = function ProfilesPanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};

export default Profiles;
