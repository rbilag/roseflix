import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 3rem;
	@media (max-width: 600px) {
		padding: 1.5rem;
	}
`;
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
export const List = styled.div`
	p {
		&.no-episodes {
			text-align: center;
			margin: 3rem;
			font-style: italic;
		}
	}
`;
export const Panel = styled.div`
	&.episode-number {
		flex: 1;
		font-size: 1.5rem;
		color: #d2d2d2;
		text-align: center;
	}
	&.episode-image {
		flex: 5;
	}
	&.episode-details {
		flex: 15;
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

	&:last-of-type {
		border-bottom: 3px solid #404040;
	}

	@media (max-width: 600px) {
		padding: 1rem 0;
	}
`;
export const ListItemTitle = styled.p`
	font-weight: 800;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;
	@media (max-width: 600px) {
		font-size: 0.8rem;
		margin-bottom: 0.25rem;
	}
`;
export const Overview = styled.p`
	color: #d2d2d2;
	font-size: 0.9rem;
	line-height: 1.5;
	@media (max-width: 600px) {
		font-size: 0.7rem;
		line-height: 1.25;
	}
`;
export const ShowMore = styled.div`
	border: 2px solid rgba(255, 255, 255, .5);
	background-color: rgba(42, 42, 42, .6);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin: auto;
	margin-top: -1.5rem;
	cursor: pointer;
	transition: all 0.25s ease-out;

	.MuiSvgIcon-root {
		font-size: 2rem;
		width: 2rem;
		height: 2rem;
		padding: 0.48rem;
	}

	&:hover {
		border: 2px solid #fff;
		background-color: #545454;
	}

	@media (max-width: 600px) {
		width: 2rem;
		height: 2rem;
		.MuiSvgIcon-root {
			font-size: 1rem;
			width: 1rem;
			height: 1rem;
		}
	}
`;
