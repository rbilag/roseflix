import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
	font-family: 'Arimo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
		'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  background-color: black;
  color: #333;
}
h1 {
	font-size: 3rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
}
.main-scrollbar {
	width: 100vw!important;
	height: 100vh!important;
		& > .ScrollbarsCustom-Wrapper {
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			& > .ScrollbarsCustom-Scroller {
				& > .ScrollbarsCustom-Content {
				}
			}
		}

		.ScrollbarsCustom-Track {
			position: absolute;
			border-radius: 0.25rem;
		}

		.ScrollbarsCustom-Thumb {
			background: rgba(255, 255, 255, 0.12);
			cursor: pointer;
			border-radius: 0.25rem;

			&:hover,
			&.dragging {
				background: #cccccc8f;
			}
		}

		.ScrollbarsCustom-ThumbY {
			width: 100%;
		}

		.ScrollbarsCustom-ThumbX {
			height: 100%;
		}

		.ScrollbarsCustom-TrackY {
			width: 0.85rem;
			height: calc(100% - 0.5rem);
			top: 0.25rem;
			right: 0;
			background: rgba(255,255,255,0.04);
			z-index: 3;
			@media (max-width: 600px) {		
				width: 0.5rem;
			}
		}

		.ScrollbarsCustom-TrackX {
			height: 0.85rem;
			width: calc(100% - 0.5rem);
			bottom: 0;
			left: 0.25rem;
			background: rgba(255,255,255,0.04);
			z-index: 3;
			@media (max-width: 600px) {		
				height: 0.5rem;
			}
		}

		&.trackYVisible {
			& > .ScrollbarsCustom-Wrapper {
    		right: 0.85rem;
				@media (max-width: 600px) {		
					right: 0.5rem;
				}
			}

			& > .ScrollbarsCustom-TrackX {
				width: calc(100% - 0.5rem);
				left: 0.25rem;
			}
		}

		&.trackXVisible {
			&:hover {
				.ScrollbarsCustom-TrackX {
					background: #373737;
				}

				.ScrollbarsCustom-ThumbX {
					background: #4f4f4f;

					&:hover,
					&.dragging {
						background: #cccccc8f;
					}
				}
			}
		}
}
.browse {
	position: relative;
}
.modal-scrollbar {
	width: 58rem!important;
	height: 100%!important;
	@media (max-width: 1000px) {
		width: 95vw!important;
	}
	@media (max-width: 600px) {		
    width: 100vw!important;
	}
}
`;
