import styled from 'styled-components/macro';

export const Sections = styled.div`position: absolute;`;
export const Poster = styled.img`border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;`;
export const Container = styled.div`
	margin-top: -10rem;
	margin-bottom: 2rem;
	h2 {
		padding-left: 3.5rem;
		font-size: 1.75rem;
		color: #fff;
		font-weight: bold;
	}
`;
export const Card = styled.div`
	cursor: pointer;
	border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;
	transition: transform .25s, visibility .25s ease-in;
`;
export const Video = styled.div`
	height: 0;
	width: 0;
	opacity: 0;
	border-radius: 0.35rem 0.35rem 0 0;

	&.trailer-visible {
		height: 163px;
		width: 285px;
		opacity: 1;
		border-radius: 0.35rem 0.35rem 0 0;
	}
	.trailer-video {
		pointer-events: none;
		border-radius: 0.35rem 0.35rem 0 0;
		> div {
			position: relative;
			overflow: hidden;
			height: 165px;
			width: 285px;
			pointer-events: none;
			border-radius: 0.35rem 0.35rem 0 0;
		}
		iframe {
			position: absolute;
			top: 50%;
			left: 50%;
			height: 253px;
			width: 448px;
			pointer-events: none;
			z-index: -1;
			transform: translate(-50%, -55%);
			border-radius: 0.35rem 0.35rem 0 0;
		}
	}
`;
export const Details = styled.div`
	opacity: 0;
	width: 0;
	padding: 0;
	transition: opacity 300ms;
	background: #111111;
	/* margin-top: -0.25rem; */
	/* border-radius: 0 0 0.25rem 0.25rem; */
	font-size: 0.75rem;
	* {
		display: none;
	}
`;
export const CardContainer = styled.div`
	object-fit: contain;
	width: 100%;
	max-height: 13rem;
	margin-right: 0.25rem;
	z-index: 1;

	&:hover {
		position: relative;
		max-height: unset;
		z-index: 2;
		margin-right: 18rem;

		${Details} {
			opacity: 1;
			width: calc(100% - 1.5rem);
			padding: 1rem 0.75rem;
			border-radius: 0 0 0.25rem 0.25rem;
			* {
				display: inline-block;
			}
		}

		${Card} {
			position: absolute;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.75), 0 6px 6px rgba(0, 0, 0, 0.5);
			/* box-shadow: 0 19px 38px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%); */
		}
	}
`;
export const Row = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: auto;
	padding: 8rem 0 11rem 3.5rem;
	margin-top: -7rem;
	z-index: 1;

	&::-webkit-scrollbar {
		display: none;
	}

	&.md-container {
		/* padding: 8rem 0 13.5rem 3.5rem; */

		${CardContainer} {
			&:hover {
				${Card} {
					transform: scale(1.35);
				}
			}
		}

		${Poster} {
			max-height: 10rem;
		}
	}

	&.lg-container {
		padding: 8rem 0 13.5rem 3.5rem;

		${CardContainer} {
			max-height: 30rem;
			padding-bottom: 1rem;
			&:hover {
				margin-right: 18.92rem;
				${Card} {
					transform: scale(1.2);
				}
			}
		}
		${Video} {
			&.trailer-visible {
				height: 450px;
				width: 300px;
			}
			.trailer-video {
				> div {
					height: 450px;
					width: 300px;
				}
				iframe {
					height: 650px;
					width: 900px;
					transform: translate(-50%, -50%);
				}
			}
		}
		${Poster} {
			max-height: 28rem;
		}
		${Details} {
			margin-top: -4.5rem;
			background: none;
			background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1));
		}
		.volume-btn {
			top: 1rem;
		}
	}
`;
export const Title = styled.h3`
	font-weight: 600;
	font-size: 1.1rem;
`;
export const Rating = styled.p`
	margin: 0.25rem 0;
	font-size: 0.7rem;
	.new-badge {
		color: #46d369;
		font-weight: 800;
		margin-right: 0.5rem;
	}
`;
export const Genre = styled.span`
	font-size: 0.8rem;
	line-height: 1;
	.genre-dot {
		font-weight: bold;
		margin: 0.5rem;
		opacity: 0.5;
	}
`;
