
import {showSelectedCategory} from './showSelectedCategory';

export const getSelectedCategory = (elementArticleSelectorItem, elementArticleItems) => {
	
	var currentSelectedCategory;

	for (var i = 0 ; i < elementArticleSelectorItem.length; i++) {
		
		elementArticleSelectorItem[i].addEventListener('click', function(e) {
			e.preventDefault();
			currentSelectedCategory = e.currentTarget.getAttribute('data-category-type');
			showSelectedCategory(currentSelectedCategory, elementArticleItems);
		});

	}

}