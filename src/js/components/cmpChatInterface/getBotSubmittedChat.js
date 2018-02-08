
import {showBotSubmittedChat} from './showBotSubmittedChat';

export const getBotSubmittedChat = () => {

	var chatResponseIndex = Math.floor((Math.random() * 2) + 1),
		chatResponse,
        chatResponses = [
            "Sorry, I don't understand.",
            "Hello, is anyone there?",
            "Ok, I see what you mean."
        ];

    chatResponse = chatResponses[chatResponseIndex];

    showBotSubmittedChat(chatResponse);

}