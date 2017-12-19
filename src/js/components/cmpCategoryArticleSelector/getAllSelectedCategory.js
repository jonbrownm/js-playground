
import {showAllSelectedCategory} from './showAllSelectedCategory';

const elementArticleShowAll = document.querySelector("button[data-load-all]");

var elementArticleSelectorItem = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-selector-item')),
	currentViewArticleList = elementArticleSelectorItem,
	allArticles;

export const getAllSelectedCategory = () => {
	
	elementArticleShowAll.addEventListener('click', function(e) {
		e.preventDefault();
		allArticles = true;
		showAllSelectedCategory(currentViewArticleList);
	});

}