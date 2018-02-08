
import {showUserSubmittedChat} from './showUserSubmittedChat';

export const getUserSubmittedChat = (elementChatInput) => {

	elementChatInput.addEventListener('keyup', function (e) {

	    if (e.keyCode === 13) {

	    	var submittedChat = document.querySelector("[data-new-chat]"),
	    		submittedChatMessage = document.querySelector("[data-new-chat]").value;


	        submittedChat.value = "";
	        showUserSubmittedChat(submittedChatMessage);
	        
	    }

	});

}