
import {showBotChat} from './showBotChat';

export const showSubmittedChat = (submittedChat) => {

	var chatList = document.querySelector("[data-chat-list]"),
        isTypingElement = document.querySelector("[data-is-chatting]"),
		newChatListItem = document.createElement("li"),
		newChatListSpan = document.createElement("span");


    isTypingElement.style.opacity = "0";

    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListItem.classList.add("is-user");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");
    
    newChatListSpan.innerText = submittedChat;
    newChatListItem.appendChild(newChatListSpan);
    chatList.appendChild(newChatListItem);

    showBotChat();

}