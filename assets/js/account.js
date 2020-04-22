$('.fonctionInscription').on('click', function() {
	displayInscriptionForm();
});
function displayInscriptionForm() {
	$('#pop-up-background-inscription').removeClass('hidden');
	$('#pop-up-background').removeClass('hidden');
}

$('#bouton-inscription').on('click', function() {
	inscription();
});
function inscription() {
	let identifiantInscription = document.getElementById('newID').value;
	let passwordInscription    = document.getElementById('newPW').value;
	let passwordInscription2   = document.getElementById('newPW2').value;
	let emailInscription       = document.getElementById('newEmail').value;

	if (identifiantInscription == "" || passwordInscription == "" || emailInscription == "") {
		alert('Veuillez remplir les champs libres.');
	} else {
		$.ajax({
			url: 'http://localhost/apiprojet5/index.php?action=createAccount',
			method: 'POST',
			data: {
				identifiant: identifiantInscription,
				password   : passwordInscription,
				password2  : passwordInscription2,
				email      : emailInscription
			},
			success: function(reponse) {
				var data = JSON.parse(reponse);
				console.log(reponse);
				removePopUp();
			},
		});
	}
}
