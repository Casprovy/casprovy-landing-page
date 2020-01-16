import React, { Component } from 'react';

import Page from '../Page/Page';

import * as Styles from './MainPage.styles';

export default class MainPage extends Component {
	render() {
		return (
			<Page>
				<Styles.MainPage>
					<img
						src='https://res.cloudinary.com/ohcash/image/upload/v1579186580/landingpage/QRCode.png'
						alt='Robo head'
					/>
					<h1>Navigate to my business page.</h1>
					<p>Hope to start the cooperation!</p>
					<Styles.HomeLink href='https://rtrealm.com' target='blank'>
						Jump now!
					</Styles.HomeLink>
				</Styles.MainPage>
			</Page>
		);
	}
}
