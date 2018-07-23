import 'normalize.css';
import './css/structure.css';

import './css/navigation.css';
import './css/style.css';

import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/pangolin/Pangolin.jsx';

ReactDOM.render(
	<Layout />,
	document.getElementById('pangolin')
);
