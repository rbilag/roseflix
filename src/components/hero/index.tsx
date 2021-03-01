import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Overlay, Video, Banner, Details, Title, Description, Button } from './styles/hero';
import { PLAYER_CONFIG } from '../../constants/config';
import { Mute } from '../index';
import { ComponentProp } from '../../constants/types';

type VideoProp = {
	playerRef: React.RefObject<ReactPlayer>;
	isMuted: boolean;
	setIsMuted: (isMuted: boolean) => void;
	heroTrailer: string | null;
	setHeroTrailer: (heroTrailer?: string | null) => void;
	[x: string]: any;
};
function Hero({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
}

Hero.Video = function HeroVideo({
	playerRef,
	isMuted,
	setIsMuted,
	heroTrailer,
	setHeroTrailer,
	...restProps
}: VideoProp) {
	return (
		<Video {...restProps}>
			<ReactPlayer
				ref={playerRef}
				url={`https://www.youtube.com/watch?v=${heroTrailer}`}
				className="hero-video"
				width="100%"
				height="100%"
				playing
				muted={isMuted}
				onEnded={() => setHeroTrailer()}
				config={PLAYER_CONFIG}
			/>
			<Mute className="volume-btn--hero" isMuted={isMuted} onMutedToggle={setIsMuted} />
		</Video>
	);
};
Hero.Banner = function HeroBanner({ children, src, windowWidth, ...restProps }: ComponentProp) {
	return (
		<Banner src={src} windowWidth={windowWidth} {...restProps}>
			{children}
		</Banner>
	);
};
Hero.Overlay = function HeroOverlay({ fullOverlay, ...restProps }: ComponentProp) {
	return <Overlay fullOverlay={fullOverlay} {...restProps} />;
};
Hero.Details = function HeroDetails({ children, ...restProps }: ComponentProp) {
	return <Details {...restProps}>{children}</Details>;
};
Hero.Title = function HeroTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};
Hero.Description = function HeroDescription({ children, ...restProps }: ComponentProp) {
	return <Description {...restProps}>{children}</Description>;
};
Hero.Button = function HeroButton({ children, ...restProps }: ComponentProp) {
	return <Button {...restProps}>{children}</Button>;
};

export default Hero;
