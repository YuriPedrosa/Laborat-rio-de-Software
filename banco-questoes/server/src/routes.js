const express = require('express');
const routes = express.Router();

const AdminController = require('./controllers/AdminController');
const AnswerController = require('./controllers/AnswerController');
const ClassController = require('./controllers/ClassController');
const QuestionController = require('./controllers/QuestionController');
const SubjectController = require('./controllers/SubjectController');
const TeacherController = require('./controllers/TeacherController');
const TestController = require('./controllers/TestController');

// Administrator
routes.get('/admin', AdminController.index);
routes.get('/admin/:id', AdminController.show);
routes.post('/admin', AdminController.store);
routes.put('/admin/:id', AdminController.update);
routes.delete('/admin/:id', AdminController.destroy);

// Answer
routes.get('/answer', AnswerController.index);
routes.get('/answer/:id', AnswerController.show);
routes.post('/answer', AnswerController.store);
routes.put('/answer/:id', AnswerController.update);
routes.delete('/answer/:id', AnswerController.destroy);

// Class
routes.get('/class', ClassController.index);
routes.get('/class/:id', ClassController.show);
routes.post('/class', ClassController.store);
routes.put('/class/:id', ClassController.update);
routes.delete('/class/:id', ClassController.destroy);

// Question
routes.get('/question', QuestionController.index);
routes.get('/question/:id', QuestionController.show);
routes.post('/question', QuestionController.store);
routes.put('/question/:id', QuestionController.update);
routes.delete('/question/:id', QuestionController.destroy);

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

// Test
routes.get('/test', TestController.index);
routes.get('/test/:id', TestController.show);
routes.post('/test', TestController.store);
routes.put('/test/:id', TestController.update);
routes.delete('/test/:id', TestController.destroy);


module.exports = routes;