import styled from 'styled-components/macro';

export const Sections = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
`;
export const Poster = styled.img`border-radius: 0.35rem;`;
export const Container = styled.div`
	margin-top: -10rem;
	margin-bottom: 2rem;
	h2 {
		padding-left: 3.5rem;
		font-size: 1.75rem;
		color: #fff;
		font-weight: bold;
	}
	@media (max-width: 1000px) {
		margin-top: -5rem;
		margin-bottom: 0;
		h2 {
			font-size: 1rem;
		}
	}
	@media (max-width: 600px) {
		margin-top: 0;
		margin-bottom: 0;
		h2 {
			font-size: 0.9rem;
			padding: 0 1.5rem 0;
		}
	}
`;
export const Card = styled.div`
	cursor: pointer;
	border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;
	transition: transform .25s, visibility .25s, box-shadow .25s ease-in;
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

		@media (max-width: 1000px) {
			height: 130px;
			width: 227.219px;
		}
		@media (max-width: 600px) {
			height: 96px;
			width: 170.406px;
		}
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
			@media (max-width: 1000px) {
				height: 132px;
				width: 227.219px;
			}
			@media (max-width: 600px) {
				height: 98px;
				width: 170.406px;
			}
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
			@media (max-width: 1000px) {
				height: 220px;
				width: 390.219px;
			}
			@media (max-width: 600px) {
				height: 186px;
				width: 227.4px;
			}
		}
	}
`;
export const Details = styled.div`
	opacity: 0;
	width: 0;
	padding: 0;
	background: #111111;
	font-size: 0.75rem;
	* {
		display: none;
	}
	@media (max-width: 600px) {
		br {
			display: none !important;
		}
	}
`;
export const CardContainer = styled.div`
	object-fit: contain;
	width: 100%;
	margin-right: 0.25rem;
	z-index: 1;
	transition: 0s all;

	&:hover {
		transition-delay: 500ms;
		position: relative;
		max-height: unset;
		z-index: 2;
		margin-right: 18rem;

		${Details} {
			transition-delay: 500ms;
			opacity: 1;
			width: calc(100% - 1.5rem);
			padding: 1rem 0.75rem;
			border-radius: 0 0 0.25rem 0.25rem;
			* {
				transition-delay: 500ms;
				display: inline-block;
			}
			@media (max-width: 1000px) {
				width: calc(100% - 1rem);
				padding: 0.5rem 0.5rem 0.25rem;
			}
			@media (max-width: 600px) {
				padding: 0.25rem 0.5rem 0.25rem;
			}
		}

		${Card} {
			transition-delay: 500ms;
			position: absolute;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.75), 0 6px 6px rgba(0, 0, 0, 0.5);
		}

		@media (max-width: 1000px) {
			margin-right: 14.45rem;
		}
		@media (max-width: 600px) {
			margin-right: 10.9rem;
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
	@media (max-width: 1000px) {
		padding: 8rem 0 7rem 2.75rem;
	}
	@media (max-width: 600px) {
		padding: 8rem 0 3rem 1.5rem;
	}

	&.md-container {
		${CardContainer} {
			transition: 0s all;
			&:hover {
				${Card} {
					transition-delay: 500ms;
					transform: scale(1.35);
				}
				${Details} {
					transition-delay: 500ms;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.75), 0 6px 6px rgba(0, 0, 0, 0.5);
				}
			}
		}

		${Poster} {
			max-height: 10rem;
			@media (max-width: 1000px) {
				max-height: 8rem;
			}
			@media (max-width: 600px) {
				max-height: 6rem;
			}
		}
	}

	&.lg-container {
		padding: 8rem 0 14rem 3.5rem;
		@media (max-width: 1000px) {
			padding: 8rem 0 8.5rem 2.75rem;
		}
		@media (max-width: 600px) {
			padding: 8rem 0 3rem 1.5rem;
		}

		${CardContainer} {
			max-height: 30rem;
			padding-bottom: 1rem;
			transition: 0s all;
			&:hover {
				margin-right: 18.92rem;
				${Card} {
					transition-delay: 500ms;
					transform: scale(1.2);
				}
				${Details} {
					transition-delay: 500ms;
				}
				@media (max-width: 1000px) {
					margin-right: 11.83rem;
				}
				@media (max-width: 600px) {
					margin-right: 9.9rem;
				}
			}
		}
		${Video} {
			&.trailer-visible {
				height: 450px;
				width: 300px;
				border-radius: 0.35rem;
				@media (max-width: 1000px) {
					height: 278px;
					width: 185px;
				}
				@media (max-width: 600px) {
					height: 256px;
					width: 170.656px;
				}
			}
			.trailer-video {
				> div {
					height: 450px;
					width: 300px;
					border-radius: 0.35rem;
					@media (max-width: 1000px) {
						height: 278px;
						width: 185px;
					}
					@media (max-width: 600px) {
						height: 256px;
						width: 170.656px;
					}
				}
				iframe {
					height: 650px;
					width: 900px;
					transform: translate(-50%, -50%);
					border-radius: 0.35rem;
					@media (max-width: 1000px) {
						height: 478px;
						width: 785px;
					}
					@media (max-width: 600px) {
						height: 456px;
						width: 770.656px;
					}
				}
			}
		}
		${Poster} {
			max-height: 28rem;
			@media (max-width: 1000px) {
				max-height: 21.25rem;
			}
			@media (max-width: 600px) {
				max-height: 16rem;
			}
		}
		${Details} {
			margin-top: -4.5rem;
			transition: 0s all;
			background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1));
			z-index: 10;
			@media (max-width: 1000px) {
				margin-top: -2.85rem;
			}
			@media (max-width: 600px) {
				margin-top: -1.25rem;
			}
		}
		.volume-btn {
			top: 1rem;
		}
	}
`;
export const Title = styled.h3`
	font-weight: 600;
	font-size: 1.1rem;
	@media (max-width: 1000px) {
		font-size: 0.75rem;
	}
	@media (max-width: 600px) {
		font-size: 0.65rem;
	}
`;
export const Rating = styled.p`
	margin: 0.25rem 0;
	font-size: 0.7rem;
	.new-badge {
		color: #46d369;
		font-weight: 800;
		margin-right: 0.5rem;
	}
	@media (max-width: 1000px) {
		font-size: 0.5rem;
	}
	@media (max-width: 600px) {
		display: none !important;
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
	@media (max-width: 1000px) {
		font-size: 0.6rem;
		.genre-dot {
			margin: 0 0.35rem 0.25rem;
		}
	}
	@media (max-width: 600px) {
		display: none !important;
	}
`;
