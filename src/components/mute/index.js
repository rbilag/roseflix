import React from 'react';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import { Container } from './styles/mute';

function Mute({ children, isMuted, onMutedToggle, ...restProps }) {
	return (
		<Container onClick={() => onMutedToggle(!isMuted)} {...restProps}>
			{isMuted ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
		</Container>
	);
}

export default Mute;
