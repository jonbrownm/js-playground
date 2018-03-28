import {getUserInput} from './cmpCountrySearch/getUserInput';
import {returnCountryList} from './cmpCountrySearch/returnCountryList';
import {setUserInput} from './cmpCountrySearch/setUserInput';

const componentCountrySearch = document.querySelector("[data-component-name='cmpCountrySearch']");


export const cmpCountrySearch = () => {

	var elementSearchInput = document.querySelector("[data-component-name='cmpCountrySearch'] input[type='text']"),
		elementSearchList = document.querySelector("[data-component-name='cmpCountrySearch'] ul"),
		elementSearchListItem = document.querySelectorAll("[data-component-name='cmpCountrySearch'] ul li"),
		userSelectedInput;


	elementSearchInput.addEventListener("click", function() {
		elementSearchInput.value = "";
	});

	elementSearchInput.addEventListener("keyup", function() {
		returnCountryList(getUserInput(elementSearchInput));
	});

	elementSearchList.addEventListener("click", function(element) {
		setUserInput(elementSearchInput, elementSearchList, userSelectedInput, element);
	});

}