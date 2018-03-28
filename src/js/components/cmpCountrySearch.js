import {getUserInput} from './cmpCountrySearch/getUserInput';
import {returnCountryList} from './cmpCountrySearch/returnCountryList';

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
		if (element.target && element.target.matches("li.cmp-country-search__results-item")) {
			userSelectedInput = element.target.innerText;
			elementSearchInput.value = userSelectedInput;
			elementSearchList.style.display = "none";
		}
	});

}