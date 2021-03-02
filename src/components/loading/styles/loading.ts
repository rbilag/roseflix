import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
export const ReleaseBody = createGlobalStyle`
	html {
		background-color: #141414;
	}
  body {
    overflow: visible;
		color: #fff;
		background-color: #141414;
  }
	* {
    margin: 0;
	}
`;
export const Spinner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 99;
	:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		background-image: url(/images/misc/Spinner.png);
		background-size: contain;
		background-repeat: no-repeat;
		margin-top: -9.5rem;
		margin-left: -4.8rem;
		width: 9.5rem;
		height: 9.5rem;
		animation-name: spin;
		animation-duration: 1000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@-ms-keyframes spin {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}
	@-moz-keyframes spin {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const Picture = styled.img`
	position: absolute;
	top: calc(50% - 7rem);
	left: calc(50% - 2.25rem);
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 0.5rem;
`;
