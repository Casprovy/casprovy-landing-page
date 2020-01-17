import styled from 'styled-components';
import * as vars from '../../assets/_variables';
import * as mixins from '../../assets/_mixins';

export const Button = styled.button`
	background-color: ${vars.colorAccent};
	width: 180px;
	/* padding: 14px; */
	/* padding: 11px 12px; */
	border-radius: 20px;
	font-weight: ${vars.poppinsSemibold};
	font-family: ${vars.poppins};
	font-size: 18px;
	color: #fff;
	text-transform: uppercase;
	border-color: transparent;
	line-height: normal;
	text-align: center;
	transition: background-color 0.3s;
	transition: background-color 0.2s, top 0.2s, box-shadow 0.2s;
	border-radius: 100px;
	box-shadow: 0px 24.6488px 65.7301px rgba(0, 0, 0, 0.35);
	cursor: pointer;
	position: relative;
	top: 0px;

	@media (${mixins.breakpoint('desktop-up')}) {
		padding: 18px;
		font-size: 20px;
	}

	&:hover {
		background-color: ${vars.colorHover} !important;
		top: 5px;
		box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.8);
	}

	&:active {
		background-color: ${vars.colorPress};
	}

	&:focus {
		outline: none;
	}
`;
