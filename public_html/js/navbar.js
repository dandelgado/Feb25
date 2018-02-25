window.onclick = function(event) {
	if (event.target == document.getElementById('overlay-login') 
		|| event.target == document.getElementById('overlay-signup')) {
        event.target.style.display = "none";
    }
}

function log_in() {
	$('#overlay-login').css('display', 'block');
}

function sign_up() {
	$('#overlay-signup').css('display', 'block');
}