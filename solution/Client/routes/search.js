const express = require('express');
const router = express.Router();

const fakeData = {
    movies: [
        { title: 'Inception', description: 'A mind-bending thriller.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
        { title: 'The Matrix', description: 'Sci-fi classic.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
        { title: 'Inception2', description: 'A mind-bending thriller.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
        { title: 'Inception3', description: 'A mind-bending thriller.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
    ],
    actors: [
        { title: 'Leonardo DiCaprio', description: 'Award-winning actor.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
    ],
    directors: [
        { title: 'Christopher Nolan', description: 'Visionary director.', image: 'https://www.corriere.it/methode_image/2022/04/29/Spettacoli/Foto%20Spettacoli/rock%208-cf-cropped-40-0-552-416.jpg' },
    ],
};

router.get('/search', (req, res) => {
    const { query, category } = req.query;
    const results = category === 'all'
        ? Object.values(fakeData).flat()
        : fakeData[category] || [];

    const filteredResults = results.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    res.json(filteredResults);
});

module.exports = router;
