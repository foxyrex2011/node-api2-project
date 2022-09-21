// implement your server here
const express = require('express');
const postsRouter = require('./posts/posts-router');
const server = express();

// require your posts router and connect it here
server.use(express.json());
server.use('/api/posts', postsRouter);

module.exports = server;