/**
 * Chat Routes
 *
 * This module defines the routes for handling chat-related requests.
 * It includes rendering the chat page, managing user authentication,
 * and retrieving user session data.
 */

const express = require('express');
const router = express.Router();

/**
 * Renders the chat page.
 * Accessible via GET request to `/chat`.
 */
router.get('/', (req, res) => {
    res.render('chat', { title: 'Chat' });
});

/**
 * Handles user login for the chat.
 * Accepts a POST request containing username and role.
 * Stores user information in the session and redirects to `/chat`.
 *
 * @body {string} username - The username of the user.
 * @body {string} role - The role of the user (default: 'User').
 */
router.post('/', (req, res) => {
    const { username, role } = req.body;
    if (!username) {
        return res.status(400).send('Username is required');
    }
    req.session.user = { username, role: role || 'User' };
    res.redirect('/chat');
});

/**
 * Retrieves the logged-in user's session data.
 * Returns user information if authenticated, otherwise sends a 401 error.
 */
router.get('/user-data', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('User not logged in');
    }
    res.json(req.session.user);
});

module.exports = router;