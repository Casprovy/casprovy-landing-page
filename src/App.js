// @flow

import React, { Component } from 'react';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
import MainPage from './containers/MainPage/MainPage';
import * as Styles from './App.styles';

Amplify.configure(awsconfig);

// analytics does not seem to work
Analytics.enable();

type Props = {};

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
