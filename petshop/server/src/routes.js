const express = require('express');
const routes = express.Router();

const AnimalController = require('./controllers/AnimalController');
const ProductController = require('./controllers/ProductController');
const PurchaseController = require('./controllers/PurchaseController');
const ServiceController = require('./controllers/ServiceController');
const BossController = require('./controllers/BossController');
const PersonController = require('./controllers/PersonController');
const EmployeeController = require('./controllers/EmployeeController');

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

//Boss
routes.get('/boss', BossController.index);
routes.post('/boss', BossController.store);

//Person
routes.get('/person', PersonController.index);
routes.post('/person', PersonController.store);

//Employee
routes.get('/employee', EmployeeController.index);
routes.post('/employee', EmployeeController.store);

module.exports = routes;