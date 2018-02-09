
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



 //    var request = new XMLHttpRequest();
	// request.open('GET', 'api/data.json', true);

	// request.onload = function() {
	// 	if (request.status >= 200 && request.status < 400) {
	//     	var data = JSON.parse(request.responseText);
	//     	console.log(data)
	// 	}
	// 	else {
	// 		console.log("We reached our target server, but it returned an error")
	// 	}
	// };

	// request.onerror = function() {
	// 	console.log("There was a connection error of some sort");
	// };

	// request.send();


	

}