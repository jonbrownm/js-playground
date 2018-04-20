
import {setupRig} from './setupRig';


export const setupRigPanel = (elementCanvas, elementRig, elementRigPanel, elementCanvasWidth) => {

	var elementCanvasHeight = elementCanvas.offsetHeight;

	
	elementRigPanel.forEach(function(panel){
		panel.style.height = elementCanvasHeight + "px";
		panel.style.width = elementCanvasWidth + "px";
	})

	setupRig(elementCanvas, elementRig, elementRigPanel);

}