import {getSelectedCategory} from './cmpCategoryArticleSelector/getSelectedCategory';

const genericComponentElement = document.querySelector("[data-component-name='cmpCategoryArticleSelector']");

export const genericComponent = () => {

	getSelectedCategory();
	
}