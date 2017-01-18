function initMap() {
	panorama = new google.maps.StreetViewPanorama(
		document.getElementById('streetview'), {
		pano: 'Puuur World',
		visible: true,
		panoProvider: getPanorama
	});
}

function getPanorama(pano, zoom, tileX, tileY) {
	return {
		location: {
			pano: 'Puuur World',
			description: 'Puuur-world'
		},
		links: [],
		copyright: "<a href='http://placekitten.com/attribution.html'>PlaceKitten</a>",
		tiles: {
			tileSize: new google.maps.Size(256, 256),
			worldSize: new google.maps.Size(2048,1024),
			centerHeading: 0,
			getTileUrl: getPanoramaTileUrl
		}
	};
}

function getPanoramaTileUrl(pano, zoom, tileX, tileY) {
	var i = Math.ceil( Math.random() * 10 );
	return "http://placekitten.com/256/256?image=" + i;
}
