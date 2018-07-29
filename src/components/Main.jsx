import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Routes/Home.jsx';
import About from './Routes/About.jsx';

export default function Main(props) {
	return (
		<React.Fragment>
			<Switch>

				<Route 
					exact path='/' 
					render={(routeProps) => (
						<Home />
					)}
				/>

				<Route 
					exact path='/about' 
					render={(routeProps) => (
						<About />
					)}
				/>

			</Switch>
		</React.Fragment>
	);
}