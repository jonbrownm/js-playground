
export const showBotChat = () => {

	var chatList = document.querySelector("[data-chat-list]"),
		newChatListItem = document.createElement("li"),
		newChatListSpan = document.createElement("span");


    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListItem.classList.add("is-bot");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");
    
    newChatListSpan.innerText = "What?";

    newChatListItem.appendChild(newChatListSpan);

    setTimeout(function(){
    	chatList.appendChild(newChatListItem);
    }, 1500);

}