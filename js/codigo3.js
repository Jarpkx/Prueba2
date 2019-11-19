var num=localStorage.getItem("num");
contenedor=document.getElementById("new");
database.getproductos().forEach(function(element) {
	if(element.id==num){
		var div=document.createElement("div");
		div.setAttribute("style", "width: auto;");
		div.setAttribute("class", "card");
		var img=document.createElement("img");
		img.setAttribute("class", "card-img-top");
		img.setAttribute("src", element.imagen);
		img.setAttribute("alt", "Card image cap");
		var div2=document.createElement("div");
		div2.setAttribute("class", "card-body");
		var p=document.createElement("p");
		p.setAttribute("class", "card-text");
		p.setAttribute("id", "namep");
		p.setAttribute("class", "card-text");
		var pp=document.createElement("p");
		pp.setAttribute("class", "card-text");
		pp.setAttribute("id", "namep2");
		pp.setAttribute("class", "card-text");
		var ppp=document.createElement("p");
		ppp.setAttribute("class", "card-text");
		ppp.setAttribute("id", "namep3");
		ppp.setAttribute("class", "card-text");
		var aa=document.createElement("a");
		aa.setAttribute("id","mia");

		contenedor.appendChild(div);
		div.appendChild(img);
		div.appendChild(div2);
		div2.appendChild(p);
		div2.appendChild(p);
		div2.appendChild(p);
		div2.appendChild(aa);
		document.getElementById('namep').innerHTML=element.nombre;
		document.getElementById('namep2').innerHTML=element.precio;
		document.getElementById('namep3').innerHTML=cantidad;
		if (element.tipo==0) {
			document.getElementById('mia').innerHTML="compra";
		} else {
			document.getElementById('mia').innerHTML="venta";
		}
		

	}
});