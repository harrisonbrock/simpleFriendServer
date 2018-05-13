const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const friends = [
    {
        id: 0,
        name: 'Tom'
    }
];

// Get All Friends
app.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

// Get Friend By ID
app.get('/api/friends/:id', (req, res) => {

    // convert Id to int
    const id =  parseInt(req.params.id);

    // Find friend with ID
    const friend = friends.find(f => f.id ===  id);

    if (!friend) res.status(404).send({error: `No Friend found with  ID: ${id}`});
    else res.status(201).send(friend);
});

app.get('/api/friends', (req, res) => {

    if (friends.length === 0) res.status(404).send({error: 'They are no friends in the database. Please add a friend'})
    else res.status(201).send(friends);

});

const port = process.env.PORT || 4500;
app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));