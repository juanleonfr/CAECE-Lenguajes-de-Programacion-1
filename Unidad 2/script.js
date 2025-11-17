// punto 2: alert de bienvenida
let bienvenida = () => {
	alert('Bienvenidos a Lenguajes de Programación 1');
};

// punto 4: suma de dos numeros
let sumaconsola = () => {
	let num1 = 15;
	let num2 = 25;
	let suma = num1 + num2;
	console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
};
sumaconsola();

// punto 5: suma de dos numeros ingresados por el usuario
let sumaUsuario = () => {
	let num1 = Number.parseFloat(prompt('Punto 5: Ingrese el primer número:'));
	let num2 = Number.parseFloat(prompt('Punto 5: Ingrese el segundo número:'));
	let suma = num1 + num2;
	console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
};
sumaUsuario();

// punto 6: suma de valores de Array
let sumaArray = () => {
	let arr = [10, 20, 30, 40, 50];
	let suma = 0;
	for (let element of arr) {
		suma += element;
	}
	console.log(`La suma de los valores del array es: ${suma}`);
};
sumaArray();

// punto 7: comparación de dos numero ingresados por el usuario
let compararNumeros = () => {
	let num1 = Number.parseFloat(prompt('Punto 7: Ingrese el primer número para comparar:'));
	let num2 = Number.parseFloat(prompt('Punto 7: Ingrese el segundo número para comparar:'));
	if (num1 > num2) {
		console.log(`${num1} es mayor que ${num2}`);
	} else if (num1 < num2) {
		console.log(`${num2} es mayor que ${num1}`);
	} else {
		console.log(`Ambos números son iguales: ${num1}`);
	}
};
compararNumeros();

// punto 8: determinar si un numero es par o impar
let parImpar = () => {
	let num = Number.parseFloat(prompt('Punto 8: Ingrese un número:'));
	if (num % 2 === 0) {
		console.log(`El número ${num} es PAR`);
	} else {
		console.log(`El número ${num} es IMPAR`);
	}
};
parImpar();

// punto 9: ingresar numero 0-11 y mostrar el mes correspondiente
let mostrarMes = () => {
	let num = Number.parseInt(prompt('Punto 9: Ingrese un número entre 0 y 11:'));

	let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

	if (num >= 0 && num <= 11) {
		console.log(`El mes correspondiente es: ${meses[num]}`);
	} else {
		console.log(`Número inválido. Debe estar entre 0 y 11.`);
	}
};
mostrarMes();

// punto 10: verificar si ambos numeros son pares
let ambosPares = () => {
	let num1 = Number.parseFloat(prompt('Punto 10: Ingrese el primer número:'));
	let num2 = Number.parseFloat(prompt('Punto 10: Ingrese el segundo número:'));

	if (num1 % 2 === 0 && num2 % 2 === 0) {
		console.log(`${num1} y ${num2} son números pares.`);
	} else {
		console.log(`No son ambos pares. Valores ingresados: ${num1} y ${num2}`);
	}
};
ambosPares();

// punto 11: división
let division = () => {
	let num1 = Number.parseFloat(prompt('Punto 11: Ingrese el dividendo:'));
	let num2 = Number.parseFloat(prompt('Punto 11: Ingrese el divisor:'));

	if (num2 === 0) {
		console.log(`No se puede dividir por cero. Divisor ingresado: ${num2}`);
	} else {
		let resultado = num1 / num2;
		console.log(`La división de ${num1} por ${num2} es: ${resultado}`);
	}
};
division();

// punto 12: verificar si ambos numeros estan entre 1 y 100
let verificarRango = () => {
	let num1 = Number.parseFloat(prompt('Punto 12: Ingrese el primer numero:'));
	let num2 = Number.parseFloat(prompt('Punto 12: Ingrese el segundo numero:'));

	let enRango1 = num1 >= 1 && num1 <= 100;
	let enRango2 = num2 >= 1 && num2 <= 100;

	console.log(`¿${num1} está entre 1 y 100? ${enRango1}`);
	console.log(`¿${num2} está entre 1 y 100? ${enRango2}`);
};
verificarRango();

