import React from 'react';
import ReactPlayer from 'react-player';
import { Mute } from '..';
import { PLAYER_CONFIG } from '../../constants/config';
import { ComponentProp, TrailerDisplayed } from '../../constants/types';
import {
	Container,
	Sections,
	Row,
	CardContainer,
	Card,
	Video,
	Poster,
	Details,
	Title,
	Rating,
	Genre
} from './styles/show';

type VideoProp = {
	src: string;
	playerRef: React.RefObject<ReactPlayer>;
	isMuted: boolean;
	setIsMuted: (isMuted: boolean) => void;
	onUpdateTrailer: (trailerDisplayed: TrailerDisplayed | null | undefined) => void;
	onTrailerReady: () => void;
	[x: string]: any;
};
function Show({ children, ...restProps }: ComponentProp) {
	return <CardContainer {...restProps}>{children}</CardContainer>;
}

Show.Sections = function ShowSections({ children, ...restProps }: ComponentProp) {
	return <Sections {...restProps}>{children}</Sections>;
};

Show.Container = function ShowContainer({ children, ...restProps }: ComponentProp) {
	return <Container {...restProps}>{children}</Container>;
};

Show.Row = function ShowRow({ children, ...restProps }: ComponentProp) {
	return <Row {...restProps}>{children}</Row>;
};

Show.Card = function ShowCard({ children, ...restProps }: ComponentProp) {
	return <Card {...restProps}>{children}</Card>;
};

Show.Video = function ShowVideo({
	src,
	playerRef,
	isMuted,
	setIsMuted,
	onUpdateTrailer,
	onTrailerReady,
	...restProps
}: VideoProp) {
	return (
		<Video {...restProps}>
			<ReactPlayer
				ref={playerRef}
				url={`https://www.youtube.com/watch?v=${src}`}
				className="trailer-video"
				width="100%"
				height="100%"
				playing
				muted={isMuted}
				onReady={() => onTrailerReady()}
				onEnded={() => onUpdateTrailer(null)}
				config={PLAYER_CONFIG}
			/>
			<Mute isMuted={isMuted} onMutedToggle={setIsMuted} />
		</Video>
	);
};

Show.Poster = function ShowPoster({ children, ...restProps }: ComponentProp) {
	return <Poster {...restProps}>{children}</Poster>;
};

Show.Details = function ShowDetails({ children, ...restProps }: ComponentProp) {
	return <Details {...restProps}>{children}</Details>;
};
Show.Title = function ShowTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Show.Rating = function ShowRating({ children, ...restProps }: ComponentProp) {
	return <Rating {...restProps}>{children}</Rating>;
};

Show.Genre = function ShowGenre({ genreDetails, i, length, ...restProps }: ComponentProp) {
	return (
		<Genre {...restProps}>
			<span>{`${genreDetails ? genreDetails.name : ''}`}</span>
			{i < length - 1 && i !== 2 && <span className="genre-dot">&bull;</span>}
		</Genre>
	);
};

export default Show;
