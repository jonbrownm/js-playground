
export const setUserInput = (elementSearchInput, elementSearchList, userSelectedInput, element) => {

	if (element.target && element.target.matches("li.cmp-country-search__results-item")) {
		userSelectedInput = element.target.innerText;
		elementSearchInput.value = userSelectedInput;
		elementSearchList.style.display = "none";
	}

}