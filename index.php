<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="assets/css/style.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<meta property="og:locale" content="fr_FR" />
    <meta property="og:type" content="website" />
    <html lang="fr">
    <meta property="og:locale" content="fr_FR" />
    <script src="assets/js/map.js"></script>
</head>

<body onload="logCheck();">
	<header id="header">
		<i class="fas fa-bars"></i> <!-- media queries, petit écran only -->
		<div id="menu-responsive" class="hidden">
			<div id="logged-responsive" class="hidden">
				Connecté en tant que : <br /><span id="responsive-username"></span>
			</div>
			<div class="responsive-level" id="responsive-login">
				<i class="fas fa-sign-in-alt"></i>
				<button type="button" class="responsive-button fonctionConnexion">Connexion</button>
			</div>
			<div class="responsive-level" id="responsive-newAccount">
				<i class="fas fa-plus"></i>
				<button type="button" class="responsive-button fonctionInscription">Créer un compte</button>
			</div>
			<div class="responsive-level hidden" id="responsive-deconnexion">
				<i class="fas fa-times"></i>
				<button type="button" class="bouton-deconnexion responsive-button fonctionDeconnexion">Deconnexion</button>
			</div>
		</div>
		</div>
		<div id="logoHeader"><a href="http://localhost/projet5/index.php">Accueil</a></div>
		<div id="logoPrincipal"><a href="http://localhost/projet5/index.php">Logo principal</a></div>
		<nav>
			<div id="login" class="displayed">
				<button type="button" class="clicConnexion fonctionConnexion">Connexion</button>
			</div>
			<div id="logged" class="hidden">
				<span id="headerIdentifiant"></span>
				<button type="button" class="bouton-deconnexion deconnexion fonctionDeconnexion">Deconnexion</button>
			</div>
			<button type="button" class="inscription fonctionInscription">Créer un compte</button>
		</nav>
		<div id="flash-box" class="hidden">
			<span id="flash-box-message"></span>
		</div>
		<div id="pop-up-background" class="hidden"></div>
	</header>

	<div id="blocSite">
		<div id="pop-up-background-login" class="hidden">
			<span id="flash-message-login" class="hidden"></span>
			<div id="pop-up-login">
				<form action="http://localhost/apiprojet5/index.php?action=login" method="post" id="loginForm">
					<input type="text" name="identifiant" id="identifiant" placeholder="Identifiant" required="required" class="inputlogin">
					<input type="password" name="password" id="password" placeholder="Mot de passe" required="required"class="inputlogin">
					<button type="button" id="bouton-connexion" class="elementForm boutonEnvoyer">Connexion</button>
				</form>
			</div>
		</div>

		<div id="pop-up-background-inscription" class="hidden">
			<span id="flash-message-inscription" class="hidden"></span>
			<div id="pop-up-inscription">
				<form action="http://localhost/apiprojet5/index.php?action=createAccount" method="post" id="inscriptionForm">
					<input type="text" name="identifiant" placeholder="Identifiant" id="newID" required="required" class="inputInscription">
					<input type="password" name="password" placeholder="Mot de passe" id="newPW" required="required" class="inputInscription">
					<input type="password" name="password2" placeholder="Vérification mot de passe" id="newPW2" required="required" class="inputInscription">
					<input type="email" name="email" placeholder="E-mail" required="required" id="newEmail" class="inputInscription">
					<button type="button" id="bouton-inscription">Créer le compte</button>
				</form>
			</div>
		</div>

		<div id="map-canvas"></div>
		<div id="fenetre-info"></div>
	</div>

	<div id="bar-name">
		Sélectionnez un bar.
	</div>


	<div id="bloc-bar-infos" class="hidden">

		<div id="bar-infos">
			<div><i class="fas fa-map-pin"></i> Adresse : <span id="bar-adress">Adresse du bar</span>.</div>
			<div><i class="far fa-heart" id="iconeCoeur"></i></i> : <span id="bar-likes">Nombre de likes.</span></div>
		</div>

		<div id="bar-phone">
			<i class="fas fa-phone"></i> : <span id="phone"></span>
		</div>

		<div id="bar-horaires">
			<i class="far fa-clock"></i> : <br />
			Lundi : <span id="bar-lundi"></span> <br />
			Mardi : <span id="bar-mardi"></span> <br />
			Mercredi : <span id="bar-mercredi"></span> <br />
			Jeudi : <span id="bar-jeudi"></span> <br />
			Vendredi : <span id="bar-vendredi"></span> <br />
			Samedi : <span id="bar-samedi"></span><br />
			Dimanche : <span id="bar-dimanche"></span>
		</div>

		<div id="bar-commentaires">
			<h2>Commentaires</h2>
			<div id="commentaires">
			</div>
		</div>
		
		<div id="fenetre-commentaire" class="hidden">
			<textarea name="commentaire" id="commentaire" required="required"></textarea>
			<button type="button" id="envoyer-commentaire" class="boutonEnvoyer">Envoyer Commentaire</button>
		</div>

</div>


<!--<script src="https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js"></script>-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeIAygyVPkyXzqDKqEMHhUI_GDbq1N5hc&callback=initMap"></script>
<script src="assets/js/click.js"></script>
<script src="assets/js/login.js"></script>
<script src="assets/js/comments.js"></script>
<script src="assets/js/account.js"></script>

</body>
</html>