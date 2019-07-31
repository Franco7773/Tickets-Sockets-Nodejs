// Comando para establecer la conexión
var socket = io();

var label = document.getElementById('lblNuevoTicket');

socket.on('connect', function() {

	console.log('Usuario conectado');
});

socket.on('disconnect', function() {
	console.log('Usuario desconectado');
});

socket.on('estadoActual', function(resp) {

	label.textContent = resp.actual;
});


document.querySelector('#newTicket').addEventListener('click', function() {

	socket.emit('siguienteTicket', null, function(siguienteTicket) {
	
		label.textContent = siguienteTicket;
	});
});
