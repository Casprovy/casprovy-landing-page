// @flow

import React, { Component } from 'react';

import MainPage from './containers/MainPage/MainPage';

import * as Styles from './App.styles';

type Props = {
  
}

class App extends Component<Props> {
	render() {
		return (
			<Styles.App className='App'>
				<MainPage />
			</Styles.App>
		);
	}
}

export default App;
