
export const showInProgressChat = (elementChatInput) => {

	var isTypingElement = document.querySelector("[data-is-chatting]");


	elementChatInput.addEventListener('keydown', function (e) {

		isTypingElement.style.opacity = "1";

		setTimeout(function(){
			isTypingElement.style.opacity = "0";
		}, 1000);
		
    });

}