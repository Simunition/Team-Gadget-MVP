const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '3mb'}));
app.use(express.json({type: '*/*'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    data = request.body;
    data.timestamp = Date.now();
    database.insert(data);
    response.end('Success');
});