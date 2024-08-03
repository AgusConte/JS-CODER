let acumulador;
let promedio;
let numero;
let cantidadAlumnos;
let cantidadNotas;
let respuesta;

const alumnos = [];


cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos son?"));
while (isNaN(cantidadAlumnos) || cantidadAlumnos <= 0) {
    cantidadAlumnos = parseInt(prompt("ERROR: Ingresa un número válido para la cantidad de alumnos"));
}


for (let i = 0; i < cantidadAlumnos; i++) {
    
    let nombre = prompt(`Introduce el nombre del alumno ${i + 1}:`);
    while (!isNaN(nombre)){
        nombre = prompt("ERROR: Ingresa Texto");
    }
    
    acumulador = 0;
    contador = 0;
    respuesta = "si";

    cantidadNotas = parseInt(prompt(`¿Cuántas notas quieres promediar para el alumno ${nombre}?`));
    while (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        cantidadNotas = parseInt(prompt("ERROR: Ingresa un número válido para la cantidad de notas"));
    }

    
    for (let i=0; i < cantidadNotas; i++ ) {
        numero = parseInt(prompt(`Número ${i + 1} a calcular`));
        while (isNaN(numero)) {
            numero = parseInt(prompt("ERROR: Ingresa un número válido"));
        }
        acumulador += numero;
        contador++;
        
    }

    
    promedio = acumulador / contador;

    
    alumnos.push({
        nombre: nombre,
        notapromedio: promedio
    });
}


console.log("Datos de los alumnos:");
alumnos.forEach(alumno => {
    console.log(`Nombre: ${alumno.nombre} -- Promedio: ${alumno.notapromedio}`);
});
