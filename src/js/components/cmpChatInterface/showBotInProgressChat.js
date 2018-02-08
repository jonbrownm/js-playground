
export const showBotInProgressChat = (elementChatInput) => {

	var isTypingElement = document.querySelector("[data-chat-interface='bot-chatting']");


	isTypingElement.style.opacity = "1";

	setTimeout(function(){
		isTypingElement.style.opacity = "0";
	}, 2500);

}