
import {getUserSubmittedChat} from './cmpChatInterface/getUserSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']"),
	  elementChatInput = document.querySelector("textarea");


export const cmpChatInterface = () => {

	if (componentChatInterface) {
		getUserSubmittedChat(elementChatInput);
	}
	
}