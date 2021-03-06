
import {returnCountryResults} from './returnCountryResults';


export const returnCountryList = (userSearchInput) => {
	
	var request = new XMLHttpRequest();
	request.open('GET', 'js/api/countries.json', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    var countryList = JSON.parse(request.responseText);
	    returnCountryResults(countryList, userSearchInput);
	  } else {
	    // We reached our target server, but it returned an error

	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	};

	request.send();

}