import styled from 'styled-components';
import * as vars from '../../assets/_variables';
import * as mixins from '../../assets/_mixins';

export const MainPage = styled.section`
	${mixins.container()};
	max-width: 940px;
	margin: 60px auto;
	text-align: center;

	@media (${mixins.breakpoint('desktop-up')}) {
		margin: 150px auto;
	}

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

	.button__realm {
		margin-top: 50px;
	}
`;

export const SocialH1 = styled.h1`
	font-size: 24px !important;
	@media (${mixins.breakpoint('tablet-portrait-up')}) {
		font-size: 28px !important;
	}
`;

export const SocialLinks = styled.div`
	opacity: 1;
	margin: 30px auto 0 auto;
	width: 90%;
	height: 10%;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}

	img,
	svg {
		max-height: 32px;
		height: 100%;
		width: 32px;
		&:hover {
			transition: transform 0.3s;
			transform: scale(1.2);
		}

		@media (${mixins.breakpoint('tablet-landscape-up')}) {
			max-height: 25px;
			width: 25px;
		}
	}
`;

export const ContactSocialLink = styled.a`
	color: ${vars.colorAccent};
	transition: color 0.3s;
	text-align: center;
	display: block;
	align-items: center;
	padding: 0;

	@media (${mixins.breakpoint('tablet-landscape-up')}) {
		width: 100px;
	}

	&:hover {
		color: ${vars.colorHover};
	}
`;
