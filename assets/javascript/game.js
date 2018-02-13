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

var word = "New Hampshire".toLowerCase().split("");
// var word = states[Math.floor(Math.random()*50)].toLowerCase().split("");

var workingWord = [];
var graveyard = [];
var space;
var spaceIndex;

word.forEach(function(value, index){
	console.log(value);
	if(value === " "){
		space = true;
		spaceIndex = index;
	}	
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

	document.querySelector("#game").innerHTML = gameHTML;
	document.querySelector("#grave").innerHTML = graveHTML;
});