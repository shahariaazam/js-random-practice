//Take data by javascript's prompt
(function(){
	var readyConfirm = prompt("Are you ready to play the game? Write answer 'yes' or 'no'");

	if(readyConfirm === "yes"){
		var playerAge = prompt("Want to hear a lovely message?");
		if(playerAge === 'no'){
			console.log("Game over! Thanks.");
		}else{
			console.log("Congratulations! You are eligible to play the game.");
			var getTime = prompt("It is afternoon there? Write 'yes' or 'no'");
			if(getTime.length <= 2){
				console.log('You answered incorrectly');
			}
			if(getTime === 'yes'){
				var finalConfirmation = prompt("Want to hear the cute message? Write 'yes' or 'no'");
				if(finalConfirmation === 'yes'){
					console.log("Hey darling, have a great afternoon.");
				}else{
					console.log("Game is over! You are feeling boring! Thanks!");
				}
			}
		}
	}else{
		console.log("No problem, try again later");
	}
})()