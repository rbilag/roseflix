import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: #000;
	width: 100vw;
	height: 100vh;
	display: flex;
	.paused-text {
		position: absolute;
		bottom: 8rem;
		right: 8rem;
		@media (max-width: 600px) {
			bottom: 8rem;
			right: 3rem;
		}
	}
`;
export const Overlay = styled.div`
	background: linear-gradient(0.25turn, rgba(20, 20, 20, 0.75), rgba(20, 20, 20, 0));
	width: 100vw;
	height: 100vh;
	position: absolute;
`;
export const Details = styled.div`
	position: absolute;
	top: 0;
	color: #b3b3b3;
	font-size: 1.35rem;
	max-width: 50rem;
	margin: 18rem 8rem;

	@media (max-width: 600px) {
		font-size: 1rem;
		margin: 8rem 2rem;
	}
`;
export const Title = styled.div`
	font-weight: 800;
	font-size: 3rem;
	margin: 1rem 0 2rem;
	color: #fff;
	@media (max-width: 600px) {
		font-size: 2rem;
		margin: 0.5rem 0 1rem;
	}
`;
export const Video = styled.div`width: 100vw;`;
export const Back = styled.div`
	position: absolute;
	top: 0;
	.MuiSvgIcon-root {
		font-size: 3rem;
		width: 3rem;
		height: 3rem;
		margin: 2rem;
		cursor: pointer;
	}
`;
