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
    },

    {
        id: 0,
        name: 'Amber'
    },

    {
        id: 0,
        name: 'Tiffany'
    },

    {
        id: 0,
        name: 'John'
    }
];

// Get All Friends
app.get('/api/friends', (req, res) => {

    if (friends.length === 0) res.status(404).send({error: 'They are no friends in the database. Please add a friend'});
    else res.status(201).send(friends);

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

// Create friend
app.post('/api/friends/:id', (req, res) => {

    // Get name for body
    const name = req.body.name;

    if (!name) res.status(400).send({error: `You must enter a name`})
    else {
        const newId = friends[friends.length - 1].id + 1;
        const friend = {id: newId, name: name};
        friends.push(friend);
        res.status(201).send(friend);
    }
});

// Update friend
app.put('/api/friends/:id', (req, res) => {

    // convert Id to int
    const id =  parseInt(req.params.id);

    // Find friend with ID
    const friend = friends.find(f => f.id ===  id);

    if (!friend) res.status(404).send({error: `No Friend found with  ID: ${id}`});
    else {
        friend.name = req.body.name;
        res.status(203);
    }
});

app.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 4500;
app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));