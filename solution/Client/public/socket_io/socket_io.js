exports.init = function(io) {
    const chat = io
        .of('/chat')
        .on('connection', function (socket) {
            try {
                socket.on('create or join', function (room, userId, role) {
                    if(!role) role = 'Utente';
                    socket.join(room);
                    chat.to(room).emit('joined', room, userId, role);
                });

                socket.on('chat', function (room, userId, chatText, role) {
                    if (!role) role = 'Utente';
                    chat.to(room).emit('chat', room, userId, chatText, role);
                });

                socket.on('disconnect', function() {
                    console.log('someone disconnected');
                });
            } catch (e) {
                console.error(e);
            }
        });
}