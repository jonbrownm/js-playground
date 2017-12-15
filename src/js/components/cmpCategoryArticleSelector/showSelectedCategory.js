
var elementArticleItems = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-list-item'));

export const showSelectedCategory = (currentSelectedCategory) => {

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