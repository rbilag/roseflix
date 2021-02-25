import React from 'react';
import { Footer } from '../components';
import footerItems from '../fixtures/footer.json';

function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Menu>
				{footerItems.map(({ id, url, text }) => (
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
