
var elementArticleItems = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-list-item')),
	elementArticleItemCategory;

export const showSelectedCategory = (currentSelectedCategory) => {
	console.log(currentSelectedCategory);

	if (currentSelectedCategory === 'All') {
		elementArticleItems.forEach(function(elementArticleItem) {
		    elementArticleItem.style.display = 'block';
		});
	}
	else {
		elementArticleItems.forEach(function(elementArticleItem) {
		    elementArticleItem.style.display = 'none';
		});
	}

}