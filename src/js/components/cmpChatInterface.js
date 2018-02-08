import {getSubmittedChat} from './cmpChatInterface/getSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']");


export const cmpChatInterface = () => {

	var elementSubmitButton = document.querySelector("textarea");

	if (componentChatInterface) {
		getSubmittedChat(elementSubmitButton);
	}
	
}