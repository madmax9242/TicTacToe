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
				//I add the class to the table cell so I can use it to compare in the checkWinner function
				$(this).html(xIcon);
				$(this).addClass('xClass'); 
				turnCounter++;
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
				turnCounter++;
				checkWinner();
			}
		}

		//checkWinner();
	})

	function checkWinner()  {
		var tester = ['oClass','xClass'];
		for (var i = 0; i > tester.length; i++)  {


			if ($('#alpha').hasClass(tester[i]) == true && $('#bravo').hasClass(tester[i]) == true && ($('#charlie').hasClass(tester[i]) == true))  {
				console.log("Row 1 wins");
			}
			else if ($('#delta').hasClass('oClass') == true && $('#epsilon').hasClass('oClass') == true && ($('#foxtrot').hasClass('oClass') == true)) {
				console.log("Row 2 wins")
			}
			else if ($('#golf').hasClass('oClass') == true && $('#hotel').hasClass('oClass') == true && ($('#indigo').hasClass('oClass') == true)) {
				console.log("Row 3 wins")
			}
		}
	}
	

});

