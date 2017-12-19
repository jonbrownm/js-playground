import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';
import {getAllSelectedCategory} from './cmpCategoryArticleSelector/getAllSelectedCategory';

const genericComponentElement = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");

export const cmpCategoryArticleSelector = () => {

	getSelectedCategory();
	getAllSelectedCategory();
	
}