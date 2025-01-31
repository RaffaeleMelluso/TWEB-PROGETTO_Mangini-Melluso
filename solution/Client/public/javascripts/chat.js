/**
 * Chat client script for handling real-time communication.
 * This script initializes the chat interface, connects to the chat server,
 * handles user interactions, and manages message sending and receiving.
 */

let name = null;
let roomNo = null;
let role = null;
let chat = io.connect('/chat');

/**
 * Initializes the chat interface by displaying the login form
 * and hiding the chat window. Also initializes the chat socket.
 */
function init() {
    document.getElementById('initial_form').style.display = 'block';
    document.getElementById('chat_interface').style.display = 'none';
    initChatSocket();
}

/**
 * Generates a random room number and assigns it to the room input field.
 */
function generateRoom() {
    roomNo = Math.round(Math.random() * 10000);
    document.getElementById('roomNo').value = 'R' + roomNo;
}

/**
 * Initializes the chat socket to handle joining events and message exchanges.
 */
function initChatSocket() {
    // Event triggered when a user joins the room.
    chat.on('joined', function (room, userId, role) {
        if (userId === name) {
            // If the current user, enter the chat
            hideLoginInterface(room, userId);
        } else {
            // Notify that a new user has joined the chat
            writeOnChatHistory('<b>' + userId + '</b>' + '<b> ' + role + '</b>' + ' joined room ' + room);
        }
    });

    // Event triggered when a chat message is received.
    chat.on('chat', function (room, userId, role, chatText) {
        let who = userId;
        if (userId === name) who = 'Me';
        writeOnChatHistory('<b>' + who + ':</b> ' + '<b>' + role + ':</b> ' + chatText);
    });
}

/**
 * Sends a chat message to the server.
 */
function sendChatText() {
    let chatText = document.getElementById('chat_input').value;
    chat.emit('chat', roomNo, name, role, chatText);
}

/**
 * Connects the user to a specified chat room and assigns a unique identifier.
 */
function connectToRoom() {
    const predefinedRoom = document.getElementById('predefinedRoom').value;
    const customRoomName = document.getElementById('roomName').value;
    roomNo = predefinedRoom || customRoomName || document.getElementById('roomNo').value;
    name = document.getElementById('name').value;
    role = document.getElementById('role').value;
    if (!name) name = 'Unknown-' + Math.random();
    chat.emit('create or join', roomNo, name, role);
}
/**
 * Writes a message to the chat history.
 */
function writeOnChatHistory(text) {
    console.log("writeOnChatHistory");
    let history = document.getElementById('chat_history');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    history.appendChild(paragraph);
    document.getElementById('chat_input').value = '';
}

/**
 * Hides the login interface and displays the chat interface after joining a room.
 */
function hideLoginInterface(room, userId) {
    document.getElementById('initial_form').classList.add('hidden');
    const elements = document.getElementsByClassName('form-group');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
    document.getElementById('connect').style.display = 'none';
    document.getElementById('form').style.display = 'none';
    document.getElementById('chat_interface').style.display = 'block';
    document.getElementById('who_you_are').innerHTML = userId;
    document.getElementById('in_room').innerHTML = ' ' + room;
}