import {functionA} from './genericComponent/functionA';
import {functionB} from './genericComponent/functionB';

const genericComponentElement = document.querySelector("[data-component-name='genericComponent']");

export const genericComponent = () => {

	functionA();
	functionB();
	
}