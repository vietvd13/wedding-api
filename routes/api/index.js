const MessageController = require('../../controllers/MessageController');

const routerApi = require('express').Router();

routerApi.get('/ping', (req, res) => {
  return res.status(200).json({
    status_code: 200,
    message: 'Server is working'
  });
});

routerApi.post('/message', MessageController.addMessage)
routerApi.get('/message', MessageController.getAllMessage);

routerApi.get('*', (req, res) => {
  return res.status(404).json({
    status_code: 404,
    message: 'API not found'
  });
});

module.exports = routerApi;