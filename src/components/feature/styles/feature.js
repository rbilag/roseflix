import styled from 'styled-components/macro';

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${({ direction }) => direction};
	max-width: 68rem;
	margin: auto;
	padding: 5rem 2rem;
	text-align: center;

	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 2rem;
	}
`;

export const Container = styled.div``;

export const Item = styled.div`
	display: flex;
	border-bottom: 0.5rem solid #222;
	color: #fff;
`;

export const Panel = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const Title = styled.h1``;

export const Description = styled.h2`
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 1.3rem;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;
