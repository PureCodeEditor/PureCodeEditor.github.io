var alert = function(m){
	$("div.alertify-alert").remove();
	$("body").append("\
		<div class='alertify-alert'>" + m + "<button onclick='$('div.alertify-alert').remove()' class='alertify-close'>OK</button>")
}