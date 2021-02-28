import styled from 'styled-components/macro';
import {
	Video as HeroVideo,
	Banner as HeroBanner,
	Overlay as HeroOverlay,
	Title as HeroTitle,
	Button as HeroButton
} from '../../hero/styles/hero';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`;
export const Inner = styled.div`
	width: 58rem;
	background: #181818;
	margin-top: 2rem;
	border-radius: 0.5rem;
	overflow: auto;
	position: relative;

	@media (max-width: 1000px) {
		width: 95vw;
	}
`;
export const Video = styled(HeroVideo)`
	height: 32rem;
	width: 100%;
	.details-video {		
    pointer-events: none;
    z-index: 0;
		> div {
			position: relative;
			overflow: hidden;
			z-index: 0;
			pointer-events: none;
			iframe {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 125%;
				height: 50rem;
				pointer-events: none;
				z-index: 0;
				-webkit-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				transform: translate(-50%,-50%);
			}
		}
	}
`;
export const Banner = styled(HeroBanner)`
	width: 100%;
	height: 32rem;
`;
export const Overlay = styled(HeroOverlay)`
	width: 100%;
	height: 32rem;
	background: linear-gradient(rgba(20, 20, 20, 0) 60%, rgba(20, 20, 20, 0.95));
`;
export const Title = styled(HeroTitle)`
	margin: 0 0 0.5rem;
	font-size: 2rem;
`;
export const Button = styled(HeroButton)`
	position: absolute;
	top: 23rem;
	left: 3rem;
`;
export const Summary = styled.div`
	padding: 1rem 2rem 0;
	display: flex;
`;
export const Panel = styled.div`
	padding: 1rem 1rem 0;
	p {
		margin-bottom: 1rem;
	}
	&.major-details {
		flex: 5;
		.air-date {
			span {
				margin-right: 1rem;
			}
		}
		.overview {
			font-weight: 500;
			font-size: 1.1rem;
			line-height: 1.5;
		}
	}
	&.minor-details {
		flex: 2;
	}
`;
export const MinorDetails = styled.p`
	font-size: 0.9rem;
	line-height: 1.5;
	span {
		color: #777;
	}
`;
export const Close = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 10;
	cursor: pointer;
	.MuiSvgIcon-root {
		background-color: #181818;
		border-radius: 50%;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.35rem;
	}
`;
