
import {showSelectedCategory} from './showSelectedCategory';
import {showAllSelectedCategory} from './showAllSelectedCategory';

export const getSelectedCategory = (elementArticleSelectorItem, elementArticleItems) => {
	
	var allArticles = false,
		currentSelectedCategory,
		currentViewArticleList;
		

	for (var i = 0 ; i < elementArticleSelectorItem.length; i++) {
		
		elementArticleSelectorItem[i].addEventListener('click', function(e) {
			e.preventDefault();
			currentSelectedCategory = e.currentTarget.getAttribute('data-category-type');
			currentViewArticleList = showSelectedCategory(currentSelectedCategory, elementArticleItems);
			showAllSelectedCategory(currentViewArticleList);
		});

	}

}