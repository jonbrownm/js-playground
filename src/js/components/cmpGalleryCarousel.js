import {setupRigPanel} from './cmpGalleryCarousel/setupRigPanel';

const componentGalleryCarousel = document.querySelector("[data-component-name='cmpGalleryCarousel']");


export const cmpGalleryCarousel = () => {

	
	// only fire for `cmpGalleryCarousel`
	if (componentGalleryCarousel) {

		var elementCanvas = document.querySelector("[data-component-name='cmpGalleryCarousel'] .cmp-gallery-carousel_canvas"),
			elementRigPanel = document.querySelectorAll("[data-component-name='cmpGalleryCarousel'] ul li");


		setupRigPanel(elementCanvas, elementRigPanel);

	}

}