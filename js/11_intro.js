let romano = text.toUpperCase(prompt("Ingrese un dígito del sistema de numeración romano"));

switch (romano) {
    case "I":
        console.log("1");
        break;
    case "V":
        console.log("5");
        break;
    case "X":
        console.log("10");
        break;
    case "L":
        console.log("50");
        break;
    case "C" :
        console.log("100");
        break;
    case "D":
        console.log("500");
        break;
    case "M":
        console.log("1000");
        break;        

    default:
        console.log("El dígito ingresado no es válido");
        break;
}

