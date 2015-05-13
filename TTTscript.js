// X icon - <i class="fa fa-times fa-5x></i>"
// O icon - <i class="fa fa-circle-o fa-5x"></i>
var xIcon = '<i class="fa fa-times fa-5x"></i>';
var oIcon = '<iclass="fa fa-circle-o fa-5x"></i>';
$(document).ready(function() {

	
	$('td').click(function(event)  {
		if ($(this).html() == xIcon || $('#alphaBlock').html() == oIcon) {
			console.log($(this).val());

			alert("Nope");
		}
		else {
			$(this).html(xIcon);
		}


	})


});