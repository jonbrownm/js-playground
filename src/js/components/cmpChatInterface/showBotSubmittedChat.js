
import {showBotInProgressChat} from './showBotInProgressChat';

export const showBotSubmittedChat = (chatResponse) => {

    var chatList = document.querySelector("[data-chat-interface='dialogue']"),
        newChatListItem = document.createElement("li"),
        newChatListSpan = document.createElement("span");


    newChatListItem.classList.add("cmp-chat-interface__dialogue-list-item");
    newChatListItem.classList.add("is-bot");
    newChatListSpan.classList.add("cmp-chat-interface__dialogue-list-item-chat");

    newChatListSpan.innerText = chatResponse;

    newChatListItem.appendChild(newChatListSpan);

    showBotInProgressChat();

    setTimeout(function(){
        chatList.appendChild(newChatListItem);
    }, 3000);




    // var dataArray = JSON.parse(JSON.stringify(data));

    // dataArray.map(function(owner){
    //    console.log(owner.surname);
    //    console.log(owner.pets[0].name);
    //    console.log(owner.pets[0].type);
    // });



}