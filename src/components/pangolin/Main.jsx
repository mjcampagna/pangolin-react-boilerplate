import React from 'react';

import ColumnL from './ColumnL.jsx';
import ColumnR from './ColumnR.jsx';
import MainContent from '../MainContent.jsx';

export default function Main(props) {
	return (
		<main className="main">
			<div className="main__body">
				<div className="column column--main spine" id="column--main">
					<MainContent />
				</div>
				<ColumnL />
				<ColumnR />				
			</div>
		</main>
	);
}