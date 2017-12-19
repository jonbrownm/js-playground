
import {showAllSelectedCategory} from './showAllSelectedCategory';

const elementArticleShowAll = document.querySelector("button[data-load-all]");

var allArticles;

export const getAllSelectedCategory = () => {
	
	elementArticleShowAll.addEventListener('click', function(e) {
		e.preventDefault();
		allArticles = true;
		showAllSelectedCategory();
	});

}