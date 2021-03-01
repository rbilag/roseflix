import styled from 'styled-components/macro';

export const Container = styled.div`
	margin: auto;
	padding: 3rem;
	max-width: 53rem;
	color: #757575;

	@media (max-width: 1000px) {
		padding: 3rem 5rem;
	}
	@media (max-width: 412px) {
		padding: 2rem 2.5rem;
	}
`;
export const Title = styled.p`
	font-weight: 500;
	font-size: 1rem;
	margin-bottom: 1.5rem;
`;
export const Menu = styled.div`
	display: flex;
	flex-flow: row wrap;
	font-size: 0.85rem;
`;
export const MenuItem = styled.div`
	width: 13rem;
	margin: 0.5rem 0;

	@media (max-width: 1000px) {
		width: 12rem;
	}
	@media (max-width: 412px) {
		width: 10rem;
	}
`;
export const Link = styled.a`
	color: #757575;
	text-decoration: none;
`;
export const Text = styled.p`
	margin: 2rem 0 0;
	font-size: 0.85rem;
`;
