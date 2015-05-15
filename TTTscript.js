//Declare these variables with default X and O in case no radio button is checked further down
var xIcon = '<i class="fa fa-times fa-5x"></i>';
var oIcon = '<i class="fa fa-circle-o fa-5x"></i>';
var p1wins = 0;
var p2wins = 0;

$(document).ready(function() {
	localStorage.setItem("P1-wins", p1wins);
	localStorage.setItem("P2-wins", p2wins);
	var turnCounter = Math.random() < 0.5 ? 1 : 0;
	//Chooses the order of play. If the random number is less than .5, then turnCounter starts at 1.  If random is more, tC starts at 0
	
	//Refreshes the page
	$('#resetBoard').click(function(event)  {
		clearBoard();
		console.log($('#alpha').hasClass('xClass'));
	})

	$('#resetScore').click(function(event)  {
		p1wins = 0;
		p2wins = 0;
		$('#winCounterText').text(p1wins + " - " + p2wins);

	})

	//As soon as a radio button is picked, it assigns the icon tag to the xIcon variable
	$('input:radio').change(function() {
		pOneChoiceArray = ['xIcon', 'beerIcon','bombIcon','spyIcon','musicIcon'];
		pTwoChoiceArray = ['oIcon','martiniIcon','pawIcon','rocketIcon','gamepadIcon'];
		//These are parallel arrays so I can use the i variable twice during the for loop and access the correct information
		pOneIconArray =['<i class="fa fa-times fa-5x"></i>','<i class="fa fa-beer fa-5x"></i>','<i class="fa fa-bomb fa-5x"></i>','<i class="fa fa-user-secret fa-5x"></i>','<i class="fa fa-music fa-5x"></i>']
		pTwoIconArray = ['<i class="fa fa-circle-o fa-5x"></i>', '<i class="fa fa-glass fa-5x"></i>', '<i class="fa fa-paw fa-5x"></i>', '<i class="fa fa-rocket fa-5x"></i>', '<i class="fa fa-gamepad fa-5x"></i>']

		for (var i = 0; i < pOneIconArray.length; i++) {
			if ($(this).is(':checked')  &&  $(this).hasClass(pOneChoiceArray[i])) {
				xIcon = pOneIconArray[i];
			}
		}
		//Need two for loops to check each player's choice
		for (var j = 0; j < pTwoIconArray.length; j++)  {
			if ($(this).is(':checked')  &&  $(this).hasClass(pTwoChoiceArray[j])) {
				oIcon = pTwoIconArray[j];
			}		
		}
	})


	$('td').click(function(event)  {

		turnCounter++;
		//Uses modulus to test whether  the remainder is 1 or 0.  Easy way to switch turns back and forth
		if (turnCounter % 2 === 0) {
			if ($(this).html() == xIcon || $(this).html() == oIcon) {
				//Pops an alert if players try to overwrite each other's moves.  Needs to be first so the second condition does not get evaluated
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

	//Checks each row, column, and diagonal for matching values.  Loops through the array so I only had to use 8 statements instead of 16
	function checkWinner()  {
		var tester = ['oClass','xClass'];
		var victoryConfirm = 0;
		var winner = 0;

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
			//After victoryConfirm is assigned a 1, the program stops evaluating the rows/columns/diags and tests whether P1 or P2 won.
			if (tester[i] == 'oClass' && victoryConfirm == 1)  {
				victoryConfirm = 0;
				alert("Player 2 wins");
				p2wins++;
				clearBoard();
				
			}
			else if (tester[i] == 'xClass' && victoryConfirm == 1) {
				victoryConfirm = 0;
				alert("Player 1 wins");
				p1wins++;
				clearBoard();
				

			}
			$('#winCounterText').text(p1wins + " - " + p2wins);
		}
	}

	function clearBoard()  {
		$('td').removeClass('xClass');
		$('td').removeClass('oClass');
		$('td').html('<div></div>');
	} 
});


