const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        user: 'administrator',
        message: 'Vienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            data
        });


        /* if (message.user) {
            callback({
                resp: 'Todo Salio Bien'
            });
        } else {
            callback({
                resp: 'Salio Mal'
            });
        }

        callback(); */
    });
});