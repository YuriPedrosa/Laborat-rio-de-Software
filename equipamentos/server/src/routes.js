const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const ClassController = require('./controllers/ClassController');
const EquipamentController = require('./controllers/EquipamentController');
const ReserveController = require('./controllers/ReserveController');
const ScheduleController = require('./controllers/ScheduleController');
const SubjectController = require('./controllers/SubjectController');
const TeacherController = require('./controllers/TeacherController')
const UserController = require('./controllers/UserController');

// Product
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Class
routes.get('/class', ClassController.index);
routes.get('/class/:id', ClassController.show);
routes.post('/class', ClassController.store);
routes.put('/class/:id', ClassController.update);
routes.delete('/class/:id', ClassController.destroy);

// Equipament
routes.get('/equipament', EquipamentController.index);
routes.get('/equipament/:id', EquipamentController.show);
routes.post('/equipament', EquipamentController.store);
routes.put('/equipament/:id', EquipamentController.update);
routes.delete('/equipament/:id', EquipamentController.destroy);

// Reserve
routes.get('/reserve', ReserveController.index);
routes.get('/reserve/:id', ReserveController.show);
routes.post('/reserve', ReserveController.store);
routes.put('/reserve/:id', ReserveController.update);
routes.delete('/reserve/:id', ReserveController.destroy);

// Schedule
routes.get('/schedule', ScheduleController.index);
routes.get('/schedule/:id', ScheduleController.show);
routes.post('/schedule', ScheduleController.store);
routes.put('/schedule/:id', ScheduleController.update);
routes.delete('/schedule/:id', ScheduleController.destroy);

// Subject
routes.get('/subject', SubjectController.index);
routes.get('/subject/:id', SubjectController.show);
routes.post('/subject', SubjectController.store);
routes.put('/subject/:id', SubjectController.update);
routes.delete('/subject/:id', SubjectController.destroy);

// Teacher
routes.get('/teacher', TeacherController.index);
routes.get('/teacher/:id', TeacherController.show);
routes.post('/teacher', TeacherController.store);
routes.put('/teacher/:id', TeacherController.update);
routes.delete('/teacher/:id', TeacherController.destroy);

// User
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

module.exports = routes;