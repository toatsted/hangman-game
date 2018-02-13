var word = "peanuts".split("");
var workingWord = [];
var graveyard = [];

word.forEach(function(value){
	workingWord.push("_");
});



document.addEventListener("keyup", function(event){
	var letter = event.key.toLowerCase();

	var inWord = false;
	word.forEach(function(value, index){
		if(letter === value){
			workingWord[index] = value;
			inWord = true;
		}
	});

	var inGrave = false;
	if(!inWord){
		graveyard.forEach(function(value){
			if(letter === value){
				inGrave = true;
			}
		});
	}

	if(!inGrave && !inWord && letter.length === 1){
		graveyard.push(letter);
		lives--;
	}

	gameHTML = "";
	workingWord.forEach(function(value){
		gameHTML += value + " ";
	});

	graveHTML = "";
	graveyard.forEach(function(value){
		graveHTML += value + " ";
	});

	document.querySelector("#game").innerHTML = gameHTML;
	document.querySelector("#grave").innerHTML = graveHTML;
});