import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';
import {getAllSelectedCategory} from './cmpCategoryArticleSelector/getAllSelectedCategory';
import {showAllSelectedCategory} from './cmpCategoryArticleSelector/showAllSelectedCategory';

const genericComponentElement = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");

var allArticles = false,
	elementArticleSelectorItem = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-selector-item')),
	elementArticleItems = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-list-item')),
	currentViewArticleList = elementArticleItems,
	elementArticleItems;
	

export const cmpCategoryArticleSelector = () => {

	getSelectedCategory(elementArticleSelectorItem, elementArticleItems);
	getAllSelectedCategory(elementArticleSelectorItem, currentViewArticleList, elementArticleItems, allArticles);
	showAllSelectedCategory(currentViewArticleList, allArticles);
	
}