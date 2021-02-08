const express = require('express');

const routes = express.Router();

const companyContractController = require('./controllers/companyContractController');

routes.get('/connections', companyContractController.show);

module.exports = routes;