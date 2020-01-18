const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const EmployeeController = require('./controllers/EmployeeController');
const ManagerController = require('./controllers/ManagerController');
const SaleController = require('./controllers/SaleController');
const VehicleController = require('./controllers/VehicleController');

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Employee
routes.get('/employee', EmployeeController.index);
routes.get('/employee/:id', EmployeeController.show);
routes.post('/employee', EmployeeController.store);
routes.put('/employee/:id', EmployeeController.update);
routes.delete('/employee/:id', EmployeeController.destroy);

// Manager
routes.get('/manager', ManagerController.index);
routes.get('/manager/:id', ManagerController.show);
routes.post('/manager', ManagerController.store);
routes.put('/manager/:id', ManagerController.update);
routes.delete('/manager/:id', ManagerController.destroy);

// Sale
routes.get('/sale', SaleController.index);
routes.get('/sale/:id', SaleController.show);
routes.post('/sale', SaleController.store);
routes.put('/sale/:id', SaleController.update);
routes.delete('/sale/:id', SaleController.destroy);

// Vehicle
routes.get('/vehicle', VehicleController.index);
routes.get('/vehicle/:id', VehicleController.show);
routes.post('/vehicle', VehicleController.store);
routes.put('/vehicle/:id', VehicleController.update);
routes.delete('/vehicle/:id', VehicleController.destroy);

module.exports = routes;