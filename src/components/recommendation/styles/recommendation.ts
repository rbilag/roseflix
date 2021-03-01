import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 2rem 3rem;

	@media (max-width: 600px) {
		padding: 1.5rem;
	}
`;
export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(auto, auto);
	gap: 1rem;

	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const Card = styled.div`
	font-size: 0.9rem;
	line-height: 1.5;
	color: #d2d2d2;
	background-color: #2f2f2f;
	border-radius: 0.35rem;
	@media (max-width: 600px) {
		font-size: 0.8rem;
		line-height: 1.25;
	}
`;
export const Banner = styled.img`
	max-width: 100%;
	border-radius: 0.35rem 0.35rem 0 0;
`;
export const Details = styled.div`
	padding: 0 1rem 1rem;
	@media (max-width: 600px) {
		padding: 0 0.5rem 0.5rem;
	}
`;
export const Header = styled.p`
	font-weight: 800;
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
`;
export const Title = styled.p`
	font-size: 1rem;
	font-weight: 800;
	margin-top: 1rem;
	@media (max-width: 600px) {
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}
`;
export const Year = styled.p`
	font-size: 1rem;
	margin-bottom: 1rem;
	@media (max-width: 600px) {
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}
`;
export const ShowMoreWrapper = styled.div`margin-top: 2rem;`;
