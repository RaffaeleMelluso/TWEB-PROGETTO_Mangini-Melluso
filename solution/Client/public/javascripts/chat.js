let name = null;
let roomNo = null;
let role = null;
let chat= io.connect('/chat');



function init() {
    document.getElementById('initial_form').style.display = 'block';
    document.getElementById('chat_interface').style.display = 'none';

    initChatSocket();

}



function generateRoom() {
    roomNo = Math.round(Math.random() * 10000);
    document.getElementById('roomNo').value = 'R' + roomNo;
}

function initChatSocket() {
    // called when someone joins the room. If it is someone else it notifies the joining of the room
    chat.on('joined', function (room, userId, role) {
        if (userId === name) {
            // it enters the chat
            hideLoginInterface(room, userId);
        } else {
            // notifies that someone has joined the room
            writeOnChatHistory('<b>' + userId + '</b>'+ '<b> '+ role +'</b>' + ' joined room ' + room);
        }
    });
    // called when a message is received
    chat.on('chat', function (room, userId, role, chatText) {
        let who = userId
        if (userId === name) who = 'Me';
        writeOnChatHistory('<b>' + who + ':</b> '+ '<b>' + role + ':</b> ' + chatText);
    });

}
function sendChatText() {
    let chatText = document.getElementById('chat_input').value;
    chat.emit('chat', roomNo, name, role,  chatText);
}

function connectToRoom() {
    roomNo = document.getElementById('roomNo').value;
    name = document.getElementById('name').value;
    role = document.getElementById('role').value;
    if (!name) name = 'Unknown-' + Math.random();
    chat.emit('create or join', roomNo, name);
}

function writeOnChatHistory(text) {
    console.log("writeOnChatHistory");
    let history = document.getElementById('chat_history');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    history.appendChild(paragraph);
    document.getElementById('chat_input').value = '';
}


function hideLoginInterface(room, userId) {
    document.getElementById('initial_form').classList.add('hidden');
    const elements = document.getElementsByClassName('form-group');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden');
    }
    document.getElementById('connect').style.display = 'none';
    document.getElementById('form').style.display = 'none';

    document.getElementById('chat_interface').style.display = 'block';
    document.getElementById('who_you_are').innerHTML= userId;
    document.getElementById('in_room').innerHTML= ' '+room;
}