// @flow

import React from 'react';
import * as Styles from './Button.styles';

type Props = {
	class_name?: string,
	background?: string,
	click: any,
	text: string
};

const Button = (props: Props) => {
	return (
		<div>
			<Styles.Button
				style={{ backgroundColor: props.background ? props.background : '' }}
				className={props.class_name ? props.class_name : ''}
				onClick={props.click}
				type='button'
			>
				{props.text}
			</Styles.Button>
		</div>
	);
};

export default Button;
