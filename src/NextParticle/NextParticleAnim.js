import React, { createRef, useEffect } from 'react';

import { NextParticle as NP } from './NextParticle';

let np;

export const NextParticleAnim = settings => {
	const wrapperRef = createRef();

	const spawnNextParticle = () => {
		np = new NP({ ...settings, wrapperElement: wrapperRef.current });
		if (!np.events.stopped) {
			np.on('stopped', function() {
				this.canvas.remove();
			});
		}
	};

	useEffect(() => {
		if (np) {
			np.events.imageLoaded = [];
			np.stop();
		}
		spawnNextParticle();
	});

	return (
		<div>
			<div ref={wrapperRef} className={settings.className}></div>
		</div>
	);
};

export default NextParticleAnim;
