let a = parseInt(prompt("Escriba valor del primer lado"));
let b = parseInt(prompt("Escriba valor del segundo lado"));
let c = parseInt(prompt("Escriba valor del tercer lado"));

if (a + b > c || a + c > b || b + c > a) {
    console.log(`El triángulo es válido`);
    if (a === b && a === c) {
        console.log(`El triángulo es EQUILÁTERO`);
    } else if (a != b && a != c) {
        console.log(`El triángulo es ESCALENO`);
    } else {
        console.log(`El triángulo es ISÓSELES`);
    } {
        
    }
} else {
    console.log(`El triángulo NO es válido`);
}


