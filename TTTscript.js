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
				//I add the class to the table cell
				$(this).html(xIcon);
				$(this).addClass('xClass'); 
				turnCounter++;
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
			}
		}

		checkWinner();
	})

	function checkWinner()  {
		console.log($('#alpha').hasClass('oClass'));
		if (($('#alpha').hasClass('oClass') == $('#bravo').hasClass('oClass')) && ($('#bravo').hasClass('oClass') == $('#charlie').hasClass('oClass')))  {
			console.log($('#bravo').hasClass('oClass'));
			console.log($('#charlie').hasClass('oClass'));
		}
		else {
			console.log("Boo");
		}
		}
	

});

