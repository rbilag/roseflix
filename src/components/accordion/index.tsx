import React, { createContext, useState, useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { Container, Inner, Item, Header, Title, Body } from './styles/accordion';
import { ComponentProp } from '../../constants/types';

type AccordionContextType = {
	selected: number;
	setSelected: (userDetails: number) => void;
};
const AccordionContext = createContext<AccordionContextType>({
	selected: -1,
	setSelected: () => {}
});

type AccordionProp = {
	children: any;
	id: number;
	[x: string]: any;
};
function Accordion({ children, ...restProps }: ComponentProp) {
	const [ selected, setSelected ] = useState(-1);
	return (
		<AccordionContext.Provider value={{ selected, setSelected }}>
			<Container {...restProps}>
				<Inner>{children}</Inner>
			</Container>
		</AccordionContext.Provider>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, id, ...restProps }: AccordionProp) {
	const { selected, setSelected } = useContext(AccordionContext);
	return (
		<Item onClick={() => setSelected(selected === id ? -1 : id)} {...restProps}>
			{children}
		</Item>
	);
};

Accordion.Header = function AccordionHeader({ children, id, ...restProps }: AccordionProp) {
	const { selected } = useContext(AccordionContext);
	return (
		<Header {...restProps}>
			{children}
			{selected === id ? <CloseIcon /> : <AddIcon />}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, id, ...restProps }: AccordionProp) {
	const { selected } = useContext(AccordionContext);
	return (
		<Body className={selected === id ? 'accordion__Body--selected' : ''} {...restProps}>
			{children}
		</Body>
	);
};

export default Accordion;
