import styled from 'styled-components/macro';

export const Container = styled.div`
	position: absolute;
	top: calc(163px - 3.5rem);
	right: 1rem;
	color: #ffffff9f;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	border: 1px solid #ffffff9f;
	z-index: 1;
	transition: all 0.35s;

	.MuiSvgIcon-root {
		padding: 0.5rem;
	}

	@media (max-width: 1000px) {
		top: calc(128px - 2rem);
		right: 0.5rem;
		width: 1.5rem;
		height: 1.5rem;
		.MuiSvgIcon-root {
			font-size: 0.75rem;
			padding: 0.38rem;
		}
	}

	@media (max-width: 600px) {
		top: calc(96px - 1.75rem);
		right: 0.25rem;
	}

	&:hover {
		color: #fff;
		border: 1px solid #fff;
	}

	&.volume-btn--hero,
	&.volume-btn--details {
		top: 75vh;
		right: 6rem;
		cursor: pointer;
		width: 3.5rem;
		height: 3.5rem;
		.MuiSvgIcon-root {
			padding: 0.85rem;
			font-size: 1.75rem;
		}
		@media (max-width: 1000px) {
			top: 33vh;
			right: 5rem;
			width: 2rem;
			height: 2rem;
			.MuiSvgIcon-root {
				font-size: 1rem;
				padding: 0.5rem;
			}
		}
	}

	&.volume-btn--details {
		top: 25rem;
		right: 3rem;
		@media (max-width: 600px) {
			top: 14rem;
		}
	}
`;
