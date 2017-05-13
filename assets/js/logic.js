var animals = ["Moose", "Zebra", "Giraffe", "Barn Owl", "Cuttlefish", "Leafy Seadragon", "Sun Bear", "Komondor Dog", "Angora Rabbit", "Red Panda", "Three Toed Sloth", "Emperor Tamarin", "White-faced Saki Monkey", "Tapir", "Hagfish", "Star-nosed Mole", "Proboscis Monkey", "Pink Fairy Armadillo", "Axolotl", "Aye-aye", "Alpaca", "Tarsier", "Dumbo Octopus", "Frill-necked Lizard", "Narwhal", "Sucker-footed Bat", "Pygmy Marmoset", "Blobfish", "Platypus", "African Shoebill", "Yeti Crab"];
var animalFact = ["Moose are herbivores (plant-eaters) and they like to eat flowering plants, shrubs, leaves and small branches of the trees. During the summer, they eat plants from the river, like pondweed and pond lilies.",
 "Zebras are very fast-moving animals, and can reach speeds of up to 40mph when galloping across the plains. This is just fast enough to outpace predators such as lions. Foals can run with the herd within a few hours of birth.",
 "A giraffe's neck is too short to reach the ground. As a result, it has to awkwardly spread its front legs or kneel to reach the ground for a drink of water.", 
 "Barn Owls have very long legs, toes and talons to help them to catch prey hidden under long grass.", 
 "Cuttlefish can change to be almost any color—even though they're colorblind.", 
 "Leafy Seadragon Fact", 
 "A sun bear's diet consists of lizards, little birds, rodents, insects, termites, fruit and honey.", 
 "The Komondor dog was bred to guard livestock.", 
 "There are four types of Angora rabbits: English, French, Giant, and Satin.", 
 "Red Panda's are slightly bigger than a domestic cat.", 
 "Three Toed Sloth's fur hangs upside down, running from their stomachs to their backs.", 
 "There are two subspecies of Emperor tamarin found in the south west Amazon Basin.", 
 "White-faced sakis typically live around 14 years in their natural habitat and have been recorded to live up to 36 years in captivity.", 
 "Tapir calves are born with dappled markings; at about six months, they lose the markings and look like a miniature adult tapir.", 
 "The estimated 76 species of hagfishes live in cold waters around the world, from shallow to as deep as 5,500 feet.", 
 "Star-nosed Mole are almost completely blind, so they use the 22 tentacles around their nose to detect prey.", 
 "The male Proboscis Monkey is not only one of the largest monkeys in Asia but also has a long and fleshy nose and a large swollen stomach.", 
 "Pink Fairy Armadillo are the smallest of all known armadillos.", 
 "The axolotl is a salamander and like other salamanders, it is an amphibian.", 
 "The aye-aye is the largest nocturnal primate in the world.", 
 "Alpacas were domesticated by the Incas more than 6,000 years ago and raised for their exquisite fleece.", 
 "Tarsier have the largest eyes (compared to the body size) of all mammals.", 
 "Dumbo Octopus live on the seafloor or hover just slightly above it at depths of 3000 to 4000 meters.", 
 "Frill-necked Lizards get their name from their brightly coloured frill that they can make stand up to make themselves look much larger to scare off predators.", 
 "Scientists don’t know exactly why narwhals have tusks—though they might be used to impress females or fight other males.", 
 "Sucker-footed Bats are named for the presence of small cups on its wrists and ankles.", 
 "On average, pygmy marmoset reaches between 4.75 and 6 inches in length and weight between 3.53 and 4 ounces.", 
 "A Blobfish doesn’t have a skeleton or muscles.", 
 "The platypus, found only in Australia, is one of only five mammal species that lay eggs instead of giving birth to live young.", 
 "An African Shoebill's beak is around 9 inches long and about 4 inches wide. It ends with a nail-like hook, which is used for killing it's prey.", 
 "Yeti Crabs range in size from 15 cm to under half a cm across."];
var winScore = 0;
var looseScore = 10;
var userChoice = 0;
var currentWord = "";
var blankWord = "";
var animalImage = "";
var badGuess = [];
var goodGuess = [];
var random = 0;

generateAnimal();
guessAnimal();
document.getElementById("looseScore").innerHTML = looseScore;
document.getElementById("winScore").innerHTML = winScore;

function guessAnimal() {
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

		if (blankWord === currentWord) {
			winScore++;
			document.getElementById("interstFact").innerHTML = animalFact[randNum];
			document.getElementById("restart").innerHTML = "You won that round!<br>Press Space Bar to Play Again!";
			document.onkeyup = function(event) {
				if (event.keyCode === 32) {
					generateAnimal();
				}
			}
		}
		
		if (looseScore <= 0) {
			blankWord = currentWord;
			document.getElementById("interstFact").innerHTML = animalFact[randNum];
			document.getElementById("restart").innerHTML = "Sorry, no more guesses.<br>Press Space Bar to Play Again!";
			document.onkeyup = function(event) {
				if (event.keyCode === 32) {
					generateAnimal();
				}
			}
		}

		document.getElementById("winScore").innerHTML = winScore;
		document.getElementById("blankWord").innerHTML = blankWord;
		document.getElementById("badGuess").innerHTML = badGuess;
		document.getElementById("looseScore").innerHTML = looseScore;
	}
}

function generateAnimal() {
	looseScore = 10;
	badGuess = [];
	goodGuess = [];
	blankWord = "";
	randNum = Math.floor(Math.random()*animals.length);
	currentWord = animals[randNum];
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
	document.getElementById("interstFact").innerHTML = "Animal Fact";
	document.getElementById("restart").innerHTML = "";
	document.getElementById("blankWord").innerHTML = blankWord;
	document.getElementById("animalImage").src = animalImage;
	guessAnimal()
}

