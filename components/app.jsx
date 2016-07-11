import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';
import store from '../store.js';
import Container from './Container';

const routes = <Route>
	<Route path="/" component={Container}/>
</Route>;

let reactElement = document.getElementById('react')

render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
    reactElement
)
