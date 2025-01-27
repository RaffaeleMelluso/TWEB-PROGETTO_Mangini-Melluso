const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/DynamicData';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connesso a MongoDB'))
    .catch(err => console.error('Errore nella connessione a MongoDB:', err));

module.exports = mongoose;
