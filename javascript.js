function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

let gameContinue = true;

while (gameContinue == true) {
	let enterNumber = prompt("Entrez un nombre ici");

	let randomNumber = getRandomNumber();
	console.log(randomNumber);

	while (enterNumber != randomNumber) {
		if (enterNumber < randomNumber) {
			enterNumber = prompt("C'est plus !");
		} else if (enterNumber > randomNumber) {
			enterNumber = prompt("C'est moins !");
		}	
	}

	alert("C'est juste !")

	gameContinue = confirm("Voulez-vous continuer à jouer ?");
}
