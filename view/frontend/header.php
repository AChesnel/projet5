<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="assets/css/style.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<meta property="og:locale" content="fr_FR" />
    <meta property="og:type" content="website" />
    <html lang="fr">
    <meta property="og:locale" content="fr_FR" />
	<script>
		navigator.geolocation.watchPosition(showPosition);
		function showPosition(position) {
			console.log(position);
			let lat = position.coords.latitude;
		sessionStorage.setItem("latitude", lat);
		sessionStorage.setItem("longitude", position.coords.longitude);
		}

	</script>
</head>

<body>
	<header id="header">
		<div id="logoHeader"><a href="http://localhost/projet5/index.php">Accueil</a></div>
		<div id="logoPrincipal"><a href="http://localhost/projet5/index.php">Logo principal</a></div>
		<nav>
			<div id="login">
				<form action="index.php?action=login" method="post">
					<input type="text" name="identifiant" id="identifiant" placeholder="Identifiant" required="required">
					<input type="password" name="password" id="password" placeholder="Mot de passe" required="required">
					<input type="submit" class="elementForm boutonEnvoyer">
				</form>
			</div>
		</nav>
	</header>