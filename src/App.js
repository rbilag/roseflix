import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

function App() {
	return (
		<React.Fragment>
			<Router>
				{Object.keys(ROUTES).map((key) => (
					<Route exact path={ROUTES[key].path} key={key}>
						{ROUTES[key].page}
					</Route>
				))}
			</Router>
		</React.Fragment>
	);
}

export default App;
