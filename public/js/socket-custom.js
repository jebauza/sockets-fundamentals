var socket = io();

// ON Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});

// EMIT Enviar Informcion
socket.emit('enviarMensaje', {
    user: 'Jorge',
    menssaje: 'Hola Mundo'
}, function(resp) {
    console.log('Resp server: ', resp);
});