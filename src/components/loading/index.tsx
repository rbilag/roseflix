import React from 'react';
import { ComponentProp } from '../../constants/types';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

function Loading({ src, ...restProps }: ComponentProp) {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Picture src={`/images/avatars/${src}`} />
		</Spinner>
	);
}
Loading.ReleaseBody = function LoadingReleaseBody() {
	return <ReleaseBody />;
};

export default Loading;
