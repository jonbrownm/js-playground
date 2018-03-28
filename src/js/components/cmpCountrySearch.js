import {getUserInput} from './cmpCountrySearch/getUserInput';
import {returnCountryList} from './cmpCountrySearch/returnCountryList';

const componentCountrySearch = document.querySelector("[data-component-name='cmpCountrySearch']");


export const cmpCountrySearch = () => {

	var elementSearchInput = document.querySelector("[data-component-name='cmpCountrySearch'] input[type='text']"),
		elementSearchResultItem = document.querySelectorAll("[data-component-name='cmpCountrySearch'] ul li");


	elementSearchInput.addEventListener("keyup", function() {
		returnCountryList(getUserInput(elementSearchInput));
	});

	[].forEach.call(elementSearchResultItem, function(element){
		element.addEventListener("click", function(element) {
			console.log("hello");
		});
	});
	
	
}