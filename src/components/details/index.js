import React from 'react';
import ReactPlayer from 'react-player';
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
	MinorDetails
} from './styles/details';

function Details({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Details.Video = function DetailsVideo({ isMuted, setIsMuted, detailsTrailer, setShowBanner, ...restProps }) {
	const { youtube: { playerVars } } = PLAYER_CONFIG;
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
				config={{ youtube: { playerVars: { ...playerVars, start: detailsTrailer.start } } }}
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

export default Details;
