import { combineReducers } from 'redux';

import pangolin from './components/Pangolin/reducer.js';

const rootReducer = combineReducers({
	pangolin,
});

export default rootReducer;