// punto 13: comparar longitud de dos palabras
let compararPalabras = () => {
	let palabra1 = prompt('Punto 13: Ingrese la primera palabra:');
	let palabra2 = prompt('Punto 13: Ingrese la segunda palabra:');

	if (palabra1.length > palabra2.length) {
		console.log(`"${palabra1}" tiene mayor longitud que "${palabra2}"`);
	} else if (palabra1.length < palabra2.length) {
		console.log(`"${palabra2}" tiene mayor longitud que "${palabra1}"`);
	} else {
		console.log(`Ambas palabras tienen igual longitud (${palabra1.length} caracteres)`);
	}
};
compararPalabras();

// punto 14: separar ropa blanca de ropa de color
let lavarRopa = () => {
	let prenda = prompt('Punto 14: Indique si la prenda es blanca o de color:').toLowerCase();

	if (prenda === 'blanca' || prenda === 'blanco') {
		console.log('La prenda se agrega al lavado de ropa blanca.');
	} else if (prenda === 'color') {
		console.log('La prenda se agrega al lavado de ropa de color.');
	} else {
		console.log('Tipo de prenda no reconocido.');
	}
};
lavarRopa();

// punto 15: algoritmo para tomar mate o cafe
let mateOcafe = () => {
	let opcion = prompt('Punto 15: ¿Desea mate o cafe? (mate/cafe)').toLowerCase();

	if (opcion === 'mate') {
		console.log('Preparando mate: calentar agua, poner yerba, cebar.');
	} else if (opcion === 'cafe') {
		console.log('Preparando café: calentar agua, agregar café, mezclar.');
	} else {
		console.log('Opción no válida.');
	}
};
mateOcafe();

// punto 16: clasificar generacion segun edad
let generacion = () => {
	let edad = Number.parseInt(prompt('Punto 16: Ingrese su edad:'));
	let nacimiento = 2025 - edad;
	switch (true) {
		case nacimiento >= 1946 && nacimiento <= 1964:
			console.log('Pertenece a: Baby Boomers');
			break;
		case nacimiento >= 1965 && nacimiento <= 1980:
			console.log('Pertenece a: Generación X');
			break;
		case nacimiento >= 1981 && nacimiento <= 1997:
			console.log('Pertenece a: Millennials');
			break;
		case nacimiento >= 2001 && nacimiento <= 2010:
			console.log('Pertenece a: Generación Z');
			break;
		case nacimiento >= 2010 && nacimiento <= 2025:
			console.log('Pertenece a: Generación Alfa');
			break;
		default:
			console.log('Fecha fuera de los rangos establecidos.');
	}
};
generacion();

// punto 17: comprobar de 0 a 100 si es par o impar
let cicloParImpar = () => {
	for (let i = 0; i <= 100; i++) {
		if (i % 2 === 0) {
			console.log(`${i} es PAR`);
		} else {
			console.log(`${i} es IMPAR`);
		}
	}
};
cicloParImpar();

// punto 18: multiplicar cada elemento de un array por un numero ingresado usando sumas sucesivas
let multiplicacionSucesiva = () => {
	let num = Number.parseFloat(prompt('Punto 18: Ingrese un número:'));
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let res = [];

	for (let elemento of arr) {
		let acumulador = 0;

		for (let i = 0; i < num; i++) {
			acumulador += elemento;
		}

		res.push(acumulador);
	}

	console.log(`Array original: ${arr}`);
	console.log(`Número ingresado: ${num}`);
	console.log(`Resultados de la multiplicación por sumas sucesivas: ${res}`);
};
multiplicacionSucesiva();

