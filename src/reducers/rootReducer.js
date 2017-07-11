// This is our master reducer... the root reducer.
// The reducers hold pieces of state. the root reducer hod all the reducers.
// i.e. the root reducer holds ALL pieces of state, or application state.

// We need to get the combine reducers method from redux, to make a root reducer that the Provider can use.
import { combineReducers } from 'redux';

import studentReducer from './studentReducer'


// create a rootReducer using the combineReducer method, so we can export it to the Store in index.js
const rootReducer = combineReducers({
	// Inside here, we pass each reducer as a key/value
	// Each key will be available as a piece of state later
	students: studentReducer

})

export default rootReducer;