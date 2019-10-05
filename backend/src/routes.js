const express = require('express')
const multer = require('multer');
const uploadConfig = require('./config/upload');

const AuthController = require('./controllers/AuthController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/auth', AuthController.store);

routes.post('/spots', upload.single('thumb'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/profile', ProfileController.show);

routes.post('/spots/:spot_id/booking', BookingController.store);

module.exports = routes;