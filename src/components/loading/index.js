import React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

function Loading({ src, ...restProps }) {
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
