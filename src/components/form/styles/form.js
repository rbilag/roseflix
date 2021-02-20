import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	height: 83vh;
	background: linear-gradient(to top, rgb(0 0 0 / 90%) 0, rgb(0 0 0 / 20%) 60%, rgb(0 0 0 / 90%) 100%),
		url('/images/misc/Home_Banner.jpg');
	background-size: cover;
	background-position: 50% 50%;
`;
export const Inner = styled.div`
	background: rgba(0, 0, 0, .75);
	max-width: 20rem;
	margin: auto;
	padding: 3.5rem 4.5rem 5.5rem;
	color: #fff;
	border-radius: 0.25rem;
`;
export const Title = styled.h1`
	font-size: 2rem;
	margin: 0 0 1.5rem;
`;
export const FormGroup = styled.form`
	display: flex;
	flex-flow: row wrap;
`;
export const Input = styled.input`
	width: 100%;
	background: #333;
	color: #fff;
	padding: 1rem;
	margin: 0.5rem 0;
	border-radius: 0.25rem;
	outline: none;
	border: none;
	border-bottom: 2px solid #333;
	transition: border-bottom 0.25s ease-out;

	&.has-error {
		border-bottom: 2px solid #e87c03;
	}
`;
export const Button = styled.button`
	width: 100%;
	background-color: #e50914;
	color: #fff;
	font-weight: 800;
	font-size: 1rem;
	margin-top: 1.5rem;
	padding: 1rem 0.25rem;
	border: none;
	cursor: pointer;
	border-radius: 0.25rem;
	transition: all 0.1s ease-in;

	&:hover {
		background-color: #9c151c;
	}

	&:disabled {
		background-color: #4e2022;
		color: #969696;
		cursor: default;
	}
`;
export const Text = styled.p`
	color: #737373;
	font-size: 1.1rem;
`;
export const TextSmall = styled.p`
	font-size: 0.8rem;
	color: #8c8c8c;
`;
export const Link = styled.a`
	color: #fff;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
export const Error = styled.p`
	margin: 0 0.25rem 0.5rem;
	font-size: 0.85rem;
	color: #e87c03;

	&.boxed {
		background-color: #e87c03;
		color: #fff;
		border-radius: 0.25rem;
		padding: 0.5rem;
	}
`;
