import styled from 'styled-components/macro';

export const Container = styled.div`padding: 3rem;`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const Title = styled.p`
	font-weight: 800;
	font-size: 1.5rem;
`;
export const Dropdown = styled.select`
	min-width: 4rem;
	padding: 0.35rem;
	background-color: rgb(36, 36, 36);
	color: #fff;
	border: 1px solid rgb(77, 77, 77);
	border-radius: 0.2rem;
	font-size: 1.1rem;
	font-weight: 800;
	outline: none;
`;
export const List = styled.div``;
export const Panel = styled.div`
	&.episode-number {
		font-size: 1.5rem;
		color: #d2d2d2;
	}
	img {
		max-width: 9rem;
		border-radius: 0.35rem;
		margin: 1.25rem 1rem;
	}
`;
export const ListItem = styled.div`
	display: flex;
	justify-content: space-between;
	place-items: center;
	border-bottom: 1px solid #404040;
	padding: 0 4rem 0 1.5rem;
`;
export const ListItemTitle = styled.p`
	font-weight: 800;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;
`;
export const Overview = styled.p`
	color: #d2d2d2;
	font-size: 0.9rem;
	line-height: 1.5;
`;
export const ShowMore = styled.div``;
