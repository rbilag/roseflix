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
export const AvatarEditOverlay = styled.div`
	position: absolute;
	top: 3px;
	left: 3px;
	width: 100%;
	height: calc(100% - 2.15rem - 12px);
	border-radius: 0.25rem;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;

	.MuiSvgIcon-root {
		color: #fff;
		border: 2px solid #fff;
		border-radius: 50%;
		width: 1.75rem;
		height: 1.75rem;
		padding: 0.5rem;
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
	position: relative;

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
	outline: none;
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
	&.white-btn {
		background-color: #fff;
		border: 1px solid #fff;
		color: #141414;
		&:hover {
			background-color: #c00;
			border: 1px solid #c00;
			color: #fff;
		}
	}
	@media (max-width: 1000px) {
		font-size: 0.85rem;
		padding: 0.5rem 1rem;
		margin-top: 3rem;
	}
`;
export const Panel = styled.div`
	max-width: 20rem;
	margin: auto;
	&.button-area {
		max-width: 35rem;
		${Button} {
			margin: 6rem 0.25rem 0;
		}
	}
	img {
		max-width: 15rem;
	}
	input {
		margin-top: 2rem;
	}
`;
export const IconButton = styled.div`
	margin-top: -4rem;
	text-align: left;
	padding-left: 3rem;
	.MuiSvgIcon-root {
		color: #fff;
		border: 2px solid #fff;
		border-radius: 50%;
		width: 1.75rem;
		height: 1.75rem;
		padding: 0.5rem;
		background: #000;
		cursor: pointer;
	}
`;
export const AvatarGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-auto-rows: minmax(auto, auto);
	grid-gap: 1rem;
	place-content: center;
	margin: 5rem 8rem;
	${Avatar} {
		cursor: pointer;
		&:hover {
			border: 3px solid #fff;
		}
		&.avatar-used {
			pointer-events: none;
			filter: grayscale(1);
			opacity: 0.5;
		}
	}
`;
export const AvatarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 3rem 8rem;
`;
export const AvatarHeaderPanel = styled.div`
	p {
		font-size: 1.8rem;
		color: #fff;
		margin: 0;
	}
	&.profile-title {
		display: flex;
		align-items: center;
		font-weight: 800;
		${Title} {
			font-size: 2.5rem;
			font-weight: 800;
			margin-bottom: 0.5rem;
			text-align: left;
		}
		.MuiSvgIcon-root {
			width: 4rem;
			height: 4rem;
			margin-right: 1rem;
			color: #fff;
			cursor: pointer;
		}
	}

	&.profile-previous {
		display: flex;
		align-items: center;
		${Avatar} {
			max-width: 6rem;
		}
		p {
			margin-right: 1rem;
		}
	}
`;
