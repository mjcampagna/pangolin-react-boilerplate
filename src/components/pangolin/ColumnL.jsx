import React from 'react';

import ColumnLContent from '../ColumnLContent.jsx';

export default function ColumnL(props) {
	return (
		<React.Fragment>
			<div className="column column--side columnL" id="column--side_columnL">
				<ColumnLContent />
			</div>
			<label className="pageOverlay spine" htmlFor="columnL"></label>
		</React.Fragment>
	);
}
