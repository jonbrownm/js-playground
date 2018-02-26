
export const showAllSelectedCategory = (currentViewArticleList, allArticles) => {

	const elementLoadAllArticles= document.querySelector('.cmp-category-article-selector__article-load-container-button');

	if (allArticles) {
		currentViewArticleList.forEach(function(article, i){
			article.style.display = "block";
		})
		// if (currentViewArticleList.length > 6) {
		// 	filterLoad.style.display = "none";
		// }
		elementLoadAllArticles.style.display = "none";
	}
	else if (!allArticles) {
		currentViewArticleList.forEach(function(article, i){
			if (i > 5) {
				article.style.display = "none";
			}
		})
		// if (currentViewArticleList.length > 6) {
		// 	filterLoad.style.display = "block";
		// }
		elementLoadAllArticles.style.display = "block";
	}

}