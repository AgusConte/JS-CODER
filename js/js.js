

	let contador;
    let acumulador;
    let promedio;
    let numero;
    let banderaDelPrimero;
	let numeroMaximo;
	let numeroMinimo;
    let cantidad;



    contador=0;
    acumulador=0;
    banderaDelPrimero = true;
	numeroMaximo = -Infinity;
	numeroMinimo = Infinity;

    cantidad = parseInt(prompt("Cuantas Notas Quieres Promediar?"))

    for(let i = 0;   i < cantidad;  i++){
    numero = parseInt(prompt("Coloca el numero a calcular"));
        while(isNaN(numero)){
            numero = parseInt(prompt("ERROR : ingresa un numero"));
            }
        acumulador = acumulador + numero;
        contador = contador + 1;

        if(banderaDelPrimero == true){
            numeroMaximo = numero;
            numeroMinimo = numero;
            banderaDelPrimero = false;
        }

        else if( numero > numeroMaximo){
            numeroMaximo = numero;
        }

        else if( numero < numeroMinimo ){
            numeroMinimo= numero;
        }
        respuesta = prompt("Desea continuar? (coloque Si)");
        }

    promedio = acumulador / contador;


    console.log("La suma total es "+acumulador);
    console.log("El promedio es "+promedio);
    console.log("El numero maximo es "+numeroMaximo);
    console.log("El numero minimo es "+numeroMinimo);
    