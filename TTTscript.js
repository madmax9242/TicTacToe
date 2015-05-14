var xIcon = '<i class="fa fa-times fa-5x"></i>';
var oIcon = '<i class="fa fa-circle-o fa-5x"></i>';

$(document).ready(function() {
	var turnCounter = Math.random() < 0.5 ? 1 : 0;
	//Chooses the order of play.  If it's a 1, X goes first.  If its a 0, O goes first
	$('td').click(function(event)  {
		console.log(turnCounter);
		turnCounter++;
		if (turnCounter % 2 === 0) {
			if ($(this).html() == xIcon || $(this).html() == oIcon) {

				alert("Nice try, cheater.");
			}

			else {
				//I add the class to the table cell so I can use it to compare in the checkWinner function
				$(this).html(xIcon);
				$(this).addClass('xClass'); 				
				checkWinner();
			}
		}

		else if (turnCounter % 2 === 1) {
			if ($(this).html() == xIcon || $(this).html() == oIcon) {

				alert("Nice try, cheater.");
			}

			else {
				$(this).html(oIcon);
				$(this).addClass('oClass');
				checkWinner();
			}
		}
	})

	function chooseOrderofPlay()  {
		var random = Math.random();
		var turnCounter = random < 0.5 ? 1 : 0;
		console.log(random)
		console.log(turnCounter);
		return turnCounter;
		// var random = Math.random();
		// console.log(random);
		// if (random < 0.5) {
		// 	turnCounter = 1;
		// 	return turnCounter;
		// }
		// return turnCounter;
		//}

	}

	function checkWinner()  {
		var tester = ['oClass','xClass'];
		var victoryConfirm = 0;

		for (var i = 0; i < tester.length; i++) {
			if ($('#alpha').hasClass(tester[i]) == true && $('#bravo').hasClass(tester[i]) == true && ($('#charlie').hasClass(tester[i]) == true))  {
				victoryConfirm = 1
			}
			else if ($('#delta').hasClass(tester[i]) == true && $('#epsilon').hasClass(tester[i]) == true && ($('#foxtrot').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}
			else if ($('#golf').hasClass(tester[i]) == true && $('#hotel').hasClass(tester[i]) == true && ($('#indigo').hasClass(tester[i]) == true)) {
				victoryConfirm = 1				
			}
			else if ($('#alpha').hasClass(tester[i]) == true && $('#delta').hasClass(tester[i]) == true && ($('#golf').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}
			else if ($('#bravo').hasClass(tester[i]) == true && $('#epsilon').hasClass(tester[i]) == true && ($('#hotel').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}
			else if ($('#charlie').hasClass(tester[i]) == true && $('#foxtrot').hasClass(tester[i]) == true && ($('#indigo').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}
			else if ($('#alpha').hasClass(tester[i]) == true && $('#epsilon').hasClass(tester[i]) == true && ($('#indigo').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}
			else if ($('#charlie').hasClass(tester[i]) == true && $('#epsilon').hasClass(tester[i]) == true && ($('#golf').hasClass(tester[i]) == true)) {
				victoryConfirm = 1
			}

			if (tester[i] == 'oClass' && victoryConfirm == 1)  {
				victoryConfirm = 0;
				alert("Player 2 wins");
				location.reload();

			}
			else if (tester[i] == 'xClass' && victoryConfirm == 1) {
				victoryConfirm = 0;
				alert("Player 1 wins");
				location.reload();

			}
		}
	}
});
//End of program

