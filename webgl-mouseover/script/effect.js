var camera, scene, renderer, composer,renderPass;
var geometry, material, mesh, texture = new THREE.Vector2(0,0);
var img = document.getElementById('texture');

var dummyimg = document.createElement("img");

dummyimg.onload = function(){
	img.style.opacity = 0;
	texture = new THREE.Texture( this );
	texture.needsUpdate = true;

	init();
	animate();
}

dummyimg.src = img.src;

function init() {
	console.log( texture );
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 0.5;

	scene = new THREE.Scene();

	geometry = new THREE.PlaneBufferGeometry( 0.45, 0.3 );
	material = new THREE.MeshBasicMaterial({
		side: THREE.DoubleSide,
		map: texture
	});

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true }) ;
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;
	document.body.appendChild( renderer.domElement );
}

function animate() {
	requestAnimationFrame( animate );
	mesh.rotation.y += 0.01;
	mesh.rotation.x += 0.01;
	renderer.render( scene, camera );
}