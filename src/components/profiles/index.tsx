import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
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
	IconButton,
	AvatarGrid,
	AvatarHeader,
	AvatarHeaderPanel
} from './styles/profiles';
import { ComponentProp } from '../../constants/types';

function Profiles({ children, ...restProps }: ComponentProp) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }: ComponentProp) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }: ComponentProp) {
	return <User {...restProps}>{children}</User>;
};

Profiles.Avatar = function ProfilesAvatar({ src, ...restProps }: ComponentProp) {
	return <Avatar src={`/images/avatars/${src}`} {...restProps} />;
};

Profiles.AvatarGrid = function ProfilesAvatarGrid({ children, ...restProps }: ComponentProp) {
	return <AvatarGrid {...restProps}>{children}</AvatarGrid>;
};

Profiles.AvatarHeader = function ProfilesAvatarHeader({ children, ...restProps }: ComponentProp) {
	return <AvatarHeader {...restProps}>{children}</AvatarHeader>;
};

Profiles.AvatarHeaderPanel = function ProfilesAvatarHeaderPanel({ children, ...restProps }: ComponentProp) {
	return <AvatarHeaderPanel {...restProps}>{children}</AvatarHeaderPanel>;
};

Profiles.AvatarEditOverlay = function ProfilesAvatarEditOverlay({ isAdd, ...restProps }: ComponentProp) {
	return <AvatarEditOverlay {...restProps}>{isAdd ? <AddIcon /> : <EditIcon />}</AvatarEditOverlay>;
};

Profiles.Name = function ProfilesName({ children, ...restProps }: ComponentProp) {
	return <Name {...restProps}>{children}</Name>;
};

Profiles.IconButton = function ProfilesIconButton({ onClick, ...restProps }: ComponentProp) {
	return (
		<IconButton {...restProps}>
			<EditIcon onClick={onClick} />
		</IconButton>
	);
};

Profiles.Button = function ProfilesButton({ children, ...restProps }: ComponentProp) {
	return <Button {...restProps}>{children}</Button>;
};

Profiles.Panel = function ProfilesPanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};

export default Profiles;
