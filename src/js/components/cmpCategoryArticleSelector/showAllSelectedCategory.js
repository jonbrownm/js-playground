
const elementArticleShowAll = document.querySelector("button[data-load-all]");

export const showAllSelectedCategory = () => {
	
	elementArticleShowAll.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('hello')
	});

}