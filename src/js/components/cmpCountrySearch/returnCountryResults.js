


export const returnCountryResults = (countryList, userSearchInput) => {

	var elementSearchList = document.querySelector("[data-component-name='cmpCountrySearch'] ul"),
		searchResultsDisplayed = 5,
		searchResultsDisplayedCurrent,
		currentCountryToSearch,
		currentCountryToDisplay,
		index;


	if (userSearchInput) {
		elementSearchList.innerHTML = "";

		for (index = 0; index < countryList.length; index++) {

			var newListItem = document.createElement("li");
			
			currentCountryToSearch = countryList[index].toLowerCase();
			currentCountryToDisplay = countryList[index];

			if (currentCountryToSearch.match("^" + userSearchInput)) {
				newListItem.className = "cmp-country-search__results-item";
				newListItem.appendChild(document.createTextNode(currentCountryToDisplay));
				elementSearchList.appendChild(newListItem);
				searchResultsDisplayedCurrent = elementSearchList.childElementCount; 
			}
		}

	}
	else {
		elementSearchList.innerHTML = "";
	}

}