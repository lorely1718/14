function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var Mayor = function (n1, n2, n3){ 

	var numero1 = parseInt(document.getElementById("numero 1").value);
	
	var numero2 = parseInt(document.getElementById("numero 2").value);

	var numero3 = parseInt(document.getElementById("numero 3").value);

	var resultado = Math.min (numero1, numero2, numero3)

	return resultado;
	 }
	
	 function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var CONVE = function (n1){ 

	var numero1 = parseInt(document.getElementById("Centimetros").value);

	var resultado = numero1 * .39;

	return resultado;

	}
	function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var CONV = function (n1){ 

	var numero1 = parseInt(document.getElementById("Metros").value);

	var resultado = numero1 * 1.094;

	return resultado;

	}