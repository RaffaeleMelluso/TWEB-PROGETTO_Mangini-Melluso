const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('chat', { title: 'Chat' });
});

router.post('/', (req, res) => {
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