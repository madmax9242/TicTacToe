var xIcon = '<i class="fa fa-times fa-5x"></i>';
var oIcon = '<i class="fa fa-circle-o fa-5x"></i>';
//beer = '<i class="fa fa-beer"></i>';
//martini glass = '<i class="fa fa-glass"></i>'
//eye = '<i class="fa fa-eye"></i>'
//bomb = '<i class="fa fa-bomb"></i>'
//paw = '<i class="fa fa-paw"></i>'
//spy = '<i class="fa fa-user-secret"></i>'
//rocket = '<i class="fa fa-rocket"></i>'
//music = '<i class="fa fa-music"></i>'
//gamepad = '<i class="fa fa-gamepad"></i>'



$(document).ready(function() {
	var turnCounter = Math.random() < 0.5 ? 1 : 0;
	//Chooses the order of play. If the random number is less than .5, then turnCounter starts at 1.  If random is more, tC starts at 0
	
	$('button').click(function(event)  {
		location.reload();
	})


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

