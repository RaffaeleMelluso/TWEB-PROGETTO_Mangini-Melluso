document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            role: formData.get('role')
        };
        fetch('/user-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = '/chat-home';
                } else {
                    return response.json().then(data => {
                        throw new Error(data.message);
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});