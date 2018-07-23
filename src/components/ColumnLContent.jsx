import React from 'react';

import Menu from './Menu.jsx';

export default function ColumnLContent(props) {
	return (
		<React.Fragment>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nisl, tempus vel justo quis, bibendum pharetra tellus. Morbi laoreet sapien at mauris mollis sagittis. Sed finibus tempus dui, nec malesuada nisi.</p>

			<Menu classes="menu menu--vertical" />

		</React.Fragment>
	);
}
