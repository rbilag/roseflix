import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	height: 83vh;
	background: linear-gradient(to top, rgb(0 0 0 / 90%) 0, rgb(0 0 0 / 20%) 60%, rgb(0 0 0 / 90%) 100%),
		url('/images/misc/Home_Banner.jpg');
	background-size: cover;
	background-position: 50% 50%;
	border-bottom: 0.5rem solid #222;

	@media (max-width: 1000px) {
		height: 75vh;
	}
	@media (max-width: 600px) {
		height: 55vh;
	}
`;

export const Inner = styled.div`
	max-width: 50rem;
	margin: auto;
	text-align: center;
	color: #fff;

	@media (max-width: 1000px) {
		max-width: 40rem;
	}
`;

export const Title = styled.h1`
	margin-bottom: 0;
	font-size: 4rem;

	@media (max-width: 1000px) {
		font-size: 3rem;
	}
	@media (max-width: 600px) {
		font-size: 1.75rem;
		margin-top: 8rem;
	}
`;

export const SubTitle = styled.h2`
	font-weight: 500;
	margin-bottom: 0;
	font-size: 1.75rem;

	@media (max-width: 1000px) {
		font-size: 1.5rem;
	}
	@media (max-width: 600px) {
		font-size: 1.15rem;
	}
`;
