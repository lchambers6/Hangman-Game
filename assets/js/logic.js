var animals = ["Moose", "Zebra", "Giraffe", "Barn Owl", "Cuttlefish", "Leafy Seadragon", "Sun Bear", "Komondor Dog", "Angora Rabbit", "Red Panda", "Three Toed Sloth", "Emperor Tamarin", "White-faced Saki Monkey", "Tapir", "Hagfish", "Star-nosed Mole", "Proboscis Monkey", "Pink Fairy Armadillo", "Axolotl", "Aye-aye", "Alpaca", "Tarsier", "Dumbo Octopus", "Frill-necked Lizard", "Narwhal", "Sucker-footed Bat", "Pygmy Marmoset", "Blobfish", "Platypus", "Shoebill", "Yeti Crab"];
var winScore = 0;
var looseScore = 20;
var userChoice = 0;
var currentWord = "";
var blankWord = "";
var animalImage = "";
var badGuess = [];
var goodGuess = [];


currentWord = animals[Math.floor(Math.random()*animals.length)];
animalImage = "assets/images/" + currentWord + ".jpg";
for (i = 0; i < currentWord.length; i++) {
	if ((currentWord.charCodeAt(i) <= 90 && currentWord.charCodeAt(i) >= 65) || (currentWord.charCodeAt(i) <= 122 && currentWord.charCodeAt(i) >= 97)) {
		blankWord += "_";
	} else if (currentWord.charCodeAt(i) === 32) {
		blankWord += " ";
	} else {
		blankWord += currentWord.charAt(i);
	}
}

// document.getElementById("currentWord").innerHTML = currentWord;
document.getElementById("blankWord").innerHTML = blankWord;
document.getElementById("animalImage").src = animalImage;


document.onkeyup = function(event) {
	if ((event.keyCode <= 90 && event.keyCode >= 65)) {
		if ((currentWord.toUpperCase().indexOf(String.fromCharCode(event.keyCode)) != -1) && (goodGuess.indexOf(String.fromCharCode(event.keyCode)) === -1)) {
			goodGuess.push(String.fromCharCode(event.keyCode));
			for (i = 0; i < currentWord.length; i++) {
				if (currentWord.toUpperCase().charCodeAt(i) === event.keyCode) {
					blankWord = blankWord.substr(0, i) + currentWord.charAt(i) + blankWord.substr(i + 1, currentWord.length);
				}  
			}
		} else if ((badGuess.indexOf(String.fromCharCode(event.keyCode)) === -1) && (goodGuess.indexOf(String.fromCharCode(event.keyCode)) === -1)){
					badGuess.push(String.fromCharCode(event.keyCode));
					looseScore--;
		}	
	}

	document.getElementById("blankWord").innerHTML = blankWord;
	document.getElementById("badGuess").innerHTML = badGuess;
	document.getElementById("looseScore").innerHTML = looseScore;
};

