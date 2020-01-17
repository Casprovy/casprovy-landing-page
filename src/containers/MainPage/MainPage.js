import React, { Component } from 'react';

import Page from '../Page/Page';
import Button from '../../components/Button/Button';

import * as Styles from './MainPage.styles';

export default class MainPage extends Component {
	jumpToPage = () => {
		window.location = 'https://www.rtrealm.com';
	};

	render() {
		return (
			<Page>
				<Styles.MainPage>
					<img
						src='https://casprovy-landingpage.s3.eu-central-1.amazonaws.com/QRCode.png'
						alt='QR code'
					/>
					<h1>Welcome to Casprovy!</h1>
					<p>Navigate to my business page.</p>
					<Button text='Jump now!' click={this.jumpToPage} class_name='button__realm' />
					<Styles.SocialH1>Follow my company on:</Styles.SocialH1>
					<Styles.SocialLinks>
						<div className='columns is-mobile'>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink href='https://www.facebook.com/rtrealm' target='_blank'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/facebook-blue.svg'
										alt='Facebook logo'
									/>
								</Styles.ContactSocialLink>
							</div>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink
									href='https://www.linkedin.com/company/rtrealm/'
									target='_blank'
								>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578847544/landingpage/linkedin_logo_blue.svg'
										alt='LinkedIn logo'
									/>
								</Styles.ContactSocialLink>
							</div>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink href='https://www.instagram.com/rt.realm' target='_blank'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1579087764/landingpage/instagram-blue.svg'
										alt='Instagram logo'
									/>
								</Styles.ContactSocialLink>
							</div>
						</div>
					</Styles.SocialLinks>
				</Styles.MainPage>
			</Page>
		);
	}
}
