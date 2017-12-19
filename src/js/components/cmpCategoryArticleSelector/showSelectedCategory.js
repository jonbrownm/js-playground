
export const showSelectedCategory = (currentSelectedCategory, elementArticleItems) => {

	if (currentSelectedCategory === 'All') {
		return elementArticleItems.map(function(elementArticleItems) {
			elementArticleItems.style.display = 'block';
			return elementArticleItems
		})
	}
	else {
		return elementArticleItems.map(function(elementArticleItems) {
			elementArticleItems.style.display = 'none';

			return elementArticleItems
		}).filter(function(elementArticleItems){

			return elementArticleItems.getAttribute('data-category-type') === currentSelectedCategory;
		}).map(function(elementArticleItems){

			elementArticleItems.style.display = 'block';
			return elementArticleItems;
		})

	}

}