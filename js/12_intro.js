let dia = parseInt(prompt("Ingresa el dia"));
// let mes = parseInt(prompt("Ingresa el mes"));

if (dia >= 1 && dia <= 31) {
    let mes = parseInt(prompt("Ingresa el mes"));
    if (mes >=1 && mes <= 12 ) {
        if (dia>=21 && mes===3 && dia<=20 && mes===4) {
            console.log(`Sos de ARIES`);
        } else if(dia<=21 && mes===4 || dia<=21 && mes===5) {
            console.log(`Sos de TAURO`);
        } else if(dia>=22 && mes===5 || dia<=21 && mes===6) { 
            console.log(`Sos de GEMINIS`);
        }else if(dia>=22 && mes===6 || dia<=23 && mes===7) {
            console.log(`Sos de CANCER`);
        }else if(dia>=24 && mes===7 || dia<=23 && mes===8) { 
            console.log(`Sos de LEO`);
        } else if(dia>=24 && dia===8 || dia<=23 && mes===9) {
            console.log(`Sos de VIRGO`);
        } else if(dia>=24 && mes===9 || dia<=23 && mes===10) {
            console.log(`Sos de LIBRA`); 
        } else if(dia>=24 && mes===10 || dia<=22 && mes===11) {
            console.log(`Sos de ESCORPIO`);
        } else if(dia>=23 && mes===11 || dia<=22 && mes===12) {
            console.log(`Sos de SAGITARIO`); 
        } else if(dia>=22 && mes===12 || dia<=20 && mes===1) {
            console.log(`Sos de CAPRICORNIO`);
        } else if(dia>=21 && mes===1 || dia<=19 && mes===2) {
            console.log(`Sos de ACUARIO`);
        } else if(dia>=20 && mes===2 || dia<=20 && mes===3) {
            console.log(`Sos de PISCIS`);
        }
        
    } else {
       console.log(`MES INCORRECTO`); 
    }
} else { 
    console.log(`DIA INCORRECTO`);
    
}


