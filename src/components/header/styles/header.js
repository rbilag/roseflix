import styled from 'styled-components/macro';

export const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	place-items: center;
	z-index: 2;
	background: linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0));
	transition-timing-function: ease-in;
	transition: all 0.5s;

	&.opaque {
		background: #141414;
	}
`;

export const Panel = styled.div`display: flex;`;
export const Nav = styled.div`
	display: inline-block;
	font-size: 0.85rem;
	align-self: center;

	@media (max-width: 700px) {
		font-size: 0.65rem;
	}
`;

export const NavLink = styled.a`
	color: #fff;
	text-decoration: none;
	margin: 0 0.75rem;
	transition: color .4s;

	&:hover {
		color: #b3b3b3;
	}

	@media (max-width: 700px) {
		margin: 0 0.5rem;
	}
`;

export const Logo = styled.img`
	width: 8rem;
	margin: 0.5rem 2rem 0.5rem 3rem;
	object-fit: contain;

	&.large {
		width: 13rem;
		@media (max-width: 1000px) {
			width: 10rem;
		}
		@media (max-width: 600px) {
			width: 8rem;
		}
	}

	@media (max-width: 700px) {
		width: 7rem;
		margin: 0.5rem;
	}
`;

export const Avatar = styled.img`
	width: 2.25rem;
	border-radius: 0.25rem;
	margin: 1rem 3.5rem;
	object-fit: contain;

	@media (max-width: 700px) {
		margin: 0.5rem 1rem;
	}
`;

export const Button = styled.button`
	background-color: #e50914;
	color: #fff;
	height: 2.25rem;
	padding: 0 1rem;
	margin: 0.5rem 3rem;
	line-height: 1;
	border: none;
	cursor: pointer;
	border-radius: 0.25rem;
`;
