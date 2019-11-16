function parseJson() {
	return JSON.parse("bdjs.json");
}

function guardar() {
	let correo=document.getElementById('email');
	let pass=document.getElementById('pass');
	object1=database.getusuarios();
	for(let element in object1) {
		if (element[1]==correo &&element[3]==pass) {
			setTimeout("location.href=´./html/home.html´", 1000);
			console.log("ingreso");
			break;
		} else {
			console.log("no ingreso");
			console.log(element);
		}
	}
}