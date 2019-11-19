let database = new local2json("tienda");
database.getproductos().forEach(function(element) {
	console.log(element.vendedor);
});

//console.log(database.getproductos());
