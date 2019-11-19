var num=localStorage.getItem("num"),
contenedor=document.getElementById("listas");
database.getproductos().forEach(function(element) {
	if(num==element.tipo){
		var n=element.id;
		var li= document.createElement("li");
		li.setAttribute("style", "list-style: none;");
		var a=document.createElement("a");
		a.setAttribute("id", n);
		a.setAttribute("class", "tip");
		a.setAttribute("href", "./infoshop.html");
		a.setAttribute("onclick", "trasladart(id)");
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
		
		
		//var conte=document.createTextNode(element.comentarios);
		contenedor.appendChild(li);
		li.appendChild(a);
		a.appendChild(div);
		div.appendChild(img);
		div.appendChild(div2);
		div2.appendChild(p);
		//p.appendChild(conte);
		document.getElementById('namep').innerHTML=element.nombre;
	}
});

