import React from 'react';
import { ComponentProp } from '../../constants/types';
import {
	Container,
	Inner,
	Title,
	FormGroup,
	Input,
	Button,
	Text,
	TextSmall,
	Link,
	Error,
	Spinner
} from './styles/form';

function Form({ children, ...restProps }: ComponentProp) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Form.Title = function FormTitle({ children, ...restProps }: ComponentProp) {
	return <Title {...restProps}>{children}</Title>;
};

Form.FormGroup = function FormFormGroup({ children, ...restProps }: ComponentProp) {
	return <FormGroup {...restProps}>{children}</FormGroup>;
};

Form.Input = function FormInput({ ...restProps }) {
	return <Input {...restProps} />;
};
Form.Button = function FormButton({ children, ...restProps }: ComponentProp) {
	return <Button {...restProps}>{children}</Button>;
};

Form.Text = function FormText({ children, ...restProps }: ComponentProp) {
	return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }: ComponentProp) {
	return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, to, ...restProps }: ComponentProp) {
	return (
		<Link to={to} {...restProps}>
			{children}
		</Link>
	);
};

Form.Error = function FormError({ children, ...restProps }: ComponentProp) {
	return <Error {...restProps}>{children}</Error>;
};

Form.Spinner = function FormSpinner({ ...restProps }: ComponentProp) {
	return <Spinner {...restProps} />;
};

export default Form;
