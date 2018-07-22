import React from 'react';

// import Pangolin from '../../js/pangolin.js';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Fedora from './Fedora.jsx';
import ToggleColumnButtons from './ToggleColumnButtons.jsx';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		// const pangolin = new Pangolin();
	}

	render() {
		return (
			<React.Fragment>
				<div className="page" data-layout="3col split">
					<input type="checkbox" className="toggleColumn" id="columnL" />
					<input type="checkbox" className="toggleColumn" id="columnR" />
		
					<div className="pageBody">
						<Header />
						<Main />
						<Footer />
						<Nav />
						<Fedora />
						<ToggleColumnButtons />
					</div>

				</div>
			</React.Fragment>
		)
	}
}
