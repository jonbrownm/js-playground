

export const setupRig = (elementCanvas, elementRig, elementRigPanel) => {

	var elementRigPanelCount = elementRigPanel.length,
		elementRigPanelWidth = elementCanvas.offsetWidth,
		elementRigWidth = elementRigPanelCount * elementRigPanelWidth;


	elementRig.style.width = elementRigWidth + "px";

}