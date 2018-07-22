import React from 'react';

// import Pangolin from '../../js/pangolin.js';

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Fedora from './Fedora.jsx';
import ToggleColumnButtons from './ToggleColumnButtons.jsx';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			columnL: false,
			columnR: false
		}

	}

	componentDidMount() {

		window.addEventListener( 'resize', debounce( function() {
			console.log('Resize!')
		}, 250 ));

		window.addEventListener('scroll', function(e) {
			if ( window.scrollY > 0 ) {
				document.body.classList.add('is-scrolling');
			} else {
				document.body.classList.remove('is-scrolling');
			}		
		}, false);

	}

	handleChangeOnToggleColumn(event) {
		this.setState({
			[event.target.id]: event.target.checked
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="page" data-layout="3col split">
					<input type="checkbox" className="toggleColumn" id="columnL" 
						checked={this.state.columnL} 
						onChange={(e) => this.handleChangeOnToggleColumn(e)} 
					/>
					<input type="checkbox" className="toggleColumn" id="columnR" 
						checked={this.state.columnR} 
						onChange={(e) => this.handleChangeOnToggleColumn(e)} 
					/>
		
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
