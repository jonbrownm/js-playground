
import {setupRig} from './setupRig';


export const setupRigPanel = (elementCanvas, elementRigPanel) => {

	var elementCanvasHeight = elementCanvas.offsetHeight,
		elementCanvasWidth = elementCanvas.offsetWidth;

	
	elementRigPanel.forEach(function(panel){
		panel.style.height = elementCanvasHeight + "px";
		panel.style.width = elementCanvasWidth + "px";
	})

	setupRig(elementCanvas, elementRigPanel);

}