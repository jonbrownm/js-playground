import {showAllCategory} from './showAllCategory';

export const showSelectedCategory = (getUserInput) => {

	var elementCardsListItem = document.querySelectorAll("[data-component-name='cmpCardSelector'] ul li"),
		elementCardsListItemCategory;


	[].forEach.call(elementCardsListItem, function(element){

		elementCardsListItemCategory = element.getAttribute("data-category");

		if (getUserInput != "all") {
			if (elementCardsListItemCategory == getUserInput) {
				element.style.display = "block";
			}
			else {
				element.style.display = "none";			
			}
		}
		else {
			showAllCategory();
		}

	});

}