const express = require('express');
const routes = express.Router();

const AnimalController = require('./controllers/AnimalController');
const AdministradorController = require('./controllers/AdminstratorController');
const ClientController = require('./controllers/ClientController');
const ProductController = require('./controllers/ProductController');
const PurchaseController = require('./controllers/PurchaseController');
const SecretaryController = require('./controllers/SecretaryController');
const ServiceController = require('./controllers/ServiceController');

// Administrador
routes.get('/admin', AdministradorController.index);
routes.get('/admin/:id', AdministradorController.show);
routes.post('/admin', AdministradorController.store);
routes.put('/admin/:id',AdministradorController.update);
routes.delete('/admin/:id', AdministradorController.destroy);

// Animal
routes.get('/animals', AnimalController.index);
routes.get('/animals/:id', AnimalController.show);
routes.post('/animals', AnimalController.store);
routes.put('/animals/:id', AnimalController.update);
routes.delete('/animals/:id', AnimalController.destroy);

// Client
routes.get('/clients', ClientController.index);
routes.get('/clients/:id', ClientController.show);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.destroy);

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

// Secretary
routes.get('/secretaries', SecretaryController.index);
routes.get('/secretaries/:id', SecretaryController.show);
routes.post('/secretaries', SecretaryController.store);
routes.put('/secretaries/:id', SecretaryController.update);
routes.delete('/secretaries/:id', SecretaryController.destroy);

// Service
routes.get('/services', ServiceController.index);
routes.get('/services/:id', ServiceController.show);
routes.post('/services', ServiceController.store);
routes.put('/services/:id', ServiceController.update);
routes.delete('/services/:id', ServiceController.destroy);

module.exports = routes;