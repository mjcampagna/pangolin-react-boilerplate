import React from 'react';

import ColumnRContent from '../ColumnRContent.jsx';

export default function ColumnR(props) {
	return (
		<React.Fragment>
			<div className="column column--side columnR" id="column--side_columnR">
				<ColumnRContent />
			</div>
			<label className="pageOverlay spine" htmlFor="columnR"></label>
		</React.Fragment>
	);
}
