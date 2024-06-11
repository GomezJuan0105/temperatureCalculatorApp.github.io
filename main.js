const inputTemperature = document.getElementById("temperature");

const celciusAFarenheit = (grados = undefined, unidad=undefined) => {
    if(grados === undefined) return console.log("No has definido los grados a convertir");
    if(typeof grados !== "number") return console.log(`El valor "${grados}" ingresado, NO es un número.`);
    if(unidad === undefined) return console.log("No has definido la unidad");
    if(typeof unidad !== "string") return console.log(`El valor "${unidad}" ingresado, NO es una unidad.`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.log(`Valor de unidad no reconocido.`);

    if(unidad === "C"){
        return console.log(`${grados}ºC son iguales a: ${Math.round(grados * (9/5) + 32)}ºF `);
    } else if (unidad === "F"){
        return console.log(`${grados}ºF son iguales a: ${Math.round((grados - 32) * (5/9))}ºC `);
    } else {
        console.log("El tipo de grados a convertir no es válido");
    }
}