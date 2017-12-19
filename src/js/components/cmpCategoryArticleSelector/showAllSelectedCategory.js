
export const showAllSelectedCategory = (currentViewArticleList, allArticles) => {

	if (allArticles) {
		currentViewArticleList.forEach(function(article, i){
			article.style.display = "block";
		})
		// if (currentViewArticleList.length > 6) {
		// 	filterLoad.style.display = "none";
		// }
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
	}

}