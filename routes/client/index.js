const routerClient = require('express').Router();

routerClient.get('*', (req, res) => {
  res.send('Client is working');
});

module.exports = routerClient;