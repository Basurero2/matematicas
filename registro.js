//Cuadrado---Perimetro
function peCuadrado (l1) {
	perimetroCuadrado = (l1 * 4);
	return perimetroCuadrado
}

//Cuadrado---Area
function aCuadrado (l1) {
	areaCuadrado = l1 * l1
	return areaCuadrado
}

//Triangulo---Perimetro
function pTriangulo (l1, l2, l3) {
	perimetroTriangulo = l1 + l2 + l3
	return perimetroTriangulo
}

//Triangulo---area
function aTriangulo (l1,l2, b ) {
	altura =  Math.sqrt(((b/2)**2) + l1**2)  
	areaTriangulo = (b * altura) / 2 
	return areaTriangulo
}

//Altura de un triangulo }





//Circulo---Diametro-Perimetro
function pCirculo (r) {
	diametro = r * 2
	perimetroCirculo = diametro * 3.14 
	return perimetroCirculo
}

//Circulo---Area
function aCirculo (r) {
	areaCirculo = (r * r) * 3.14 
	return areaCirculo
}




//CALCULACION

//Cuadrado

function calcularPerimetroCuadrado() {
	var input = document.getElementById('inputCuadrado')	
	const value = input.value;
	const perimetro = peCuadrado(value)
	resultadoP = document.getElementById("pResultado")
	resultadoP.innerText = "El perimetro del Cuadrado es: " + perimetro

	
}

function calcularAreaCuadrado() {
	var input = document.getElementById('inputCuadrado')
	const value = input.value;
	const area = aCuadrado(value)
	resultadoP = document.getElementById("pResultado")
	resultadoP.innerText = "El area del Cuadrado es: " + area
}

//Triangulo

function calcularPerimetroTriangulo() {
	const input = document.getElementById('ladoATriangulo')	
	const input2 = document.getElementById('ladoBTriangulo')	
	const input3 = document.getElementById('baseTriangulo')	

	const value = Number(input.value);
	const value2 = Number(input2.value);
	const value3 = Number(input3.value);
	
	const perimetro = pTriangulo(value, value2, value3)
	

	resultadoP = document.getElementById("pResultado2")
	resultadoP.innerText = "El perimetro del triangulo es: " + perimetro
}

function calcularAreaTriangulo() {
	const input = document.getElementById('ladoATriangulo')	
	const input2 = document.getElementById('ladoBTriangulo')	
	const input3 = document.getElementById('baseTriangulo')

	const value = input.value;
	const value2 = input2.value;
	const value3 = input3.value;
	const area = aTriangulo(value, value2, value3)
	

	resultadoP = document.getElementById("pResultado2")
	resultadoP.innerText = "El area del triangulo es: " + area
}

//Circulo

function calcularPerimetroCirculo() {
	var input = document.getElementById('inputCirculo')	
	const value = input.value;
	const perimetro = pCirculo(value)
	resultadoP = document.getElementById("pResultado3")
	resultadoP.innerText = "El perimetro del circulo es: " + perimetro
}

function calcularAreaCirculo() {
	var input = document.getElementById('inputCirculo')
	const value = input.value;
	const area = aCirculo(value)
	resultadoP = document.getElementById("pResultado3")
	resultadoP.innerText = "El area del circulo es: " + area
}






// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

