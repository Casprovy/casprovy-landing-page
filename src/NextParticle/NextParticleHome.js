import { NextParticleAnim } from './NextParticleAnim';
import React, { useEffect, useState } from 'react';

import './NextParticle.css';

const isMobile = window.innerWidth < 768;
const isSmall = window.innerWidth >= 768 && window.innerWidth < 1000;

export const NextParticleHome = () => {
	const [settings, setSettings] = useState({
		colorArr: undefined,
		renderer: 'default',
		imageUrl: 'https://res.cloudinary.com/ohcash/image/upload/v1579463489/casprovy/tesTrobot2.png',
		particleGap: 1,
		gravity: 0.3,
		noise: 7,
		// width: Math.min(window.innerWidth - 30, 1140),
		width: isMobile ? 300 : Math.min(window.innerHeight - 120 - 30, 520),
		height: isMobile ? 300 : Math.min(window.innerHeight - 120 - 30, 520),
		maxWidth: isMobile || isSmall ? 200 : 320,
		maxHeight: isMobile || isSmall ? 200 : 320,
		mouseForce: 50,
		clickStrength: 100
		// particleSize: 1,
		// layerCount: 2,
		// layerDistance: 5,
		// depth: 1,
		// lifeCycle: false,
		// growDuration: 200,
		// waitDuration: 200,
		// shrinkDuration: 200,
		// shrinkDistance: 50
	});

	const mergeSettings = partialSettings => setSettings({ ...settings, ...partialSettings });

	const resizeWindow = () => {
		const isMobile = window.innerWidth < 768;
		mergeSettings({
			// width: Math.min(window.innerWidth - 30, 1140),
			width: isMobile ? 300 : Math.min(window.innerHeight - 120 - 30, 520),
			height: isMobile ? 300 : Math.min(window.innerHeight - 120 - 30, 520)
		});
	};

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	return (
		<div className='home-np'>
			<NextParticleAnim {...settings} className='next-particle' />
		</div>
	);
};

export default NextParticleHome;
