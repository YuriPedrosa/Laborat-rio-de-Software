const express = require('express');
const routes = express.Router();

const AnimalController = require('./controllers/AnimalController');
const ProductController = require('./controllers/ProductController');
const PurchaseController = require('./controllers/PurchaseController');
const ServiceController = require('./controllers/ServiceController');
const AdminController = require('./controllers/AdminController');
const SecretaryController = require('./controllers/SecretaryController');
const ClientController = require('./controllers/ClientController');
const UserController = require('./controllers/UserController');

// Animal
routes.get('/animals', AnimalController.index);
routes.get('/animals/:id', AnimalController.show);
routes.post('/animals', AnimalController.store);
routes.put('/animals/:id', AnimalController.update);
routes.delete('/animals/:id', AnimalController.destroy);

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Purchase
routes.get('/purchases', PurchaseController.index);
routes.get('/purchases/:id', PurchaseController.show);
routes.post('/purchases', PurchaseController.store);
routes.put('/purchases/:id', PurchaseController.update);
routes.delete('/purchases/:id', PurchaseController.destroy);

// Service
routes.get('/services', ServiceController.index);
routes.get('/services/:id', ServiceController.show);
routes.post('/services', ServiceController.store);
routes.put('/services/:id', ServiceController.update);
routes.delete('/services/:id', ServiceController.destroy);

//Admin
routes.get('/admin', AdminController.index);
routes.post('/admin', AdminController.store);

//Secretary
routes.get('/secretary', SecretaryController.index);
routes.post('/secretary', SecretaryController.store);

//Client
routes.get('/client', ClientController.index);
routes.post('/client', ClientController.store);

// User
routes.get('/user', UserController.index);

module.exports = routes;