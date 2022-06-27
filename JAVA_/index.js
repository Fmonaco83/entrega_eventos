class Producto{
    constructor(nombre, descripcion, precio,){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = parseInt(precio);
    }



}
const producto1 = new Producto("dije estrella", "Dije swarovski, color azul", 1500);
const producto2 = new Producto("anillo de flores", "Anillo de plata, Flores", "3000");
const producto3 = new Producto("dije susanito", "Dije circular en pridra blanca", 2300);

let p1 = document.getElementById("p1");
p1.addEventListener('click', function(){alert(`AGREGASTE AL CARRITO ${producto1.nombre}`)})


let p2 = document.getElementById("p2");
p2.addEventListener('click', function(){alert(`AGREGASTE AL CARRITO ${producto2.nombre}`)})

let p3 = document.getElementById("p3");
p3.addEventListener('click', function(){alert(`AGREGASTE AL CARRITO ${producto3.nombre}`)})



