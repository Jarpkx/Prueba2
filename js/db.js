function local2json(name){
  // asignamos un valor o recuperamos datos almacenados
  let DB = (localStorage.getItem(name))?JSON.parse(localStorage.getItem(name)):{
  "usuarios":[{
    "id":"1",
    "correo":"jruiz@algo.com",
    "imagen":"../img/mujer1.jpg",
    "contraseña":"1234",
    "nombre":"juana",
    "apellido":"ruiz"
  },
  {
    "id":"2",
    "correo":"jcruz@algo.com",
    "imagen":"../img/mujer2.jpg",
    "contraseña":"1234",
    "nombre":"jhonana",
    "apellido":"cruz"
    
  },{
    "id":"3",
    "correo":"vivit@algo.com",
    "imagen":"../img/mujer3.jpg",
    "contraseña":"1234",
    "nombre":"viviana",
    "apellido":"torres"
  }],
  "productos":[{
    "id":"0",
    "vendedor":"2",
    "tipo":"1",
    "estado":"0",
    "imagen":"../img/perlas.jpg",
    "nombre":"perlas",
    "precio":"100000",
    "cantidad":"2",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]

  },{
    "id":"5",
    "vendedor":"2",
    "tipo":"1",
    "estado":"0",
    "imagen":"../img/perlas.jpg",
    "nombre":"pendientes",
    "precio":"100000",
    "cantidad":"2",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]

  },{
    "id":"4",
    "vendedor":"2",
    "tipo":"1",
    "estado":"0",
    "imagen":"../img/perlas.jpg",
    "nombre":"collar",
    "precio":"100000",
    "cantidad":"2",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]

  },{
    "id":"1",
    "vendedor":"1",
    "tipo":"3",
    "estado":"1",
    "imagen":"../img/jean.jpg",
    "nombre":"jeans",
    "precio":"100000",
    "cantidad":"2",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]
  },{
    "id":"2",
    "vendedor":"2",
    "tipo":"2",
    "estado":"1",
    "imagen":"../img/camisa.jpg",
    "nombre":"camisa",
    "precio":"100000",
    "cantidad":"1",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]
  },{
    "id":"3",
    "vendedor":"3",
    "tipo":"4",
    "estado":"0",
    "imagen":"../img/tacones.jpg",
    "nombre":"tacones",
    "precio":"100000",
    "cantidad":"1",
    "comentarios":[{
      "nombre":"juana ruiz",
      "comentario":"bueno para mi"
    }]
  }]
};

  /* metodos */
  return{
    // obtener todos los datos de la coleccion
    get : ()=>{
      return DB;
    },
    //obtener usuarios
    getusuarios :()=>{
      return DB.usuarios;
    },
    //obtener productos
    getproductos :()=>{
      return DB.productos;
    },
    // ingresar nuevos datos
    push  : (obj)=>{
      DB.push(obj);
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // ingresar una nueva coleccion
    set : (colection)=>{
      DB = colection;
      localStorage.setItem(name,JSON.stringify(DB));
    },
    // eliminar todos los datos de la coleccion
    delete  : ()=>{
      DB = [];
      localStorage.setItem(name,JSON.stringify(DB));
    },
    
  }
}