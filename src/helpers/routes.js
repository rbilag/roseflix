import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={() => {
				if (user) return <Redirect to={loggedInPath} />;
				else return children;
			}}
		/>
	);
}

export function ProtectedRoute({ user, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				if (user) return children;
				else return <Redirect to={{ pathname: ROUTES.SIGNIN.path, state: { from: location } }} />;
			}}
		/>
	);
}
