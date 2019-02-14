const express = require('express'); // importing a CommonJS module
const cors = require('cors');

const postsRouter = require('./posts/post-router');

const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'client/build')))

//production mode
if(process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})


server.use(express.json());

server.use(cors());

server.use('/api/posts', postsRouter);

module.exports = server;
