import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';
import {getAllSelectedCategory} from './cmpCategoryArticleSelector/getAllSelectedCategory';

const genericComponentElement = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");

var elementArticleSelectorItem = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-selector-item')),
	elementArticleItems = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-list-item')),
	currentViewArticleList = elementArticleSelectorItem,
	elementArticleItems;

export const cmpCategoryArticleSelector = () => {

	getSelectedCategory(elementArticleSelectorItem, elementArticleItems);
	getAllSelectedCategory(elementArticleSelectorItem, currentViewArticleList, elementArticleItems);
	
}