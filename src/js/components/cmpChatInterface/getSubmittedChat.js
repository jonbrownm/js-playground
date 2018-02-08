
import {showSubmittedChat} from './showSubmittedChat';

export const getSubmittedChat = (elementSubmitButton) => {

	elementSubmitButton.addEventListener('keyup', function (e) {

	    if (e.keyCode === 13) {
	        var submittedChat = document.querySelector("[data-new-chat]").value;
	        showSubmittedChat(submittedChat);
	    }

	});

}