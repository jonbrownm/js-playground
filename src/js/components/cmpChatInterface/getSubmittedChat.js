
import {showSubmittedChat} from './showSubmittedChat';

export const getSubmittedChat = (elementChatInput) => {

	elementChatInput.addEventListener('keyup', function (e) {

	    if (e.keyCode === 13) {

	    	var submittedChat = document.querySelector("[data-new-chat]"),
	    		submittedChatMessage = document.querySelector("[data-new-chat]").value;


	        submittedChat.value = "";
	        showSubmittedChat(submittedChatMessage);
	        
	    }

	});

}