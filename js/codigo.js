function guardar() {
	let correo=document.getElementById('email');
	let pass=document.getElementById('pass');
	object1=database.getusuarios();
	for(let element in object1) {
		if (element[1]==correo &&element[3]==pass) {
			window.location.href="./html/home.html";
			console.log("ingreso");
			break;
		} else {
			console.log("no ingreso");
			console.log(element);
		}
	}
}

function trasladar(num) {
	localStorage.setItem("num",num);
	//console.log(localStorage.getItem("num"));
}

function trasladart(num) {
	localStorage.setItem("num",num);
	//console.log(localStorage.getItem("num"));
}