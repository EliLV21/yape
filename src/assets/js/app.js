// ----INGRESAR NUMERO----
var url = 'http://localhost:3000/api/registerNumber';
function cargarPagina(){
	$('.carousel').carousel();
	$("#telefono").keyup(activarBoton);
	$("#continuarCodigo").click(mandarCodigo);
};
var activarBoton = function(e){
	var telephone = $("#telefono").val().length;
	var botonActivo = $( "#test6" ).prop("checked");
	if ( telephone === 10){
		 $("#continuarCodigo").removeAttr("disabled");

	};
};
function mandarCodigo (e){
	e.preventDefault();
	var telefonoPersonal = $("#telefono").val();
	// console.log(telefonoPersonal)
	$.post( url , {
		"phone": telefonoPersonal,
		"terms": true
	})
	.then(function (response) {
		var codigo = response.data.code;
		alert("Tu codigo es: " + codigo);
		location.href = "ingresaCodigo.html"
	})
	.catch(function(error) {
		console.log(error);
	});
};
var validarCodigo = function(){
	var codigoIngresado = $("#telefonoCodigo");
	if(codigoIngresado === codigo){
		alert("Gracias por registrarte");
	}
}
$(document).ready(function(){
	  cargarPagina();
});
