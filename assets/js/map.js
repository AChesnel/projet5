var apiURL = 'http://localhost/apiprojet5/index.php?action=';

function initMap() {
	var location = {lat: 48.85750, lng: 2.347592};
	var map = new google.maps.Map(document.getElementById("map-canvas"), {
		zoom: 12,
		center: location,
		streetViewControl: false,
		mapTypeControl: false,
		});

	 $.get(apiURL + "getBars").done(function(data) {
		let mydata = $.parseJSON(data);

	  for(var i = 0; i < mydata.length; i++) {

	  	var obj = mydata[i];

		console.log(obj);

	  	var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(obj.positionLat,obj.positionLon),
	      map: map,
	      id: obj.id,
	      adress: obj.adress,
	      name: obj.name,
	      phone: obj.phone,
	      lundi: obj.schedule_monday,
	      mardi: obj.schedule_tuesday,
	      mercredi: obj.schedule_wednesday,
	      jeudi: obj.schedule_thursday,
	      vendredi: obj.schedule_friday,
	      samedi: obj.schedule_saturday,
	      dimanche: obj.schedule_sunday,
	      likes: obj.nblikes,
	      comments: obj.comments
	    });
	    google.maps.event.addListener(marker, 'click', function() {
	    	bar = Object.create(InfoBar);
	    	bar.init(this.id);
	    	sessionStorage.setItem('barId', this.id);
	    	majFenetre(this.name, this.adress, this.phone, this.lundi, this.mardi, this.mercredi, this.jeudi, this.vendredi, this.samedi, this.dimanche, this.likes, this.comments);
	    	didUserLikedBar();
	    });
	  };
	  /*	var mcOptions = {
			imagePath : 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
			maxZoom	: 15, 
			gridSize: 110, 	
			};

		var markerCluster = new MarkerClusterer(map, marker, mcOptions);*/
	});
	if (sessionStorage.getItem('latitude') != null) {
		 var userMarker = new google.maps.Marker({
		 	position: {lat: Number(sessionStorage.getItem('latitude')),lng: Number(sessionStorage.getItem('longitude'))},
		 	map: map,
		 	id: 3000
		 });
	}
}