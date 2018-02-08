
export const showInProgressChat = (elementChatInput) => {

	var isTypingElement = document.querySelector(".is-typing"),
		isCurrentlyTyping;


	elementChatInput.addEventListener('keyup', function (e) {

		isTypingElement.innerHTML = "Is typing";
		
    });

}