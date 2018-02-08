
import {showBotSubmittedChat} from './cmpChatInterface/showBotSubmittedChat';
import {getUserSubmittedChat} from './cmpChatInterface/getUserSubmittedChat';

const componentChatInterface = document.querySelector("[data-component-name='cmpChatInterface']"),
	  elementChatInput = document.querySelector("[data-chat-interface='user-chat']");


export const cmpChatInterface = () => {

	if (componentChatInterface) {
		showBotSubmittedChat("Welcome ...");
		getUserSubmittedChat(elementChatInput);
	}
	
}