
const componentImageInterchange = document.querySelector("[data-component-name='cmpImageInterchange']");


export const cmpImageInterchange = () => {


	// only fire for `cmpImageInterchange`
	if (componentImageInterchange) {

	var config = {
		
		att: "data-img-interchange", 
		breakPoint: 780,
		size: {
			medium: {
				path: ":medium.jpeg"
			},
			large: {
				path: ":high.jpeg"
			}
		}
	},
	viewportWidth = window.outerWidth,
	elements = [],
	buildBackgroundImageUrl = function(backgroundImageUrl, interchangeUrl) {

		return "url('" + backgroundImageUrl + interchangeUrl + "')";
	},
	extractBackgroundImageUrl = function(element) {

		return element.style.backgroundImage.replace('url("', '').replace('")', '');
	},
	interchangeBackgroundCondition = function(element) {
		if (viewportWidth > config.breakPoint) {
			element.style.backgroundImage = buildBackgroundImageUrl(extractBackgroundImageUrl(element), config.size.large.path)
		} else {
			element.style.backgroundImage = buildBackgroundImageUrl(extractBackgroundImageUrl(element), config.size.medium.path)
		}
	},
	interchangeBackgroundImage = function(element, isProgressive) {
		if (isProgressive) {
			interchangeBackgroundCondition(element);
		} else {
			if (element.getAttribute(config.att).toLowerCase() === 'medium') {
				element.style.backgroundImage = buildBackgroundImageUrl(extractBackgroundImageUrl(element), config.size.medium.path)
			} else if (element.getAttribute(config.att).toLowerCase() === 'large') {
				element.style.backgroundImage = buildBackgroundImageUrl(extractBackgroundImageUrl(element), config.size.large.path)
			} else {
				interchangeBackgroundCondition(element);
			}
		}
	},
	interchangeImageCondition = function(img) {
		if (viewportWidth > config.breakPoint) {
			img.src = img.src + config.size.large.path;
		} else {
			img.src = img.src + config.size.medium.path;
		}
	},
	interchangeImgSrc = function(img, isProgressive) {
		if (isProgressive) {
			interchangeImageCondition(img);
		} else {
			if (img.getAttribute(config.att).toLowerCase() === 'medium') {
				img.src = img.src + config.size.medium.path;
			} else if (img.getAttribute(config.att).toLowerCase() === 'large') {
				img.src = img.src + config.size.large.path;
			} else {
				interchangeImageCondition(img);
			}
		}
	},
	checkElementTag = function(element) {
		var isProgressive = (element.getAttribute(config.att) || 'progressive').toLowerCase() === 'progressive' ? true : false;

		if (element.tagName === "IMG") {
			interchangeImgSrc(element, isProgressive);
		} else {
			if (element.style.backgroundImage) {
				interchangeBackgroundImage(element, isProgressive)
			}
		}
	},
	isMobile = function() {
		try {
			document.createEvent('TouchEvent');
			if (viewportWidth < 1024) {
				return true;
			}
			return false;
		} catch (e) {
			return false;
		}
	},
	init = function() {
		elements = document.querySelectorAll("[" + config.att + "]");
		for (var i = 0; i < elements.length; i++) {
			checkElementTag(elements[i]);
		}
	},
	clearSelection = function(){
		elements = [];
	};   

	if (!isMobile()) {
		init()
	}

	}

}