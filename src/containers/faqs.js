import React from 'react';
import { Accordion } from '../components';
import faqs from '../fixtures/faqs.json';
import SubscribeContainer from './subscribe';

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
			<SubscribeContainer />
		</Accordion>
	);
}

export default FaqsContainer;
