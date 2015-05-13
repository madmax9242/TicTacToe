// X icon - <i class="fa fa-times fa-5x></i>"
// O icon - <i class="fa fa-circle-o fa-5x"></i>
var xIcon = '<span><i class="fa fa-times fa-5x"></i></span>';
var oIcon = '<p><i class="fa fa-circle-o fa-5x"></i></p>';
var turnCounter = 0;
$(document).ready(function() {
	
	$('td').click(function(event)  {
		if (turnCounter % 2 === 0) {
			if ($(this).html() == xIcon || $(this).html() == oIcon) {

				alert("Nice try, cheater.");
			}

			else {
				$(this).html(xIcon);
				turnCounter++;
			}
		}

		else if (turnCounter % 2 === 1) {
			if ($(this).html() == xIcon || $(this).html() == oIcon) {

				alert("Nice try, cheater.");
			}

			else {
				$(this).html(oIcon);
				turnCounter++;
			}
		}

		//checkWinner();
	})

	// function checkWinner()  {
	// 	if ($('#alpha').is('p')) {
	// 		console.log("STuff");
	// 	}
	// 	else {
	// 		console.log($('#bravo'));
	// 	}
	// }

});

