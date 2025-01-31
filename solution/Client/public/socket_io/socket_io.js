/**
 * Socket.io Chat Initialization
 *
 * This module initializes a real-time chat system using Socket.io.
 * It handles user connections, room management, message broadcasting,
 * and disconnections within the chat namespace (`/chat`).
 */

exports.init = function(io) {
    // Creates a new namespace for chat functionality
    const chat = io
        .of('/chat')
        .on('connection', function (socket) {
            try {
                /**
                 * Handles room creation or joining.
                 * Users can join a chat room, and their presence is broadcasted to others.
                 *
                 * @param {string} room - The room identifier.
                 * @param {string} userId - The unique user identifier.
                 * @param {string} role - The role of the user in the chat (defaults to 'Utente').
                 */
                socket.on('create or join', function (room, userId, role) {
                    if (!role) role = 'Utente'; // Default role assignment
                    socket.join(room); // Joins the specified chat room
                    chat.to(room).emit('joined', room, userId, role); // Notifies all users in the room
                    // Save the room to the list of available rooms if it's a new custom room
                    if (!['Film Italiani', 'Ultime Uscite', 'Premiazioni', 'Attori', 'Generale', 'Fun Facts'].includes(room)) {
                        // Logic to save the new room (e.g., in a database or in-memory list)
                        console.log(`New custom room created: ${room}`);
                    }
                });

                /**
                 * Handles message broadcasting within a chat room.
                 *
                 * @param {string} room - The room identifier.
                 * @param {string} userId - The unique user identifier.
                 * @param {string} chatText - The message content.
                 * @param {string} role - The role of the user in the chat (defaults to 'Utente').
                 */
                socket.on('chat', function (room, userId, chatText, role) {
                    if (!role) role = 'Utente'; // Default role assignment
                    chat.to(room).emit('chat', room, userId, chatText, role); // Broadcast message to room
                });

                /**
                 * Handles user disconnection events.
                 * Logs when a user disconnects from the chat system.
                 */
                socket.on('disconnect', function() {
                    console.log('A user disconnected from the chat.');
                });
            } catch (e) {
                console.error('Error in chat socket handling:', e);
            }
        });
}