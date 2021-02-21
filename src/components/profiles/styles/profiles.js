import styled from 'styled-components/macro';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: #141414;
	display: flex;
	place-content: center;
	align-items: center;
	text-align: center;
`;
export const Inner = styled.div``;
export const Title = styled.h1`
	color: #fff;
	font-size: 4rem;
	font-weight: 500;
	margin: 0 0 2rem;
	@media (max-width: 1000px) {
		font-size: 2.5rem;
		font-weight: 400;
		margin: 0 0 0.75rem;
	}
	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
export const List = styled.div`display: flex;`;
export const Avatar = styled.img`
	width: 100%;
	border: 3px solid transparent;
	border-radius: 0.5rem;
	transition: all 0.1s ease-in;
	@media (max-width: 1000px) {
		border: 2px solid transparent;
	}
`;
export const Name = styled.p`
	color: grey;
	font-size: 1.65rem;
	font-weight: 400;
	margin: 0.5rem 0 0;
	transition: all 0.1s ease-in;
	@media (max-width: 1000px) {
		font-size: 0.8rem;
	}
`;
export const User = styled.div`
	max-width: 12rem;
	margin: 0 1.25rem;
	cursor: pointer;

	&:hover {
		${Avatar} {
			border: 3px solid #fff;
		}
		${Name} {
			color: #fff;
		}
	}

	@media (max-width: 1000px) {
		max-width: 6.5rem;
		margin: 0 0.65rem;
		&:hover {
			${Avatar} {
				border: 2px solid #fff;
			}
		}
	}
	@media (max-width: 600px) {
		max-width: 4.3rem;
		margin: 0 0.15rem;
	}
`;
export const Button = styled.button`
	background-color: transparent;
	border: 1px solid grey;
	color: grey;
	font-weight: 500;
	font-size: 1.3rem;
	letter-spacing: 2px;
	margin-top: 6rem;
	padding: 1rem 1.5rem;
	cursor: pointer;
	transition: all 0.1s ease-in;

	&:hover {
		border: 1px solid #fff;
		color: #fff;
	}
	@media (max-width: 1000px) {
		font-size: 0.85rem;
		padding: 0.5rem 1rem;
		margin-top: 3rem;
	}
`;
