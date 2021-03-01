import React from 'react';
import { Footer } from '../components';
import { FOOTER_LINKS } from '../constants/constants';

function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Menu>
				{FOOTER_LINKS.map(({ id, url, text }) => (
					<Footer.MenuItem key={id}>
						<Footer.Link href={url}>{text}</Footer.Link>
					</Footer.MenuItem>
				))}
			</Footer.Menu>
			<Footer.Text>Roseflix Philippines</Footer.Text>
		</Footer>
	);
}

export default FooterContainer;
