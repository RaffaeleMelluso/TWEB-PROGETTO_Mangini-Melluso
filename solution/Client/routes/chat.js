const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/user-login', (req, res) => {
    const { username, role } = req.body;
    if (!username) {
        return res.status(400).send('Username is required');
    }
    req.session.user = { username, role: role || 'Utente' };
    res.redirect('/chat-home');
});

router.get('/chat-home', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/user-login');
    }
    res.sendFile(path.join(__dirname, '../public/chat.html'));
});

router.get('/user-data', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('User not logged in');
    }
    res.json(req.session.user);
});

module.exports = router;