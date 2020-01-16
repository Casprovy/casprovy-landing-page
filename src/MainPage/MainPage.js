import React, { Component } from 'react';

import * as Styles from './MainPage.styles';

export default class MainPage extends Component {
	render() {
		return (
			<div>
				<Styles.NotFound>
					<img
						src='https://res.cloudinary.com/ohcash/image/upload/v1578844288/landingpage/tesTrobot2.png'
						alt='Robo head'
					/>
					<h1>Navigate to my business page.</h1>
					<p>Hope to start the cooperation!</p>
					<Styles.HomeLink href='https://rtrealm.com'>Jump now!</Styles.HomeLink>
				</Styles.NotFound>
			</div>
		);
	}
}
