
import {getBotSubmittedChat} from './getBotSubmittedChat';

export const showUserSubmittedChat = (submittedChat) => {

	var chatList = document.querySelector("[data-chat-interface='dialogue']"),
        isTypingElement = document.querySelector("[data-chat-interface='bot-chatting']"),
		newChatListItem = document.createElement("li"),
		newChatListSpan = document.createElement("span");


    isTypingElement.style.opacity = "0";

    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListItem.classList.add("is-user");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");
    
    newChatListSpan.innerText = submittedChat;
    newChatListItem.appendChild(newChatListSpan);
    chatList.appendChild(newChatListItem);

    getBotSubmittedChat();

}