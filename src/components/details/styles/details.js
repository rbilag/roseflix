import styled from 'styled-components/macro';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`;
export const Inner = styled.div`
	width: 58rem;
	background: #181818;
	margin-top: 2rem;
	border-radius: 0.5rem;
	overflow: auto;
`;
