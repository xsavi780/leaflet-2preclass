var map = L.map('map').setView([40.778997, -73.968973], 14);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

//var marker = L.marker([40.68025, -74.00155]).addTo(map);
//marker.bindPopup("Larry's house").openPopup();

var parksIcon = L.icon({
    iconUrl: 'img/urbanpark.png',
    shadowUrl: 'img/shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});


//Parks

//Central Park
var centralParkMarker = L.marker([40.778997, -73.968973], {icon: parksIcon}).addTo(map);

//Prospect Park
var prospectParkMarker = L.marker([40.661774, -73.971462], {icon: parksIcon}).addTo(map);

//Riverside Park
var riversideParkMarker = L.marker([40.802780, -73.971462], {icon: parksIcon}).addTo(map);




//listeners for marker hovers

centralParkMarker.on('mouseover',function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.centralPark').toggleClass('hover');
	});

prospectParkMarker.on('mouseover',function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.prospectPark').toggleClass('hover');
	});

riversideParkMarker.on('mouseover',function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.riversidePark').toggleClass('hover');
	});


//listener for box hover
$('.park').hover(function(){
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});



//recenter the map on click
$('.centralPark').on('click',function(){
	map.panTo(new L.LatLng(40.778997, -73.968973),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/centralPark.jpg')");
});

$('.riversidePark').on('click',function(){
	map.panTo(new L.LatLng(40.802780, -73.971462),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/riversidePark.jpg')");
});

$('.prospectPark').on('click',function(){
	map.panTo(new L.LatLng(40.661774, -73.971462),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/prospectPark.jpg')");
});

//popup listeners
$('#about').on('click',function(){
	$('#mask').fadeIn(250);
	$('.popup').fadeIn(250);
});

$('.close').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#mask').fadeOut(250);
});

