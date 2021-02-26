import React from 'react';
import ReactPlayer from 'react-player';
import CloseIcon from '@material-ui/icons/Close';
import { Mute } from '..';
import { PLAYER_CONFIG } from '../../constants/config';
import {
	Container,
	Inner,
	Video,
	Banner,
	Overlay,
	Title,
	Button,
	Summary,
	Panel,
	MinorDetails,
	Close
} from './styles/details';

function Details({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Details.Inner = function DetailsInner({ childRef, children, ...restProps }) {
	return (
		<Inner ref={childRef} {...restProps}>
			{children}
		</Inner>
	);
};

Details.Video = function DetailsVideo({ isMuted, setIsMuted, detailsTrailer, setShowBanner, ...restProps }) {
	const { youtube: { playerVars } } = PLAYER_CONFIG;
	const config = { youtube: { playerVars: { ...playerVars, start: Math.floor(detailsTrailer.start) } } };
	return (
		<Video {...restProps}>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${detailsTrailer.key}`}
				className="details-video"
				width="100%"
				height="100%"
				playing
				muted={isMuted}
				onEnded={() => setShowBanner(true)}
				config={config}
			/>
			<Mute className="volume-btn--details" isMuted={isMuted} onMutedToggle={setIsMuted} />
		</Video>
	);
};
Details.Banner = function DetailsBanner({ children, src, ...restProps }) {
	return (
		<Banner src={src} {...restProps}>
			{children}
		</Banner>
	);
};
Details.Overlay = function DetailsOverlay({ ...restProps }) {
	return <Overlay {...restProps} />;
};
Details.Title = function DetailsTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Details.Button = function DetailsButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
Details.Summary = function DetailsSummary({ children, ...restProps }) {
	return <Summary {...restProps}>{children}</Summary>;
};
Details.Panel = function DetailsPanel({ children, ...restProps }) {
	return <Panel {...restProps}>{children}</Panel>;
};
Details.MinorDetails = function DetailsMinorDetails({ children, ...restProps }) {
	return <MinorDetails {...restProps}>{children}</MinorDetails>;
};
Details.Close = function DetailsClose({ ...restProps }) {
	return (
		<Close {...restProps}>
			<CloseIcon />
		</Close>
	);
};

export default Details;
