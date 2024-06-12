//this is the API file because im scared to mess with the index.ts file
//require in express
const express = require('express');
const app = express();

let PORT;

app.get('/', (req, res, next) => {
    res.status(200).json({'message': 'Hello, World!'});
});

app.post('/', (req, res, next) => {
    const message = req.body.message;
    res.status(201).json({'receivedMessage': message});
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});