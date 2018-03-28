import {getUserInput} from './cmpCountrySearch/getUserInput';
import {returnCountryList} from './cmpCountrySearch/returnCountryList';

const componentCountrySearch = document.querySelector("[data-component-name='cmpCountrySearch']");


export const cmpCountrySearch = () => {

	var elementSearchInput = document.querySelector("[data-component-name='cmpCountrySearch'] input[type='text']");


	elementSearchInput.addEventListener('keyup', function() {
		
		console.log(getUserInput(elementSearchInput));


		returnCountryList();


	});
	
	
}