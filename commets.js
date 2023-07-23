// Create web server with express
// Create a route for comments
// Add a GET route for comments
// Add a POST route for comments

// Require express
const express = require('express');

// Create express app
const app = express();

// Require body-parser
const bodyParser = require('body-parser');

// Require cors
const cors = require('cors');

// Use cors
app.use(cors());

// Use body-parser
app.use(bodyParser.json());

// Create an array of comments
const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!',
        movieId: '1'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog',
        movieId: '2'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd',
        movieId: '3'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof',
        movieId: '4'
    }
];

// Create a route for comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Add a GET route for comments
app.get('/comments/:movieId', (req, res) => {
    const movieComments = comments.filter(comment => comment.movieId === req.params.movieId);
    res.send(movieComments);
});

// Add a POST route for comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    comments.push(req.body);
    res.send({ status: 'SUCCESS' });
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on port 4001');
});