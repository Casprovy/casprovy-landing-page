//  @flow

import React, { Component } from 'react';

type Props = {};
type State = {
	joke: string
};

export default class ApiCall extends Component<Props, State> {
	state = {
		joke: ''
	};

	getJoke = () => {
		fetch('https://spwuev78bc.execute-api.eu-central-1.amazonaws.com/final')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ joke: data.value });
			});
	};

	componentDidMount() {
		this.getJoke();
	}
	render() {
		return (
			<div>
				<h1>{this.state.joke}</h1>
			</div>
		);
	}
}
