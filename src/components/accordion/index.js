import React, { createContext, useState, useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { Container, Inner, Item, Header, Title, Body } from './styles/accordion';

const AccordionContext = createContext(-1);

function Accordion({ children, ...restProps }) {
	const [ selected, setSelected ] = useState(-1);
	return (
		<AccordionContext.Provider value={{ selected, setSelected }}>
			<Container {...restProps}>
				<Inner>{children}</Inner>
			</Container>
		</AccordionContext.Provider>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, id, ...restProps }) {
	const { selected, setSelected } = useContext(AccordionContext);
	return (
		<Item onClick={() => setSelected(() => (selected === id ? -1 : id))} {...restProps}>
			{children}
		</Item>
	);
};

Accordion.Header = function AccordionHeader({ children, id, ...restProps }) {
	const { selected } = useContext(AccordionContext);
	return (
		<Header {...restProps}>
			{children}
			{selected === id ? <CloseIcon /> : <AddIcon />}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, id, ...restProps }) {
	const { selected } = useContext(AccordionContext);
	return (
		<Body isShown={selected === id} className={selected === id ? 'accordion__Body--selected' : ''} {...restProps}>
			{children}
		</Body>
	);
};

export default Accordion;
