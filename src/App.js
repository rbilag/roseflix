import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { UserContext } from './context/UserContext';

function App() {
	const userJSON = localStorage.getItem('roseflix-user');
	const [ userDetails, setUserDetails ] = useState(userJSON !== null ? JSON.parse(userJSON) : null);

	return (
		<UserContext.Provider value={{ userDetails, setUserDetails }}>
			<Router>
				{Object.keys(ROUTES).map((key) => {
					const { path, page, isProtected } = ROUTES[key];
					return (
						<Route
							exact
							path={path}
							key={key}
							render={() => {
								if (isProtected && !userDetails) return <Redirect to={ROUTES.SIGNIN.path} />;
								else if (!isProtected && userDetails) return <Redirect to={ROUTES.BROWSE.path} />;
								else return page;
							}}
						/>
					);
				})}
			</Router>
		</UserContext.Provider>
	);
}

export default App;
