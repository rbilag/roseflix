import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { UserContext } from './context/UserContext';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
	const userJSON = localStorage.getItem('roseflix-user');
	const [ userDetails, setUserDetails ] = useState(userJSON !== null ? JSON.parse(userJSON) : null);

	return (
		<UserContext.Provider value={{ userDetails, setUserDetails }}>
			<Router>
				{Object.keys(ROUTES).map((key) => {
					const { path, page, isProtected } = ROUTES[key];
					if (isProtected)
						return (
							<ProtectedRoute exact user={userDetails} path={path} key={key}>
								{page}
							</ProtectedRoute>
						);
					else
						return (
							<IsUserRedirect exact user={userDetails} loggedInPath={ROUTES.BROWSE.path} path={path} key={key}>
								{page}
							</IsUserRedirect>
						);
				})}
			</Router>
		</UserContext.Provider>
	);
}

export default App;
