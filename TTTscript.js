// X icon - <i class="fa fa-times fa-5x></i>"
// O icon - <i class="fa fa-circle-o fa-5x"></i>
var xIcon = '<i class="fa fa-times fa-5x"></i>';
var oIcon = '<iclass="fa fa-circle-o fa-5x"></i>';
$(document).ready(function() {

	
	$('td').click(function(event)  {
		$(this).append(xIcon);
		console.log(xIcon);

	})


});