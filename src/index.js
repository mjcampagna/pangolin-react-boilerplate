import 'normalize.css';
import './css/structure.css';
import './style.css';

import './css/navigation.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Pangolin from './components/Pangolin';

ReactDOM.render(
	<Pangolin />,
	document.getElementById('pangolin')
);
