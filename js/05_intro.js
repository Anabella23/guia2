let edadMin = 1;
let edadMax = 120;
let edad = parseInt(prompt(`¿Su edad? Entre ${edadMin} y ${edadMax}`));

if (edad >= edadMin && edad <= edadMax) {
    
  let genero = prompt(`¿Tu género? M o F`);
  if (genero === "M" || genero=== "F" || genero=== "m" || genero=== "f") {
    if (edad>=65 || edad>=60 && genero==="f"|| genero==="F") {
        console.log(`Se jubila`);
    } else {
        console.log(`No se jubila`);
    }
  } else {
    console.log(`Genero inválido`);
  }

} else {
    console.log(`Edad inválida`);
}

