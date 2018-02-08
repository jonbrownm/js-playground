
export const showSubmittedChat = (submittedChat) => {

	var chatList = document.querySelector("[data-chat-list]"),
		newChatListItem = document.createElement("li"),
		newChatListSpan = document.createElement("span");


    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");
    newChatListSpan.classList.add("is-user");
    
    newChatListSpan.innerText = submittedChat;

    newChatListItem.appendChild(newChatListSpan);

    chatList.appendChild(newChatListItem);

}