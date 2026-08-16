class Producto {
    constructor(nombre, precio, anio) {
        this.nombre = nombre;
        this.precio = precio;
        this.anio = anio;
    }
}

document.getElementById("agregar").addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const anio = document.getElementById("anio").value;

    if (nombre === "" || precio === "" || anio === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const producto = new Producto(nombre, precio, anio);

    alert(
        "Producto agregado correctamente:\n" +
        producto.nombre + " - Q." + producto.precio
    );

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("anio").value = "2026";
});
