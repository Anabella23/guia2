let num1 = parseInt(prompt("Escriba el primer número entero"));
let num2 = parseInt(prompt("Escriba el segundo número entero"));

/*
if (num1 > num2) {
    let cociente1 = num1 / num2
    if (cociente1 === 0) {
        console.log(`${num1} es divisible por ${num2}`);
    } else {
        console.log(`${num1} NO es divisible por ${num2}`);
    }
} else {
    let cociente2 = num2 / num1
    if (cociente2 ===0) {
        console.log(`${num2} es divisible por ${num1}`);
    } else {
        console.log(`${num2} NO es divisible por ${num1}`);
    }

}
*/
if (num1 > num2) {
    
   if (num1 / num2 === 0 ){
    console.log(`${num1} es divisible por ${num2}`);
   }else {
    console.log(`${num1} NO es divisible por ${num2}`);
   }

} else {
    if (num2 / num1 === 0){
        console.log(`${num2} es divisible por ${num1}`);
    }else {
        console.log(`${num2} NO es divisible por ${num1}`);
    }
}
    







