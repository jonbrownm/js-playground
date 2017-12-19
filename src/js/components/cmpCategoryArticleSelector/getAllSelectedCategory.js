
import {showAllSelectedCategory} from './showAllSelectedCategory';

const elementArticleShowAll = document.querySelector("button[data-load-all]");

export const getAllSelectedCategory = (elementArticleSelectorItem, currentViewArticleList) => {
	
	elementArticleShowAll.addEventListener('click', function(e) {
		e.preventDefault();
		allArticles = true;
		showAllSelectedCategory(currentViewArticleList);
	});

}