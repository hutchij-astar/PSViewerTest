window.onload = function() {
	document.getElementById('go').addEventListener('click', loadPredefinedPanorama, false);

};

function getMarkers() {
	var a = [];


/* 	for (var i = 0; i < Math.PI * 2; i += Math.PI / 4) {
	  for (var j = -Math.PI / 2 + Math.PI / 4; j < Math.PI / 2; j += Math.PI / 4) {
		a.push({
		  id: '#' + a.length,
		  tooltip: '#' + a.length,
		  latitude: j,
		  longitude: i,
		  image: 'assets/pin1.png',
		  width: 32,
		  height: 32,
		  anchor: 'bottom center',
		  data: {
			deletable: true
		  }
		});
	  }
	} */

/* 	a.push({
	  id: 'lorem',
	  tooltip: {
		content: 'Lorem ipsum dolor ist amet et consecturo.',
		position: 'bottom right'
	  },
	  content: document.getElementById('pin-content').innerHTML,
	  latitude: 0,
	  longitude: 0.20,
	  image: 'assets/pin2.png',
	  width: 32,
	  height: 32,
	  anchor: 'bottom center'
	}); */

/* 	a.push({
	  id: 'polygon-sky',
	  svgStyle: {
		fill: 'rgba(0, 190, 255, 0.1)'
	  },
	  polygon_rad: (function() {
		var points = [];

		for (var i = 0; i < Math.PI * 2; i += Math.PI / 8) {
		  points.push(i);
		  points.push(Math.PI / 8);
		}

		return points;
	  }())
	}); */

	var x = 475;
	var y = 1750;
	var w = 180;
	var h = 40;
	var f=45;
	a.push({
	  id: 'text detection 1',
	  content: document.getElementById('pin-content2').innerHTML,
	  polygon_px: [x, y, x+w, y+f, x+w, y+h+f, x, y+h, x,y],
	  //polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
	  svgStyle: {
		fill: 'rgba(0,255,0,0.3)',
		stroke: 'rgba(0, 255, 50, 0.8)',
		strokeWidth: '2px'
	  },
	  tooltip: {
		content: 'JN6F44',
		position: 'right bottom'
	  }
	});

	x = 510;
	y = 1660;
	w = 130;
	h = 45;
	f=28;
	a.push({
	  id: 'text detection 2',
	  content: 'Herc',
	  polygon_px: [x, y, x+w, y+f, x+w, y+h+f, x, y+h, x,y],
	  //polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
	  svgStyle: {
		fill: 'rgba(255,0,0,0.3)',
		stroke: 'rgba(255, 0, 50, 0.8)',
		strokeWidth: '2px'
	  },
	  tooltip: {
		content: 'This is a mountain',
		position: 'right bottom'
	  }
	});

	x = 570;
	y = 1570;
	w = 145;
	h = 50;
	f = 25;
	a.push({
	  id: 'text detection 3',
	  content: '85G',
	  polygon_px: [x, y, x+w, y+f, x+w, y+h+f, x, y+h, x,y],
	  //polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
	  svgStyle: {
		fill: 'rgba(255,0,0,0.3)',
		stroke: 'rgba(255, 0, 50, 0.8)',
		strokeWidth: '2px'
	  },
	  tooltip: {
		content: 'This is a mountain',
		position: 'right bottom'
	  }
	});

/* 	a.push({
	  id: 'polyline',
	  polyline_rad: [5.924, 0.064, 5.859, -0.061, 5.710, -0.132, 5.410, -0.287, 4.329, -0.490, 3.838, -0.370, 3.725, -0.241],
	  svgStyle: {
		stroke: 'rgba(80, 100, 50, 0.8)',
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		strokeWidth: '10px'
	  },
	  tooltip: 'This is a track'
	}); */

/* 	a.push({
	  id: 'html-img-demo',
	  html: 'HTML & Image',
	  scale: [0.5, 1.5],
	  className: 'demo-label',
	  longitude: 0.5,
	  latitude: -0.48
	}); */

	//you can have an animated GIF
/* 	a.push({
	  id: 'gif',
	  image: 'assets/photosphere-logo.gif',
	  width: 100,
	  height: 100,
	  longitude: 0.60,
	  latitude: -0.35
	}); */

/* 	a.push({
	  id: 'text',
	  html: 'This <b>is</b> text <img src="assets/pin3.png" style="height: 24px; vertical-align: top;"/>',
	  anchor: 'bottom right',
	  style: {
		color: 'white',
		fontSize: '20px',
		fontFamily: 'Helvetica, sans-serif',
		textAlign: 'center'
	  },
	  longitude: 0.45,
	  latitude: -0.4
	}); */

/* 	a.push({
	  id: 'svg-demo',
	  html: 'SVG marker demo',
	  scale: [0.5, 1.5],
	  className: 'demo-label',
	  longitude: -0.5,
	  latitude: -0.48
	});

	a.push({
	  id: 'circle',
	  tooltip: 'A circle of radius 30',
	  circle: 30,
	  svgStyle: {
		fill: 'rgba(255,255,0,0.3)',
		stroke: 'yellow',
		strokeWidth: '2px'
	  },
	  longitude: -0.5,
	  latitude: -0.28,
	  anchor: 'center right'
	});

	a.push({
	  id: 'ellipse',
	  tooltip: 'An ellipse of radius 60/30',
	  ellipse: [60, 30],
	  svgStyle: {
		fill: 'rgba(255,255,0,0.3)',
		stroke: 'yellow',
		strokeWidth: '2px'
	  },
	  longitude: -0.5,
	  latitude: -0.28,
	  anchor: 'center left'
	});

	a.push({
	  id: 'rect',
	  tooltip: 'A square a side 60',
	  rect: [60, 60],
	  svgStyle: {
		fill: 'rgba(255,255,0,0.3)',
		stroke: 'yellow',
		strokeWidth: '2px'
	  },
	  longitude: -0.5,
	  latitude: -0.38,
	  anchor: 'center right'
	});

	a.push({
	  id: 'path',
	  tooltip: 'A custom path',
	  path: 'M 0 0 L 60 60 L 60 0 L 0 60 L 0 0',
	  svgStyle: {
		fill: 'rgba(255,255,0,0.3)',
		stroke: 'yellow',
		strokeWidth: '2px'
	  },
	  longitude: -0.5,
	  latitude: -0.38,
	  anchor: 'center left'
	});

	a.push({
	  id: 'scale-demo',
	  html: 'Marker scale demo',
	  scale: [0.5, 1.5],
	  className: 'demo-label',
	  longitude: 0,
	  latitude: -0.48
	});

	a.push({
	  id: 'scale-0',
	  tooltip: 'No scale',
	  scale: false,
	  circle: 20,
	  svgStyle: {
		fill: 'rgba(0, 0, 0, 0.5)'
	  },
	  longitude: -0.1,
	  latitude: -0.4
	});

	a.push({
	  id: 'scale-1',
	  tooltip: '<code>zoom x2</code>',
	  scale: 2,
	  circle: 20,
	  svgStyle: {
		fill: 'rgba(0, 0, 0, 0.5)'
	  },
	  longitude: 0,
	  latitude: -0.4
	});

	a.push({
	  id: 'scale-2',
	  tooltip: '<code>zoom x0.5 ; zoom x1.5</code>',
	  scale: [0.5, 1.5],
	  circle: 20,
	  svgStyle: {
		fill: 'rgba(0, 0, 0, 0.5)'
	  },
	  longitude: 0.1,
	  latitude: -0.4
	}); */

	return a;
  }
