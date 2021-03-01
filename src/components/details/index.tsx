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
import { DetailsTrailer, ComponentProp } from '../../constants/types';

type VideoProp = {
	isMuted: boolean;
	setIsMuted: (isMuted: boolean) => void;
	detailsTrailer: DetailsTrailer;
	setShowBanner: (showBanner: boolean) => void;
	[x: string]: any;
};
type RefProp = {
	childRef: React.RefObject<HTMLDivElement>;
	children: any;
	[x: string]: any;
};
type BannerProp = {
	src: string;
	[x: string]: any;
};

function Details({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
}

Details.Inner = function DetailsInner({ childRef, children, ...restProps }: RefProp) {
	return (
		<Inner ref={childRef} {...restProps}>
			{children}
		</Inner>
	);
};

Details.Video = function DetailsVideo({ isMuted, setIsMuted, detailsTrailer, setShowBanner, ...restProps }: VideoProp) {
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
Details.Banner = function DetailsBanner({ src, ...restProps }: BannerProp) {
	return <Banner src={src} windowWidth={window.innerWidth} {...restProps} />;
};
Details.Overlay = function DetailsOverlay({ ...restProps }) {
	return <Overlay {...restProps} />;
};
Details.Title = function DetailsTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};
Details.Button = function DetailsButton({ children, ...restProps }: ComponentProp) {
	return <Button {...restProps}>{children}</Button>;
};
Details.Summary = function DetailsSummary({ children, ...restProps }: ComponentProp) {
	return <Summary {...restProps}>{children}</Summary>;
};
Details.Panel = function DetailsPanel({ children, ...restProps }: ComponentProp) {
	return <Panel {...restProps}>{children}</Panel>;
};
Details.MinorDetails = function DetailsMinorDetails({ children, ...restProps }: ComponentProp) {
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
