const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/chat.html'));
});

router.post('/chat', (req, res) => {
    const { username, role } = req.body;
    if (!username) {
        return res.status(400).send('Username is required');
    }
    req.session.user = { username, role: role || 'User' };
    res.redirect('/chat');
});

router.get('/user-data', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('User not logged in');
    }
    res.json(req.session.user);
});

module.exports = router;