import React from 'react';
import debounce from 'lodash.debounce';

import Header from '../Header.jsx';
import Main from '../Main.jsx';
import ColumnL from '../ColumnL.jsx';
import ColumnR from '../ColumnR.jsx';
import Footer from '../Footer.jsx';
import Menu from '../Menu.jsx';
import Fedora from '../Fedora.jsx';
import ToggleColumnButtons from './ToggleColumnButtons.jsx';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.breakpoint = 992;
		this.state = {
			columnL: false,
			columnR: false,
			dataLayoutCol: '2col',
			dataLayoutPos: 'split'
		}

	}

	componentDidMount() {
		window.addEventListener( 'resize', debounce( () => {
			this.animateColumns();
		}, 250 ));
		this.animateColumns();

		window.addEventListener('scroll', (e) => {
			if ( window.scrollY > 0 ) {
				document.body.classList.add('is-scrolling');
			} else {
				document.body.classList.remove('is-scrolling');
			}		
		}, false);
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

						<header className="header spine">
							<Header />
						</header>

						<main className="main">
							<div className="main__body">

								<div className="column column--main spine" id="column--main">
									<Main />
								</div>

								{(this.state.dataLayoutCol === '2col' || this.state.dataLayoutCol === '3col') && 
									<React.Fragment>
										<div className="column column--side columnL" id="column--side_columnL">
											<ColumnL />
										</div>
										<label className="pageOverlay spine" htmlFor="columnL"></label>
									</React.Fragment>
								}

								{ this.state.dataLayoutCol === '3col' && 
									<React.Fragment>
										<div className="column column--side columnR" id="column--side_columnR">
											<ColumnR />
										</div>
										<label className="pageOverlay spine" htmlFor="columnR"></label>
									</React.Fragment>
								}

							</div>
						</main>

						<footer className="footer spine">
							<Footer />
						</footer>

						<nav className="nav spine">
							<Menu classes="menu" />
						</nav>

						<div className="fedora spine">
							<div className="inner">
								<Fedora />
							</div>
						</div>

						<ToggleColumnButtons />

					</div>{/* .pageBody */}
				</div>{/* .page */}
			</React.Fragment>
		)
	}
}
