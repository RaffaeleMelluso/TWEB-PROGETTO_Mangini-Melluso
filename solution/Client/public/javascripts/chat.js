document.addEventListener('DOMContentLoaded', () => {
    const socket = io('/chat-home');

    const chatForm = document.getElementById('chatForm');
    const messageInput = document.getElementById('message');
    const chatContainer = document.getElementById('chatContainer');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Fetch user data from the server
    fetch('/user-data')
        .then(response => response.json())
        .then(data => {
            welcomeMessage.textContent = `Ciao, ${data.username}. Hai ruolo ${data.role}`;
        });

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = messageInput.value;
        socket.emit('chat message', message);
        messageInput.value = '';
    });

    socket.on('chat message', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.username} (${msg.role}): ${msg.message}`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });
});