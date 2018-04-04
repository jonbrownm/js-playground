
export const showAllCategory = () => {

	var elementCardsListItem = document.querySelectorAll("[data-component-name='cmpCardSelector'] ul li"),
		elementCardsListItemCategory;


	[].forEach.call(elementCardsListItem, function(element){
		element.style.display = "block";
	});

}