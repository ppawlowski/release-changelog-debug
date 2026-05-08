const express = require('express');
const healthRoutes = require('./routes/health');
const usersRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/health', healthRoutes);
  app.use('/users', usersRoutes);

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
