

export const moveRigLeft = (elementRig, elementCanvasWidth) => {

    var elementRigPosition = parseInt(elementRig.style.left, 10);

    
    elementRig.style.left = (elementRigPosition + elementCanvasWidth) + "px";  

}