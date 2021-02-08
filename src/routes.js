const express = require('express');

const routes = express.Router();

const companyContractController = require('./controllers/companyContractController');

routes.get('/companyContract', companyContractController.show);

module.exports = routes;