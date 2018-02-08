import {getSubmittedChat} from './cmpChatInterface/getSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']");


export const cmpChatInterface = () => {

	if (componentChatInterface) {
		getSubmittedChat();
	}
	
}