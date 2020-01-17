const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const ClientController = require('./controllers/ClientController');
const EquipamentController = require('./controllers/EquipamentController');
const OrderController = require('./controllers/OrderController');
const UserController = require('./controllers/UserController');

// Client
routes.get('/client', ClientController.index);
routes.get('/client/:id', ClientController.show);
routes.post('/client', ClientController.store);
routes.put('/client/:id', ClientController.update);
routes.delete('/client/:id', ClientController.destroy);

// Equipament
routes.get('/equipament', EquipamentController.index);
routes.get('/equipament/:id', EquipamentController.show);
routes.post('/equipament', EquipamentController.store);
routes.put('/equipament/:id', EquipamentController.update);
routes.delete('/equipament/:id', EquipamentController.destroy);

// Order
routes.get('/order', OrderController.index);
routes.get('/order/:id', OrderController.show);
routes.post('/order', OrderController.store);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.destroy);

// User
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;