// punto 19: separar nombres y numeros ingresados por el usuario
let separarDatos = () => {
	let nombres = [];
	let numeros = [];
	let entrada;
	while (true) {
		entrada = prompt('Punto 19: Ingrese un nombre o número (o "t" para terminar):');
		if (entrada.toLowerCase() === 't') {
			break;
		} else if (!isNaN(entrada) && entrada.trim() !== '') {
			numeros.push(Number.parseFloat(entrada));
		} else {
			nombres.push(entrada);
		}
	}
	console.log(`Nombres ingresados: ${nombres}`);
	console.log(`Números ingresados: ${numeros}`);
};
separarDatos();

//punto 20: recorrer array con 10 numeros, parar si hay un numero negativo
let recorrerArrayHastaNegativo = () => {
	let arr = [5, 10, 15, -3, 20, 25, 30, 35, 40, 45];
	for (let numero of arr) {
		if (numero < 0) {
			console.log(`Número negativo encontrado: ${numero}. Deteniendo el recorrido.`);
			break;
		} else {
			console.log(numero);
		}
	}
};
recorrerArrayHastaNegativo();

// punto 21: recorrer array mostrando en consola
let recorrerArray = () => {
	let arr = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

	for (let element of arr) {
		console.log(`Valor: ${element}`);
	}
};
recorrerArray();

// punto 22: dividir validando divisor
let dividirNumeros = () => {
	let dividendo = Number.parseFloat(prompt('Punto 22: Ingrese el dividendo:'));
	let divisor;
	do {
		divisor = Number.parseFloat(prompt('Punto 22: Ingrese el divisor (no puede ser cero):'));
		if (divisor === 0) {
			console.log('El divisor no puede ser cero. Por favor, ingrese un valor válido.');
		}
	} while (divisor === 0);
	let resultado = dividendo / divisor;
	console.log(`El resultado de dividir ${dividendo} por ${divisor} es: ${resultado}`);
	return resultado;
};
dividirNumeros();

// punto 23: verificar si array contiene negativos con dos funciones
let hayNegativos = (arr) => {
	for (let num of arr) {
		if (num < 0) {
			return true;
		}
	}
	return false;
};

let mostrarResultadoNegativos = (arr) => {
	if (hayNegativos(arr)) {
		console.log('El array contiene números negativos.');
	} else {
		console.log('El array no contiene números negativos.');
	}
};
let arrEjemplo = [1, 2, 3, -4, 5];
mostrarResultadoNegativos(arrEjemplo);

// punto 24: mostrar día de la semana segun numero ingresado
let diaDeLaSemana = () => {
	let numeroDia = Number.parseInt(prompt('Punto 24: Ingrese un número del 1 al 7 para obtener el día de la semana:'));
	let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
	if (numeroDia >= 1 && numeroDia <= 7) {
		console.log(`El día correspondiente es: ${dias[numeroDia - 1]}`);
	} else {
		console.log('Número inválido. Debe estar entre 1 y 7.');
	}
};
diaDeLaSemana();

// punto 25: buscar numero en array y devolver posicion
let encontrarNumeroEnArray = () => {
	let arr = [10, 20, 30, 40, 50];
	let num;
	do {
		num = Number.parseFloat(prompt('Punto 25: Ingrese un numero para buscar en el array:'));
	} while (isNaN(num));
	let posicion = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			posicion = i;
			break; // si esta repetido, se queda con la primera ocurrencia
		}
	}
	if (posicion !== -1) {
		console.log(`El numero ${num} se encontro en la posicion ${posicion}.`);
	} else {
		console.log(`El numero ${num} no se encuentra en el array.`);
	}
	return posicion;
};
encontrarNumeroEnArray();

//punto 26: transponer array
let transponerArray = (arr) => {
	let arrTranspuesto = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		arrTranspuesto.push(arr[i]);
	}
	console.log(`Array original: ${arr}`);
	console.log(`Array transpuesto: ${arrTranspuesto}`);
	return arrTranspuesto;
};
transponerArray([1, 8, 9, 5]);

