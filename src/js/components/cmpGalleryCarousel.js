import {setupRigPanel} from './cmpGalleryCarousel/setupRigPanel';

const componentGalleryCarousel = document.querySelector("[data-component-name='cmpGalleryCarousel']");


export const cmpGalleryCarousel = () => {

	
	// only fire for `cmpGalleryCarousel`
	if (componentGalleryCarousel) {

		var elementCanvas = document.querySelector("[data-component-name='cmpGalleryCarousel'] .cmp-gallery-carousel_canvas"),
			elementRig = document.querySelector("[data-component-name='cmpGalleryCarousel'] ul"),
			elementRigPanel = document.querySelectorAll("[data-component-name='cmpGalleryCarousel'] ul li");


		setupRigPanel(elementCanvas, elementRig, elementRigPanel);

	}

}