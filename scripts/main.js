/// Uso estricto de JS
'use strict';

// Declaración de variable para botones HTML de digito
const digito = document.getElementsByClassName('digito');

// Ciclo para funciones escuchadoras con eventos de click
// y funcione manejadora de botones de digito
for(let i =0; i < digito.length; i++) {
	digito[i].addEventListener('click', function() {
		let salida = parsearNumero(obtenerSalida());

		if(salida != NaN) {
			salida = salida + this.id;
			mostrarSalida(salida);
		}
	});
}

// Declaración de variable para botones HTML de operacion
let operacion = document.getElementsByClassName('operacion');

// Ciclo para funciones escuchadoras con eventos de click
// y funcion manejadora de botones de operacion
for(let i = 0; i < operacion.length; i++) {
	operacion[i].addEventListener('click', function() {
		if(this.id == 'borrartodo') {
			mostrarHistoria('');
			mostrarSalida('');
		}

		else if(this.id == 'borrardigito') {
			let salida = parsearNumero(obtenerSalida()).toString();
			if(salida) {
				salida = salida.substr(0, salida.length - 1);
				mostrarSalida(salida);
			}
		}

		else{
			let salida = obtenerSalida();
			let historia = obtenerHistoria();

			if(salida == '' && historia != '') {
				if(isNaN(historia[historia.length - 1])) {
					historia = historia.substr(0, historia.length - 1);
				}
			}

			if(salida != '' || historia != '') {
				salida = salida == '' ? salida : parsearNumero(salida);
				historia = historia + salida;

				if(this.id == '=') {
					let resultado = eval(historia);
					mostrarSalida(resultado);
					mostrarHistoria('');
				}

				else{
					historia = historia + this.id;
					mostrarHistoria(historia);
					mostrarSalida('');
				}
			}
		}
		
	});
}

// Funciones adicionales

// Funcion para extraer lo contenido en el historial de calculo
function obtenerHistoria() {
	return document.getElementById('historia').innerText;
}

// Funcion para mostrar en el historial de calculo
function mostrarHistoria(numero) {
	document.getElementById('historia').innerText = numero;
}

// Funcion para extraer lo contenido en el historial de calculo
function obtenerSalida() {
	return document.getElementById('salida').innerText;
}

// Funcion para imprimir resultado de calculo 
function mostrarSalida(numero) {
	if(numero == '') {
		document.getElementById('salida').innerText = numero;
	}

	else{
		document.getElementById('salida').innerText = obtenerNumeroParseado(numero);
	}
}

// Funcion para recuperar numero parseado desde cadena
function obtenerNumeroParseado(numero) {
	if(numero == '-') {
		return '';
	}

	let num = Number(numero);
	let valor = num;
	return valor;
}

// Funcion para parsear numero desde cadena
function parsearNumero(numero) {
	return Number(numero);
}
