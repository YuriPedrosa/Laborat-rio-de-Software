const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const AnimalController = require('./controllers/AnimalController');
const ServiceController = require('./controllers/ServiceController');

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Animal
routes.get('/animals', AnimalController.index);
routes.get('/animals/:id', AnimalController.show);
routes.post('/animals', AnimalController.store);
routes.put('/animals/:id', AnimalController.update);
routes.delete('/animals/:id', AnimalController.destroy);

// Service
routes.get('/services', ServiceController.index);
routes.get('/services/:id', ServiceController.show);
routes.post('/services', ServiceController.store);
routes.put('/services/:id', ServiceController.update);
routes.delete('/services/:id', ServiceController.destroy);


module.exports = routes;