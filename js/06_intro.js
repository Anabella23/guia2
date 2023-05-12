let edad = parseInt(prompt("Ingrese la edad del empleado"));
let sueldo = parseInt(prompt("Ingrese el sueldo del empleado"));

if ( sueldo < 20000 && sueldo > 1 ) {
    aporte = sueldo*0.7/100
} else if (sueldo >= 20000 && sueldo <= 29999) {
    aporte= sueldo * 1.4/100;
} else if (sueldo >= 30000 && sueldo <= 39999) {
    aporte = sueldo * 2.1/100;
} else if (sueldo >= 40000) {
    aporte = sueldo * 2.8/100;

} else {
    console.loge("Introduce un sueldo válido");
}

 if (edad <= 30) {
    aporte = aporte + (aporte * 30/100);
}  

console.log(`El aporte del trabajador es ${aporte}`)



