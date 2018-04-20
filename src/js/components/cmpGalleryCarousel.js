import {setupRigPanel} from './cmpGalleryCarousel/setupRigPanel';
import {moveRigLeft} from './cmpGalleryCarousel/moveRigLeft';
import {moveRigRight} from './cmpGalleryCarousel/moveRigRight';

const componentGalleryCarousel = document.querySelector("[data-component-name='cmpGalleryCarousel']");


export const cmpGalleryCarousel = () => {

	
	// only fire for `cmpGalleryCarousel`
	if (componentGalleryCarousel) {

		var elementCanvas = document.querySelector("[data-component-name='cmpGalleryCarousel'] .cmp-gallery-carousel_canvas"),
			elementRig = document.querySelector("[data-component-name='cmpGalleryCarousel'] ul"),
			elementRigPanel = document.querySelectorAll("[data-component-name='cmpGalleryCarousel'] ul li"),
			elementButtonLeft = document.querySelector("[data-component-name='cmpGalleryCarousel'] .cmp-gallery-carousel_action-left"),
			elementButtonRight = document.querySelector("[data-component-name='cmpGalleryCarousel'] .cmp-gallery-carousel_action-right"),
			elementCanvasWidth = elementCanvas.offsetWidth;


		setupRigPanel(elementCanvas, elementRig, elementRigPanel, elementCanvasWidth);

		elementButtonLeft.addEventListener("click", function() {
			moveRigLeft(elementRig, elementCanvasWidth);
		});

		elementButtonRight.addEventListener("click", function() {
			moveRigRight(elementRig, elementCanvasWidth);
		});

	}

}