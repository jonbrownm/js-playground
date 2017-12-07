import {functionA} from './genericComponent/functionA';
import {functionB} from './genericComponent/functionB';

const genericComponentElement = document.querySelector("div#genericComponent");

export const genericComponent = () => {

	functionA();
	functionB();
	
}