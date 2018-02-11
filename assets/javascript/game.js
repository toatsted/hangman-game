//picks random word and displays underscores acording to length of random word

//when a person presses a key
	//loop through word to try to find letter
		//if not in word
			//put in graveyard
		//else
			//put into underscores in right position

var word = "cars";

var fword = ["_", "_", "_", "_"];

var graveyard = [];

document.addEventListener("keyup", function(event){
	letter = event.key;

	var inWord = false;
	for(var i = 0; i < word.length; i++){
		if(letter === word[i]){
			fword[i] = letter;
			inWord = true;
		}
	}

	if(!inWord){
		graveyard.forEach(function(index){
			if(letter === index){}
			else {
				graveyard.push(letter);
			}
		});
	}

	hidden = "";
	for(var i = 0; i < fword.length; i++) {
		hidden += fword[i] + " ";
	}

	var grave = "";
	for(var i = 0; i < graveyard.length; i++) {
		grave += graveyard + " ";
	}



	document.querySelector("#game").innerHTML = hidden;
	document.querySelector("#grave").innerHTML=  graveyard;
})