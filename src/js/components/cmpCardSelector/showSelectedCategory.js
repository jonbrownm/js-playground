
export const showSelectedCategory = () => {

	var elementCardsListItem = document.querySelectorAll("[data-component-name='cmpCardSelector'] ul li"),
		elementCardsListItemCategory;


	[].forEach.call(elementCardsListItem, function(element){

		elementCardsListItemCategory = element.getAttribute("data-category");

		if (elementCardsListItemCategory == "red") {
			element.style.display = "block";
		}
		else {
			element.style.display = "none";			
		}

	});

}