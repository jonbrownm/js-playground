
import {showSubmittedChat} from './showSubmittedChat';

export const getSubmittedChat = (elementSubmitButton) => {

	elementSubmitButton.addEventListener('click', function(e) {
		e.preventDefault();

		var submittedChat = document.querySelector("[data-new-chat]").value;

		showSubmittedChat(submittedChat);

	});

}