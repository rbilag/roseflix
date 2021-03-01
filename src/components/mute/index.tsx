import React from 'react';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import { Container } from './styles/mute';

type MuteProp = {
	isMuted: boolean;
	onMutedToggle: (isMuted: boolean) => void;
	[x: string]: any;
};
function Mute({ isMuted, onMutedToggle, ...restProps }: MuteProp) {
	return (
		<Container
			onClick={(e) => {
				e.stopPropagation();
				onMutedToggle(!isMuted);
			}}
			{...restProps}
		>
			{isMuted ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
		</Container>
	);
}

export default Mute;
