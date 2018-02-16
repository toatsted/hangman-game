$(document).ready(function(){
	let states = [
		"Alabama", "Alaska", "Arizona", "Arkansas", "California",
		"Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
		"Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
		"Kansas", "Kentucky", "Lousisiana", "Maine", "Maryland",
		"Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
		"Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
		"New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
		"Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
		"South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
		"Virgina", "Washington", "West Virgina", "Wisconsin", "Wyoming"
	];

	let lives;
	let word;
	let workingWord;
	let graveyard;
	let spaceIndex;
	let wins = 0;

	reset();

	function reset(){
		lives = 5;
		word = states[Math.floor(Math.random()*50)].toLowerCase().split("");
		workingWord = [];
		graveyard = [];
		spaceIndex = null;

		word.forEach(function(value, index){
			console.log(value);
			if(value === " "){
				spaceIndex = index;
			}	
			workingWord.push("_");
		});

		let gameHTML = "";
		workingWord.forEach(function(value, index){
			if(index === spaceIndex){
				gameHTML += "- ";
			}else{
				gameHTML += value + " ";
			}
		});

		$("#game").text(gameHTML);
		$("#grave").text("");
		$("#lives").text("lives: " + lives);
	}


	function letterInWord(letter){
		let inWord = false;
		let isDone = true;
		word.forEach(function(value, index){
			if(letter === value){
				workingWord[index] = value;
				inWord = true;
			}
			workingWord.forEach(function(value, index){
					if(value === "_" && !(index === spaceIndex)){
						isDone = false;
					}
				});
		});

		return [inWord, isDone];
	}

	function isInGrave(letter, inWord, isDone){
		let inGrave = false;
		if(!inWord){
			isDone = false;
			graveyard.forEach(function(value){
				if(letter === value){
					inGrave = true;
				}
			});
		}

		return inGrave;
	}
	

	document.addEventListener("keyup", function(event){
		if(lives === 0){			
			reset();
		}else{
			let letter = event.key.toLowerCase();

			let inWordArr = letterInWord(letter);
			let inWord = inWordArr[0];
			let isDone = inWordArr[1];

			let inGrave = isInGrave(letter, inWord, isDone);

			if(isDone){
				wins++;
				reset();
			}

			if(!inGrave && !inWord && letter.length === 1){
				graveyard.push(letter);
				lives--;
				if(lives === 0){
					$("#lives").text(word.join(""));
				}
			}

			gameHTML = "";
			workingWord.forEach(function(value, index){
				if(index === spaceIndex){
					gameHTML += "- ";
				}else{
					gameHTML += value + " ";
				}
			});

			graveHTML = "";
			graveyard.forEach(function(value){
				graveHTML += value + " ";
			});

			$("#game").text(gameHTML);
			$("#grave").text(graveHTML);
			if(lives !== 0){
				$("#lives").text("lives: " + lives);
			}
			$("#wins").text("wins: " + wins);
		}
	});
});
