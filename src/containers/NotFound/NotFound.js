import React, { Component } from 'react'

import Page from '../Page/Page';

import * as Styles from './NotFound.styles';

export default class NotFound extends Component {
  render() {
    return (
			<Page>
				<Styles.NotFound>
					<h1>Oops...! The page you are looking for has never been created...</h1>
					<p>or has been lost like tears in the rain...</p>
          <Styles.HomeLink href='/'>Go back</Styles.HomeLink>
				</Styles.NotFound>
			</Page>
		);
  }
}