// punto 27: validar numero
let validarNumero = () => {
	let num = Number.parseFloat(prompt('Punto 27: Ingrese un número para validar:'));
	let esImpar = num % 2 !== 0;
	let mayorA5 = num > 5;
	let menorA100 = num < 100;
	let multiploDe3 = num % 3 === 0;
	let resultado = esImpar && mayorA5 && menorA100 && multiploDe3;
	console.log(`El número ${num} cumple con todas las condiciones: ${resultado}`);
};
validarNumero();

// punto 28: validar paises en array
let validarPaises = (arr) => {
	let paisesBuscados = ['argentina', 'alemania', 'suiza'];
	let encontrados = arr.filter((pais) => paisesBuscados.includes(pais.toLowerCase()));
	if (encontrados.length === 0) {
		console.log('Ninguno de los paises buscados esta presente en el array.');
		return false;
	} else if (encontrados.length === paisesBuscados.length) {
		console.log('Los tres paises estan presentes en el array. No se permite simultaneamente.');
		return false;
	} else {
		console.log(`Paises encontrados: ${encontrados.join(', ')}`);
		return true;
	}
};
validarPaises(['Brasil', 'Argentina', 'Chile', 'Alemania']);
validarPaises(['Brasil', 'Argentina', 'Chile', 'Alemania', 'Suiza']);

// punto 29: validar fecha dd/mm
let validarFecha = (fecha) => {
	let partes = fecha.split('/');
	if (partes.length !== 2) {
		console.log('Formato de fecha inválido. Use el formato dd/mm.');
		return false;
	}
	let dia = Number.parseInt(partes[0]);
	let mes = Number.parseInt(partes[1]);
	let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (mes < 1 || mes > 12) {
		console.log('Mes inválido. Debe estar entre 1 y 12.');
		return false;
	}
	if (dia < 1 || dia > diasPorMes[mes - 1]) {
		console.log(`Día inválido para el mes ${mes}. Debe estar entre 1 y ${diasPorMes[mes - 1]}.`);
		return false;
	}
	console.log(`La fecha ${fecha} es válida.`);
	return true;
};
validarFecha('29/2');
validarFecha('31/4');
validarFecha('15/8');

// punto 30: crear un objeto rectangulo
let Rectangulo = function (ancho, alto) {
	this.ancho = ancho;
	this.alto = alto;
	console.log(`Rectángulo creado con ancho: ${ancho} y alto: ${alto}`);
};
let rectangulo_ej = new Rectangulo(5, 10);

// punto 31: calcular area de un objeto rectangulo
Rectangulo.prototype.calcularArea = function () {
	let area = this.ancho * this.alto;
	console.log(`Área del rectángulo: ${area}`);
	return area;
};
rectangulo_ej.calcularArea();

// punto 32: objeto persona que almacene nombre edad dni y ciudad de residencia
let Persona = function (nombre, edad, dni, ciudad) {
	this.nombre = nombre;
	this.edad = edad;
	this.dni = dni;
	this.ciudad = ciudad;
};

// punto 33: Mostrar por consola cada uno de los datos de la persona
Persona.prototype.mostrarDatos = function () {
	console.log(`Nombre: ${this.nombre}`);
	console.log(`Edad: ${this.edad}`);
	console.log(`DNI: ${this.dni}`);
	console.log(`Ciudad de residencia: ${this.ciudad}`);
};

// punto 34: Crear varios objetos persona y escribir por consola la cantidad de gente que vive en CABA
let personas = [
	new Persona('Juan', 28, '12345678', 'CABA'),
	new Persona('Ana', 34, '87654321', 'Rosario'),
	new Persona('Luis', 45, '55555888', 'CABA'),
	new Persona('Marta', 22, '12222221', 'Mendoza'),
	new Persona('Carlos', 30, '55667788', 'CABA'),
];
let contarCABA = (personas) => {
	let contador = 0;
	for (let persona of personas) {
		if (persona.ciudad.toUpperCase() === 'CABA') {
			contador++;
		}
	}
	console.log(`Cantidad de personas que viven en CABA: ${contador}`);
};
contarCABA(personas);

// de vuelta al punto 33 para mostrar los datos de la primera persona
personas[0].mostrarDatos();