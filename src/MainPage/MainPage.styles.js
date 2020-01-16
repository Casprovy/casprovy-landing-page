import styled from 'styled-components';
import * as vars from '../assets/_variables';
import * as mixins from '../assets/_mixins';

export const NotFound = styled.section`
	${mixins.container()};
	max-width: 940px;
	margin: 200px auto;
	text-align: center;

	h1 {
		line-height: 40px;
		font-size: 28px;
		font-weight: ${vars.poppinsSemibold};
		margin-top: 50px;
	}

	p {
		line-height: normal;
		font-size: 24px;
		color: #959595;
		margin-top: 20px;
	}

	/* button {
		margin-top: 35px;
		font-size: 17px;
		padding: 15px;
		border-radius: 50px;
	} */
`;

export const HomeLink = styled.a`
	background: ${vars.colorAccent};
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
	border-radius: 29.8126px;
	line-height: normal;
	font-size: 18px;
	text-align: center;
	padding: 15px 20px;
	color: #ffffff;
	position: relative;
	top: 0px;
	text-transform: uppercase;
	font-weight: ${vars.poppinsSemibold};
	transition: box-shadow 0.3s, top 0.3s;
	margin-top: 30px;
	display: inline-block;
	text-decoration: none;

	&:hover {
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
		background: ${vars.colorHover};
		top: 5px;
		color: #ffffff;
	}
`;
