import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';
import {getAllSelectedCategory} from './cmpCategoryArticleSelector/getAllSelectedCategory';
import {showAllSelectedCategory} from './cmpCategoryArticleSelector/showAllSelectedCategory';

const componentCategoryArticleSelector = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");


export const cmpCategoryArticleSelector = () => {


	// only fire for `cmpCategoryArticleSelector`
	if (componentCategoryArticleSelector) {

		var elementArticleSelectorItem = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-selector-item')),
			elementArticleItems = [].slice.call(document.querySelectorAll('.cmp-category-article-selector__article-list-item')),
			currentViewArticleList = elementArticleItems,
			elementArticleItems;


		getSelectedCategory(elementArticleSelectorItem, elementArticleItems);
		getAllSelectedCategory(elementArticleSelectorItem, currentViewArticleList, elementArticleItems);
		showAllSelectedCategory(currentViewArticleList);
	
	}
	
}