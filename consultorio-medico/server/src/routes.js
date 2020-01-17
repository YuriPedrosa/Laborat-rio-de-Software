const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const DoctorController = require('./controllers/DoctorController');
const HealthInsuranceController = require('./controllers/HealthInsuranceController');
const PatientController = require('./controllers/PatientController');
const SecretaryController = require('./controllers/SecretaryController');
const UserController = require('./controllers/UserController');

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Doctor
routes.get('/doctor', DoctorController.index);
routes.get('/doctor/:id', DoctorController.show);
routes.post('/doctor', DoctorController.store);
routes.put('/doctor/:id', DoctorController.update);
routes.delete('/doctor/:id', DoctorController.destroy);

// Health Insurance
routes.get('/insurance', HealthInsuranceController.index);
routes.get('/insurance/:id', HealthInsuranceController.show);
routes.post('/insurance', HealthInsuranceController.store);
routes.put('/insurance/:id', HealthInsuranceController.update);
routes.delete('/insurance/:id', HealthInsuranceController.destroy);

// Patient
routes.get('/patient', PatientController.index);
routes.get('/patient/:id', PatientController.show);
routes.post('/patient', PatientController.store);
routes.put('/patient/:id', PatientController.update);
routes.delete('/patient/:id', PatientController.destroy);

// Secretary
routes.get('/secretary', SecretaryController.index);
routes.get('/secretary/:id', SecretaryController.show);
routes.post('/secretary', SecretaryController.store);
routes.put('/secretary/:id', SecretaryController.update);
routes.delete('/secretary/:id', SecretaryController.destroy);

//User
routes.get('/user', UserController.index);

module.exports = routes;