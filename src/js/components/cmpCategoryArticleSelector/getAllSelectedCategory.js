
import {showAllSelectedCategory} from './showAllSelectedCategory';

const elementArticleShowAll = document.querySelector("button[data-load-all]");

export const getAllSelectedCategory = (elementArticleSelectorItem, currentViewArticleList, allArticles) => {
	
	elementArticleShowAll.addEventListener('click', function(e) {
		e.preventDefault();
		allArticles = true;
		showAllSelectedCategory(currentViewArticleList, allArticles);
	});

}