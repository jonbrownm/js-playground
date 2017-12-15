
import {showSelectedCategory} from './showSelectedCategory';

export const getSelectedCategory = () => {
	
	var elementArticleSelectorItem = document.querySelectorAll('.cmp-category-article-selector__article-selector-item'),
		currentSelectedCategory;
		

	for (var i = 0 ; i < elementArticleSelectorItem.length; i++) {
		
		elementArticleSelectorItem[i].addEventListener('click', function(e) {
			e.preventDefault();

			currentSelectedCategory = e.currentTarget.getAttribute('data-category-type');

			console.log(currentSelectedCategory)

			showSelectedCategory();
			
		});

	}

}