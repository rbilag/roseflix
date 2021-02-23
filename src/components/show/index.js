import React from 'react';
import ReactPlayer from 'react-player';
import { Mute } from '..';
import { PLAYER_CONFIG } from '../../constants/config';
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

function Show({ children, ...restProps }) {
	return <CardContainer {...restProps}>{children}</CardContainer>;
}

Show.Sections = function ShowSections({ children, ...restProps }) {
	return <Sections {...restProps}>{children}</Sections>;
};

Show.Container = function ShowContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Show.Row = function ShowRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Show.Card = function ShowCard({ children, ...restProps }) {
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
}) {
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
				onEnded={() => onUpdateTrailer({})}
				config={PLAYER_CONFIG}
			/>
			<Mute isMuted={isMuted} onMutedToggle={setIsMuted} />
		</Video>
	);
};

Show.Poster = function ShowPoster({ children, ...restProps }) {
	return <Poster {...restProps}>{children}</Poster>;
};

Show.Details = function ShowDetails({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};
Show.Title = function ShowTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Show.Rating = function ShowRating({ children, ...restProps }) {
	return <Rating {...restProps}>{children}</Rating>;
};

Show.Genre = function ShowGenre({ genreDetails, i, length, ...restProps }) {
	return (
		<Genre {...restProps}>
			<span>{`${genreDetails ? genreDetails.name : ''}`}</span>
			{i < length - 1 && i !== 2 && <span className="genre-dot">&bull;</span>}
		</Genre>
	);
};

export default Show;
