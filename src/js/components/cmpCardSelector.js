// import {getUserInput} from './cmpCountrySearch/getUserInput';
// import {returnCountryList} from './cmpCountrySearch/returnCountryList';
// import {setUserInput} from './cmpCountrySearch/setUserInput';

const componentCardSelector = document.querySelector("[data-component-name='cmpCardSelector']");


export const cmpCardSelector = () => {

	
	// only fire for `cmpCardSelector`
	if (componentCardSelector) {

		var elementSelectInput = document.querySelector("[data-component-name='cmpCardSelector'] select");


		elementSelectInput.addEventListener("click", function() {
			console.log("element changed")
		});

	}

}