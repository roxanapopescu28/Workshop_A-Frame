

// // changing individual properties with code and using setInterval
var rotationSpeedx = -0.01;
var rotationSpeedy = 0.03;
var rotationSpeedz = 0.1;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeedx;
    myOtherBox.object3D.rotation.y += rotationSpeedy;
    myOtherBox.object3D.rotation.z += rotationSpeedz;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps