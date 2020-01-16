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
					<h1>Welcome to Casprovy!</h1>
					<p>Navigate to my business page.</p>
					<Styles.HomeLink href='https://rtrealm.com' target='blank'>
						Jump now!
					</Styles.HomeLink>
					{/* <Styles.SocialLinks>
						<h1>Follow me on:</h1>
						<div className="social_list__links">
							<Styles.ContactSocialLink href='https://www.facebook.com/rtrealm' target='_blank'>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/facebook-blue.svg'
									alt='Facebook logo'
								/>
							</Styles.ContactSocialLink>

							<Styles.ContactSocialLink
								href='https://www.linkedin.com/company/rtrealm/'
								target='_blank'
							>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1578847544/landingpage/linkedin_logo_blue.svg'
									alt='LinkedIn logo'
								/>
							</Styles.ContactSocialLink>

							<Styles.ContactSocialLink href='https://www.instagram.com/rt.realm' target='_blank'>
								<img
									src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/instagram-blue.svg'
									alt='Instagram logo'
								/>
							</Styles.ContactSocialLink>
						</div>
					</Styles.SocialLinks> */}
				</Styles.MainPage>
			</Page>
		);
	}
}
