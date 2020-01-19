// @flow

import React, { Component } from 'react';

import Page from '../Page/Page';
import Button from '../../components/Button/Button';

import * as Styles from './MainPage.styles';

type Props = {};

export default class MainPage extends Component<Props, {}> {
	jumpToPage = () => {
		window.location = 'https://www.rtrealm.com';
	};

	render() {
		return (
			<Page>
				<Styles.MainPage>
					<img
						src='https://casprovylandingpg132518-local.s3.eu-central-1.amazonaws.com/QRCode.png'
						alt='QR code'
					/>
					<h1>Welcome to Casprovy!</h1>
					<p>Navigate to my business page.</p>
					<Button
						text='Jump now!'
						click={this.jumpToPage}
						class_name='button__realm'
						background=''
					/>
					<Styles.SocialH1>Follow me on:</Styles.SocialH1>
					<Styles.SocialLinks>
						<div className='columns is-mobile'>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink href='https://twitter.com/casprovy' target='_blank'>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1579432510/landingpage/twitter-blue.svg'
										alt='Facebook logo'
									/>
								</Styles.ContactSocialLink>
							</div>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink
									href='https://www.linkedin.com/in/tomasz-gasienica-szostak-279b175/'
									target='_blank'
								>
									<img
										src='https://res.cloudinary.com/ohcash/image/upload/v1578847544/landingpage/linkedin_logo_blue.svg'
										alt='LinkedIn logo'
									/>
								</Styles.ContactSocialLink>
							</div>
							<div className='column is-narrow-tablet'>
								<Styles.ContactSocialLink href='https://github.com/Casprovy' target='_blank'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										height='32'
										fill='#4ecfff'
										viewBox='0 0 16 16'
										version='1.1'
										width='32'
										aria-hidden='true'
									>
										<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
									</svg>
								</Styles.ContactSocialLink>
							</div>
						</div>
					</Styles.SocialLinks>
				</Styles.MainPage>
			</Page>
		);
	}
}
