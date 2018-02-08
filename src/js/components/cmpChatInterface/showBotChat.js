
import {showInProgressChat} from './showInProgressChat';

export const showBotChat = () => {

	var chatList = document.querySelector("[data-chat-list]"),
		newChatListItem = document.createElement("li"),
		newChatListSpan = document.createElement("span"),
        chatResponseIndex = Math.floor((Math.random() * 2) + 1),
        chatResponses = [
            "Sorry, I don't understand.",
            "Hello, is anyone there?",
            "Ok, I see what you mean."
        ];


    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListItem.classList.add("is-bot");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");

    newChatListSpan.innerText = chatResponses[chatResponseIndex];

    newChatListItem.appendChild(newChatListSpan);

    setTimeout(function(){
        showInProgressChat();

        setTimeout(function(){
    	   chatList.appendChild(newChatListItem);
        }, 1500);

    }, 1500);

}