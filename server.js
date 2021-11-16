import config from './config'

import express from 'express';
const server = express();

server.set('view engine', 'ejs')


server.get('/', (req, res) => {
    res.send();
});

server.listen(config.port,() => {
    console.info('Express listening on port ', config.port);
});