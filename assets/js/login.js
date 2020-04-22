$('#bouton-connexion').on('click', function() {
	login();
});

function login() {
	let identifiant = document.getElementById("identifiant").value;
	let password = document.getElementById("password").value;

	if (identifiant == "" || password == "") {
		alert('Veuillez remplir les champs libres.');
	} else {
		$.ajax({
			url: 'http://localhost/apiprojet5/index.php?action=login',
			method: 'POST',
			data: {
				identifiant: identifiant,
				password: password
			},
			success: function (reponse) {
				var data = JSON.parse(reponse);
				console.log(data.token);
				if (data.message == "user inexistant" || data.message == "mot de passe incorrect") {
					$('#flash-message-login').text("Utilisateur ou mot de passe incorrect")
					$('#flash-message-login').removeClass('hidden');
				} else {
					localStorage.setItem('utilisateur', identifiant);
					localStorage.setItem('token', data.token);
					$('#headerIdentifiant').text(localStorage.utilisateur);
					$('#responsive-username').text(localStorage.utilisateur);
					$('#login').removeClass();
					$('#login').addClass('hidden');
					$('#logged-responsive').removeClass();
					$('#responsive-login').addClass('hidden');
					$('#responsive-newAccount').addClass('hidden');
					$('#responsive-deconnexion').removeClass('hidden');
					$('#logged').removeClass();
					$('.inscription').addClass('hidden');
					$('#flash-message-login').addClass('hidden');
					$('#pop-up-background-login').addClass('hidden');
					$('#pop-up-background').addClass('hidden');
					$('#flash-message-login').addClass('hidden');
					$('#flash-box-message').text("Connecté en tant que : " + localStorage.utilisateur);
					$('#flash-box').removeClass();
					setTimeout(fade_out, 7000);
						function fade_out(){
						$('#flash-box').addClass('hidden');
					}
					$('#fenetre-commentaire').removeClass('hidden');
				}
			},
		});
	};
}

function logCheck() {
	if (localStorage.utilisateur != undefined) {
		$('#headerIdentifiant').text(localStorage.utilisateur);
		$('#login').removeClass();
		$('#login').addClass('hidden');
		$('#logged').removeClass();
		$('#fenetre-commentaire').removeClass();
		$('#responsive-username').text(localStorage.utilisateur);
		$('#responsive-login').addClass('hidden');
		$('#responsive-newAccount').addClass('hidden');
		$('.inscription').addClass('hidden');
	}
}


$('.fonctionDeconnexion').on('click', function() {
	deconnexion();
});

function deconnexion() {
	localStorage.clear();
	$('#logged').addClass('hidden');
	$('#login').removeClass();
	$('#flash-box-message').text("Déconnecté")
	$('#flash-box').removeClass();
	$('.inscription').removeClass('hidden');
	$('#responsive-login').removeClass('hidden');
	$('#responsive-newAccount').removeClass('hidden');
	$('#responsive-deconnexion').addClass('hidden');
	$('#logged-responsive').addClass('hidden');
	setTimeout(fade_out, 7000);
		function fade_out(){
		$('#flash-box').addClass('hidden');
	}
	$('#fenetre-commentaire').addClass('hidden');
}
