


export const returnCountryResults = (countryList, userSearchInput) => {

	var elementSearchList = document.querySelector("[data-component-name='cmpCountrySearch'] ul"),
		searchResultsDisplayed = 5,
		searchResultsDisplayedCurrent,
		currentCountry,
		index;


	if (userSearchInput) {
		elementSearchList.innerHTML = "";

		for (index = 0; index < countryList.length; index++) {

			var newListItem = document.createElement("li");
			

			currentCountry = countryList[index].toLowerCase();

			if (currentCountry.match("^" + userSearchInput)) {
				newListItem.className = "cmp-country-search__results-item";
				newListItem.appendChild(document.createTextNode(currentCountry));
				elementSearchList.appendChild(newListItem);
				searchResultsDisplayedCurrent = elementSearchList.childElementCount; 
			}
		}

	}
	else {
		elementSearchList.innerHTML = "";
	}

}