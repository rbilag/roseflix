import styled from 'styled-components/macro';

export const Container = styled.div`
	color: #fff;
	border-bottom: 0.5rem solid #222;
`;

export const Title = styled.h1`
	text-align: center;
	margin: 4rem 0 3rem;
`;

export const Inner = styled.div`
	max-width: 50rem;
	margin: auto;

	@media (max-width: 1000px) {
		max-width: 45rem;
	}
`;

export const Item = styled.div`
	padding: 1.25rem 2rem;
	margin: 0.5rem 0;
	background-color: #303030;
	font-weight: 500;
	font-size: 1.5rem;
	cursor: pointer;
	@media (max-width: 1000px) {
		font-size: 1.3rem;
	}
	@media (max-width: 600px) {
		font-size: 1.15rem;
		font-weight: 400;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	.MuiSvgIcon-root {
		margin: auto 0;
	}
`;

export const Body = styled.div`
	margin: 0;
	opacity: 0;
	pointer-events: none;
	max-height: 0;
	white-space: pre-wrap;
	user-select: none;
	transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);

	&.accordion__Body--selected {
		margin: 2rem 0 0.5rem;
		opacity: 1;
		max-height: 80rem;
		pointer-events: auto;
	}
`;
