import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReduxStudents from './containers/ReduxStudents'

import { createStore } from 'redux';

import { Provider } from 'react-redux'


import rootReducer from './reducers/rootReducer';

const theStore = createStore(rootReducer);

ReactDOM.render(
	<Provider store={theStore}>
		<ReduxStudents/>
	</Provider>,	
	document.getElementById('root')
);
