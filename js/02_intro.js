let cantidadInscriptos = parseInt(prompt("Cuantos inscriptos hay"));
let cantidadAsientos = parseInt(prompt("Cuántos asientos hay disponibles"));

if (cantidadInscriptos <= cantidadAsientos) {
    console.log("Alcanzan los asientos");
} else {

  console.log(`No alcanzan los asientos faltan ${cantidadInscriptos - cantidadAsientos} asientos` );
}


console.log("Chau, gracias...!!!"); 