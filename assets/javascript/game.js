//picks random word and displays underscores acording to length of random word

//when a person presses a key
	//loop through word to try to find letter
		//if not in word
			//put in graveyard
		//else
			//put into underscores in right position

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
	}

	gameHTML = "";
	workingWord.forEach(function(value){
		gameHTML += value + " ";
	});

	graveHTML = "";
	graveyard.forEach(function(value){
		graveHTML += value + " ";
	});

	document.querySelector("#game").innerHTML = "<p>" + gameHTML + "</p>";
	document.querySelector("#grave").innerHTML = "<p>" + graveHTML + "</p>";
});