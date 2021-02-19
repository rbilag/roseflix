import styled from 'styled-components/macro';

export const Container = styled.div`color: #fff;`;

export const Inner = styled.div`
	max-width: 50rem;
	margin: 4rem auto 5rem;
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 1.15rem;
	text-align: center;
`;

export const Panel = styled.div`
	margin: 1rem 5rem;
	display: flex;
	justify-content: space-around;

	@media (max-width: 1000px) {
		margin: 1rem 2rem;
	}
`;

export const Input = styled.input`
	flex-grow: 2;
	padding: 1rem;
	border-radius: 0.25rem 0 0 0.25rem;
	outline: none;
	border: none;
`;

export const Button = styled.button`
	flex-grow: 1;
	background-color: #e50914;
	color: #fff;
	font-size: 1.5rem;
	padding: 1rem 0.25rem;
	display: flex;
	justify-content: space-evenly;
	place-items: center;
	border: none;
	cursor: pointer;
	border-radius: 0 0.25rem 0.25rem 0;

	.MuiSvgIcon-root {
		font-size: 1.15rem;
	}
	@media (max-width: 600px) {
		font-size: 1.15rem;
		.MuiSvgIcon-root {
			font-size: 0.8rem;
		}
	}
`;
