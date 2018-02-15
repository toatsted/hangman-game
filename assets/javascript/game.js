$(document).ready(function(){
	var states = [
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

	var lives;
	var word;
	var workingWord;
	var graveyard;
	var spaceIndex;

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

		var gameHTML = "";
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



	

	document.addEventListener("keyup", function(event){
		if(lives === 0){			
			reset();
		}else{
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
		}
	});
});