import styled from 'styled-components/macro';
import { IMAGE_BASE_URL, IMAGE_SIZES } from '../../../constants/constants';

interface OverlayProps {
	readonly fullOverlay?: boolean;
}
interface BannerProps {
	readonly src: string;
	readonly windowWidth: number;
}

export const Container = styled.div`
	color: #fff;
	z-index: 0;
`;
export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 0;
	background: ${({ fullOverlay }: OverlayProps) =>
		(fullOverlay ? `linear-gradient(rgba(20, 20, 20, 0) 60%, rgba(20, 20, 20, 0.95)), ` : '') +
		'linear-gradient(0.25turn, rgba(20, 20, 20, 0.75), rgba(20, 20, 20, 0))'};

	@media (max-width: 1000px) {
		height: 50vh;
	}
	@media (max-width: 600px) {
		height: 30vh;
	}
`;
export const Video = styled.div`
	width: 100%;
	height: 100vh;
	z-index: -99;

	.hero-video {
		pointer-events: none;
		z-index: 0;

		> div {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 115vh;
			z-index: 0;
			pointer-events: none;

			iframe {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 100%;
				height: 115vh;
				pointer-events: none;
				z-index: 0;
				transform: translate(-50%, -50%);

				@media (min-aspect-ratio: 16/9) {
					height: 56.25vw;
				}

				@media (max-aspect-ratio: 16/9) {
					width: 177.78vh;
				}
			}
		}
	}

	@media (max-width: 1000px) {
		height: 50vh;
		> div {
			height: 65vh;
		}
	}
`;
export const Banner = styled.div`
	width: 100%;
	height: 100vh;
	background: ${({ src, windowWidth }: BannerProps) =>
		`linear-gradient(rgba(20,20,20,0) 60%, rgba(20,20,20,0.95)), url("${IMAGE_BASE_URL +
			(windowWidth <= 600
				? IMAGE_SIZES.backdrop.xmedium
				: windowWidth <= 1000 ? IMAGE_SIZES.backdrop.medium : IMAGE_SIZES.backdrop.large) +
			src}") center`};
	background-size: cover;
	z-index: 0;

	@media (max-width: 1000px) {
		height: 50vh;
	}
	@media (max-width: 600px) {
		height: 30vh;
	}
`;
export const Title = styled.h1`
	font-size: 3.5rem;
	max-width: 35rem;
	line-height: 1.15;
	margin-bottom: 1rem;
	text-shadow: 0px 4px 3px rgba(20, 20, 20, 0.4), 0px 8px 13px rgba(20, 20, 20, 0.1),
		0px 18px 23px rgba(20, 20, 20, 0.1);
	transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

	&.title-small {
		font-size: 2.5rem;
		@media (max-width: 600px) {
			max-width: 13rem;
			font-size: 1.75rem;
			margin-bottom: 0;
		}
	}

	@media (max-width: 1000px) {
		max-width: 25rem;
	}
`;
export const Details = styled.div`
	position: absolute;
	left: 0;
	padding-left: 3.5rem;
	bottom: 0;
	padding-bottom: 23rem;
	z-index: 1;
	transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

	&.no-desc {
		padding-bottom: 15rem;
		@media (max-width: 1000px) {
			padding-bottom: 8rem;
			${Title} {
				font-size: 2.5rem;
				margin-bottom: 0.5rem;
			}
		}
	}

	@media (max-width: 1000px) {
		padding-left: 2.5rem;
		padding-bottom: 10rem;
	}
	@media (max-width: 600px) {
		padding-left: 1rem;
		padding-bottom: 2rem;
	}
`;
export const Description = styled.div`
	max-width: 43rem;
	font-size: 1.75rem;
	line-height: 1.2;
	text-shadow: 2px 4px 3px rgba(20, 20, 20, 0.3);
	transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

	@media (max-width: 1000px) {
		max-width: 23rem;
		font-size: .85rem;
		line-height: 1.5;
	}
`;
export const Button = styled.button`
	background: #69696996;
	border: none;
	outline: none;
	padding: 0.5rem 2rem 0.5rem 1.5rem;
	margin: 1.5rem 0.75rem 1rem 0;
	font-size: 1.45rem;
	font-weight: bold;
	color: #fff;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all 0.2s;

	&.white-btn {
		background: #fff;
		color: #141414;
		&:hover {
			background: #ffffffb8;
		}
	}

	&:hover {
		background: #69696979;
	}

	.MuiSvgIcon-root {
		font-size: 2.5rem;
		vertical-align: middle;

		@media (max-width: 1000px) {
			font-size: 1.25rem;
			padding-right: 0.25rem;
		}
	}

	span {
		vertical-align: middle;
	}
	@media (max-width: 1000px) {
		font-size: 0.75rem;
		padding: 0.5rem 1rem;
	}
	@media (max-width: 600px) {
		margin-top: 0.5rem;
	}
`;