// Load the predefined panorama
function loadPredefinedPanorama(evt) {
	evt.preventDefault();

	// Loader
	var loader = document.createElement('div');
	loader.className = 'loader';

	// Panorama display
	var div = document.getElementById('container');
	div.style.height = '500px';
	div.style.width = '100%';

	PSV = new PhotoSphereViewer({
		// Path to the panorama
		panorama: 'https://s3.amazonaws.com/a-star.io.c1044160-8f74-11e8-a719-19bfb3b4cca6/R0010499.JPG',

		// Container
		container: div,

		// Deactivate the animation
		time_anim: false,

		// Display the navigation bar
		navbar: true,

		// Resize the panorama
		size: {
			width: '80%',
			height: '1000px'
		},

		// HTML loader
		loading_html: loader,

		// Disable smooth moves to test faster
		smooth_user_moves: false, 

		markers: getMarkers()
	})

	PSV.on('click', function(e) {
		PSV.addMarker({
		  id: '#' + Math.random(),
		  tooltip: 'Generated marker',
		  longitude: e.longitude,
		  latitude: e.latitude,
		  image: 'assets/pin1.png',
		  width: 32,
		  height: 32,
		  anchor: 'bottom center',
		  data: {
			deletable: true
		  }
		});
	  });
	
	  PSV.on('select-marker', function(marker, dblclick) {
		if (marker.data && marker.data.deletable) {
		  if (dblclick) {
			PSV.removeMarker(marker);
		  }
		  else {
			PSV.updateMarker({
			  id: marker.id,
			  image: 'assets/pin2.png'
			});
		  }
		}
	  });
	
	  PSV.on('over-marker', function(marker) {
		console.log('over', marker.id);
	  });
	
	  PSV.on('leave-marker', function(marker) {
		console.log('leave', marker.id);
	  });
	
	  PSV.on('select-marker-list', function(marker) {
		console.log('select-list', marker.id);
	  });
	
	  PSV.on('goto-marker-done', function(marker) {
		console.log('goto-done', marker.id);
	  });
}

// Load a panorama stored on the user's computer
function upload() {
	// Retrieve the chosen file and create the FileReader object
	var file = document.getElementById('pano').files[0];
	var reader = new FileReader();

	console.log('test.js upload')

	reader.onload = function() {

		PSV = new PhotoSphereViewer({
			// Panorama, given in base 64
			panorama: reader.result,

			// Container
			container: 'your-pano',

			// Deactivate the animation
			time_anim: true,

			// Display the navigation bar
			navbar: true,

			// Resize the panorama
			size: {
				width: '100%',
				height: '500px'
			},

			// No XMP data
			//usexmpdata: false, 

			// list of markers
			markers: [
				{
				// polygon marker
				id: 'polygon',
				polygon_px: [
					[3184, 794], [3268, 841], [3367, 1194],
					[3327, 1307], [3065, 1221], [3097, 847]
				],
				svgStyle: {
					fill: 'rgba(200, 0, 0, 0.2)',
					stroke: 'rgba(200, 0, 50, 0.8)',
					strokeWidth: '2px'
				},
				tooltip: {
					content: 'A dynamic polygon marker',
					position: 'right bottom'
				}
				},
				{
				// polyline marker
				id: 'polyline',
				polyline_rad: [
					[5.924, 0.064], [5.859, -0.061], [5.710, -0.132],
					[5.410, -0.287], [4.329, -0.490], [3.838, -0.370], [3.725, -0.241]
				],
				svgStyle: {
					stroke: 'rgba(140, 190, 10, 0.8)',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: '10px'
				},
				tooltip: 'A dynamic polyline marker'
				},
				{
				// circle marker
				id: 'circle',
				circle: 20,
				x: 2600,
				y: 1300,
				tooltip: 'A circle marker'
				}
			]
		});
	};

	reader.readAsDataURL(file);
}

// Yep, an ugly global variable (to make tests with the console)
var PSV;
