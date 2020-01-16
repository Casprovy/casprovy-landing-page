import React, { Component } from 'react';

import MainPage from './containers/MainPage/MainPage';

import * as Styles from './App.styles';

class App extends Component {
	render() {
		return (
			<Styles.App className='App'>
				<MainPage />
			</Styles.App>
		);
	}
}

export default App;
