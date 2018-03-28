


export const returnCountryResults = (countryList, userSearchInput) => {

	var currentCountry,
		index;
	

	for (index = 0; index < countryList.length; index++) {
		currentCountry = countryList[index].toLowerCase();

		if (currentCountry.match("^" + userSearchInput)) {
			console.log(currentCountry)
		}
	}


}