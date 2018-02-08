
export const getSubmittedChat = (elementSubmitButton) => {

	elementSubmitButton.addEventListener('click', function(e) {
		e.preventDefault();

		var submittedMessage = document.querySelector("[data-submitted-message]").value;


		console.log(submittedMessage)

	});

}