$('#envoyer-commentaire').on('click',function(){
	envoyerCommentaire();
});

function envoyerCommentaire() {
	let commentaire = document.getElementById('commentaire').value;
	if (commentaire == "") {
		$('#flash-box-message').text("Veuillez écrire votre commentaire.")
		$('#flash-box').removeClass();
		setTimeout(fade_out, 7000);
			function fade_out(){
			$('#flash-box').addClass('hidden');
		}
	} else {
	 	let barId = sessionStorage.getItem('barId');
		$.ajax({
			url: 'http://localhost/apiprojet5/index.php?action=sendComment&token='+localStorage.getItem('token'),
			method : 'POST',
			data: {
				commentaire : commentaire,
				identifiant : localStorage.getItem('utilisateur'),
				barId       : barId
			},
			success: function (reponse) {
				$('#flash-box-message').text("Commentaire envoyé");
				$('#flash-box').removeClass();
				setTimeout(fade_out, 7000);
					function fade_out(){
						$('#flash-box').addClass('hidden');
					}
				$('#fenetre-commentaire').removeClass('hidden');
			},
		})
	}
}