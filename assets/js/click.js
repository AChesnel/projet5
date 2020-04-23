var InfoBar = {
	init: function(id){
		this.id = id;
		this.adress ='';
		this.name = '';
		this.phone = '';
		this.lundi = '';
		this.mardi = '';
		this.mercredi = '';
		this.jeudi = '';
		this.vendredi = '';
		this.samedi = '';
		this.dimanche = '';
		this.likes = '';
		this.comments = '';
	}
};

function majFenetre(name, adress, phone, lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche, likes, comments){
	if($('.commentaire-auteur').length > 0) {
		document.getElementById('commentaires').innerHTML = " ";
	}
	document.getElementById('bar-name').innerHTML = name;
	document.getElementById('bar-adress').innerHTML = adress;
	document.getElementById('phone').innerHTML = phone;
	document.getElementById('bar-lundi').innerHTML = lundi;
	document.getElementById('bar-mardi').innerHTML = mardi;
	document.getElementById('bar-mercredi').innerHTML = mercredi;
	document.getElementById('bar-jeudi').innerHTML = jeudi;
	document.getElementById('bar-vendredi').innerHTML = vendredi;
	document.getElementById('bar-samedi').innerHTML = samedi;
	document.getElementById('bar-dimanche').innerHTML = dimanche;
	document.getElementById('bar-likes').innerHTML = likes;
	$('#bloc-bar-infos').removeClass();
	$('#footer').removeClass('footer-absolute');
	comments.forEach(afficherCommentaires);
}

function afficherCommentaires(objet) {
		document.getElementById("commentaires").innerHTML += 
			"<div class='bloc-commentaire'>" +
				"<div class='commentaire-auteur'>" +
					objet.author + " : " +
				"</div>" +
				"<div class='commentaire-contenu'>" +
					objet.comment +
				"</div>" +
			"</div>";
}

function didUserLikedBar() {
	let barId    = sessionStorage.getItem('barId');
	let username = localStorage.getItem('utilisateur');
	if (barId && username != undefined) {
		$.ajax({
			url: 'http://localhost/apiprojet5/index.php?action=barLikedCheck&token='+localStorage.getItem('token'),
			method : 'GET',
			data: {
				barId    : barId,
				username : username
			},
			success: function (reponse) {
				var userid = JSON.parse(reponse);
				if(userid != null) {
					$('#iconeCoeur').removeClass('far');
					$('#iconeCoeur').addClass('fas');
				} else {
					$('#iconeCoeur').removeClass('fas');
					$('#iconeCoeur').addClass('far');
				}
			},
		});
	}
}


$('#iconeCoeur').on('click', function() {
	let barId    = sessionStorage.getItem('barId');
	let username = localStorage.getItem('utilisateur');
	$nombreLike = document.getElementById('bar-likes').innerHTML;
	if (barId && username != undefined) {
		$.ajax({
			url: 'http://localhost/apiprojet5/index.php?action=likeBar&token='+localStorage.getItem('token'),
			method : 'GET',
			data: {
				barId    : barId,
				username : username
			},
			success: function (reponse) {
				var likeResult = JSON.parse(reponse);
				if (likeResult == "A") {
					$('#iconeCoeur').removeClass('far');
					$('#iconeCoeur').addClass('fas');
					$('#flash-box-message').text("Like ajouté");
					$('#flash-box').removeClass();
					setTimeout(fade_out, 7000);
					function fade_out(){
						$('#flash-box').addClass('hidden');
					}
					$nombreLike ++;
					document.getElementById('bar-likes').innerHTML = $nombreLike;
				} else {
					$('#iconeCoeur').removeClass('fas');
					$('#iconeCoeur').addClass('far');
					$('#flash-box-message').text("Like supprimé");
					$('#flash-box').removeClass();
					setTimeout(fade_out, 7000);
					function fade_out(){
						$('#flash-box').addClass('hidden');
					}
					$nombreLike --;
					document.getElementById('bar-likes').innerHTML = $nombreLike;
				}
			}
		})
	}
})

$('#flash-box').on('click', function() {
	$('#flash-box').addClass('hidden')
})

$('.fonctionConnexion').on('click', function(){
	displayLogin();
});

function displayLogin() {
	$('#pop-up-background-login').removeClass('hidden');
	$('#pop-up-background').removeClass('hidden');
}


$('#pop-up-background').on('click', function(){
	removePopUp();
});

function removePopUp() {
	$('#pop-up-background-login').addClass('hidden');
	$('#pop-up-background-inscription').addClass('hidden');
	$('#pop-up-background').addClass('hidden');
	$('#flash-message-login').addClass('hidden');
	$('#flash-message-inscription').addClass('hidden');
}

$('.fa-bars').on('click', function() {
	if($('#menu-responsive').hasClass('hidden') == true ){
		$('#menu-responsive').removeClass('hidden');
	} else {
		$('#menu-responsive').addClass('hidden');
	}
})