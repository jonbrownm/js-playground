import {showInProgressChat} from './cmpChatInterface/showInProgressChat';
import {getSubmittedChat} from './cmpChatInterface/getSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']"),
	  elementChatInput = document.querySelector("textarea");


export const cmpChatInterface = () => {

	if (componentChatInterface) {
		showInProgressChat(elementChatInput);
		getSubmittedChat(elementChatInput);
	}
	
}