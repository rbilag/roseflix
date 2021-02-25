import styled from 'styled-components/macro';

export const Container = styled.div`padding: 2rem 3rem;`;
export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(22rem, auto);
	gap: 1rem;
`;
export const Card = styled.div`
	font-size: 0.9rem;
	line-height: 1.5;
	color: #d2d2d2;
	background-color: #2f2f2f;
	border-radius: 0.35rem;
`;
export const Banner = styled.img`
	max-width: 100%;
	border-radius: 0.35rem 0.35rem 0 0;
`;
export const Details = styled.div`padding: 0 1rem 1rem;`;
export const Header = styled.p`
	font-weight: 800;
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
`;
export const Title = styled.p`
	font-size: 1rem;
	font-weight: 800;
	margin-top: 1rem;
`;
export const Year = styled.p`
	font-size: 1rem;
	margin-bottom: 1rem;
`;
export const ShowMoreWrapper = styled.div`margin-top: 2rem;`;
