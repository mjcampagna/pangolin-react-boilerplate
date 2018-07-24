import 'normalize.css';
import './css/structure.css';
import './style.css';

import './css/navigation.css';
import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Pangolin from './components/Pangolin';

ReactDOM.render(
	<BrowserRouter>
		<Pangolin />
	</BrowserRouter>,
document.getElementById('pangolin'));
