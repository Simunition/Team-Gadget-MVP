const express = require('express');
const Datastore = require('nedb');

const app = express();
//const port = process.env.PORT;
const port = 3000;
app.listen(port, () => console.log('Starting server at ' + port));
app.use(express.static('public'));
app.use(express.json({limit: '3mb'}));
app.use(express.json({type: '*/*'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    data = request.body;
    data._id = Math.random().toString(36).slice(2);
    data_formatted = {
        "_id": {
            "S": data._id
        },
        "type": {
          "S": data.type
        },
        "severity": {
          "S": data.severity
        },
        "reference": {
          "S": data.reference
        },
        "intro": {
          "S": data.intro
        },
        "who": {
          "S": data.who
        },
        "what": {
          "S": data.what
        },
        "when1": {
          "S": data.when1
        },
        "when2": {
          "S": data.when2
        },
        "where": {
          "S": data.where
        },
        "why": {
          "S": data.why
        },
        "impact": {
          "S": data.impact
        },
        "additional": {
          "S": data.additional
        },
        "output": {
          "S": data.output
        },
        "feedback": {
            "S": data.feedback
        },
        "timestamp": {
          "N": String(Date.now())
        }
      }
    console.log(data);
    database.insert(data_formatted);
    response.end('Success');
});