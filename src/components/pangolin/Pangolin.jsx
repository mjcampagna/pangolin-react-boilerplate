import React from 'react';
import debounce from 'lodash.debounce';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Fedora from './Fedora.jsx';
import ToggleColumnButtons from './ToggleColumnButtons.jsx';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.breakpoint = 992;
		this.state = {
			columnL: false,
			columnR: false,
			dataLayoutCol: '3col',
			dataLayoutPos: 'split'
		}

	}

	componentDidMount() {
	
		window.addEventListener('scroll', (e) => {
			if ( window.scrollY > 0 ) {
				document.body.classList.add('is-scrolling');
			} else {
				document.body.classList.remove('is-scrolling');
			}		
		}, false);

		window.addEventListener( 'resize', debounce( () => {
			this.animateColumns();
		}, 250 ));

		this.animateColumns();
	}

	animateColumns() {
		if ( window.innerWidth <= this.breakpoint ) {
			document.body.classList.add('animate-columns');
		} else {
			document.body.classList.remove('animate-columns');
		}
	}

	handleChangeOnToggleColumn(event) {
    document.body.classList.toggle('overflow-hidden');
		this.setState({
			[event.target.id]: event.target.checked
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className="page" data-layout={[this.state.dataLayoutCol, this.state.dataLayoutPos].join(' ')}>
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
