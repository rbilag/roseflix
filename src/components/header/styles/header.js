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

export const Panel = styled.div`
	display: flex;
	align-items: center;

	.MuiSvgIcon-root {
		font-size: 1.75rem;
		color: #fff;
		cursor: pointer;
	}
`;
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
	cursor: pointer;

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
	transition: all 0.1s ease-in;

	&:hover {
		background-color: #9c151c;
	}
`;

export const Menu = styled.div`
	opacity: 0;
	pointer-events: none;
	z-index: -1;
	position: absolute;
	top: 3.1rem;
	right: 3.5rem;
	background: rgba(0, 0, 0, 0.75);
	color: #fff;
	font-size: 0.8rem;
	border: 1px solid #69696979;
	min-width: 10rem;
	padding: 0.75rem 0;
	transition: all 0.1s ease-in;

	&:hover {
		opacity: 1;
		pointer-events: auto;
	}
`;

export const MenuOption = styled.div`
	display: flex;
	place-items: center;
	padding: 0.1rem 0.25rem;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;
export const Avatar = styled.img`
	width: 2.25rem;
	border-radius: 0.25rem;
	margin: ${({ isOption }) => (isOption ? '0.25rem 0.5rem' : '0')};
	object-fit: contain;

	@media (max-width: 700px) {
		margin: 0 1rem 0 0.5rem;
	}
`;
export const Dropdown = styled.div`
	margin: 0 3.5rem 0 1.5rem;
	cursor: pointer;
	&:hover {
		${Menu} {
			${({ isOption }) => !isOption && `opacity: 1; pointer-events: auto;`};
		}
	}
`;
