import {getSubmittedChat} from './cmpChatInterface/getSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']");


export const cmpChatInterface = () => {

	var elementSubmitButton = document.querySelector("input[data-submit-chat]");

	if (componentChatInterface) {
		getSubmittedChat(elementSubmitButton);
	}
	
}