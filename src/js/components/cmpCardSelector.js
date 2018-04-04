import {getUserInput} from './cmpCardSelector/getUserInput';
import {showSelectedCategory} from './cmpCardSelector/showSelectedCategory';

const componentCardSelector = document.querySelector("[data-component-name='cmpCardSelector']");


export const cmpCardSelector = () => {

	
	// only fire for `cmpCardSelector`
	if (componentCardSelector) {

		var elementSelectInput = document.querySelector("[data-component-name='cmpCardSelector'] select");


		elementSelectInput.addEventListener("change", function() {
			getUserInput(elementSelectInput);
			showSelectedCategory();
		});

	}

}