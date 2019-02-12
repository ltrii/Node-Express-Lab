const express = require('express'); // importing a CommonJS module

const postsRouter = require('./posts/post-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', async (req, res) => {
  res.send(`
    <h2>Posts</h>
    <p>Get some posts</p>
  `);
});

module.exports = server;
