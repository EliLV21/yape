$(document).ready(function(){
      $('.carousel').carousel();
});
// $(".myCheckBox").checked(true);

// $.post( 'http://localhost:3000/api/registerNumber', {
// 	"phone": "+525525331406",
// 	"terms": "true"
// })
// .then(function(response) {
// 	console.log(response);
// })
// .catch(function(error) {
// 	console.log(error);
// });

// ----INGRESAR NUMERO----

var url = 'http://localhost:3000/api/registerNumber';
var telephone = $("#telefono").val();


var enviarDatos = function(){
	$.post( url , {
		"phone": "+525525331406",
		"terms": "true"
	})
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.log(error);
	});
};

/* $("#continuar").submit(function(e){
 	e.preventDefault();

});*/

/*function validacionDatos(e, datos){
	e.preventDefault();
	var telefono = $("#telefono").val;
	var terminos =

};*/
