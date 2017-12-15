import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';
import {showAllSelectedCategory} from './cmpCategoryArticleSelector/showAllSelectedCategory';

const genericComponentElement = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");

export const cmpCategoryArticleSelector = () => {

	getSelectedCategory();
	showAllSelectedCategory();
	
}