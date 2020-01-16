export const breakpoint = size => {
	switch (size) {
		case 'phone-only':
			return `max-width: 599px`;
		case 'tablet-portrait-up':
			return `min-width: 600px`;
		case 'tablet-landscape-up':
			return `min-width: 769px`;
		case 'desktop-up':
			return `min-width: 1216px`;
		case 'bid-desktop-up':
			return `min-width: 1800px`;
		default:
			return `min-width: 0px`;
	}
};

export const image2x = (image, width, height) => {
	return `@media (min--moz-device-pixel-ratio: 1.3),
    (-o-min-device-pixel-ratio: 2.6/2),
    (-webkit-min-device-pixel-ratio: 1.3),
    (min-device-pixel-ratio: 1.3),
    (min-resolution: 1.3dppx) {
    /* on retina, use image that's scaled by 2 */
    background-image: url(${image});
    background-size: ${width} ${height};
  }`;
};

export const container = () => {
	return `width: 90%;
  margin: 0 auto;
  max-width: 1195px;`;
};

export const textAnimationFadeIn = () => {
	return `display: none;
  visibility: hidden;
  opacity: 0;`;
};
