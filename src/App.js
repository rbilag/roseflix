import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';

function App() {
	return (
		<div className="app">
			<Router>
				{ROUTES.map(({ path, page }) => (
					<Route exact path={path} key={path}>
						{page}
					</Route>
				))}
			</Router>
		</div>
	);
}

export default App;
