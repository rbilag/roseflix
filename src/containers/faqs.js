import React from 'react';
import { Accordion } from '../components';
import faqs from '../fixtures/faqs.json';

function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqs.map(({ id, header, body }) => (
				<Accordion.Item key={id} id={id}>
					<Accordion.Header id={id}>{header}</Accordion.Header>
					<Accordion.Body id={id}>{body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

export default FaqsContainer;
